const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const {
  addUser,
  removeUser,
  getUserByUsername,
  getUser,
  getUsersInRoom,
} = require("./users");

const PORT = process.env.PORT || 5000;

const router = require("./router/router");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(router);
app.use(cors());

io.on("connection", (socket) => {
  socket.on("join", ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });
    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.username}, welcome to the room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.username}, has joined` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.username, text: message });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on(
    "privateMessage",
    (
      username,
      PrivateChatSecondUsername,
      message,
      privateChatRoomId,
      callback
    ) => {
      const user = getUserByUsername(PrivateChatSecondUsername);
      // sending to individual socketid (private message)
      io.to(user.id).emit("privateMess", {
        privateRoom: privateChatRoomId,
        chatData: { user: username, text: message },
      });
      io.to(socket.id).emit("privateMess", {
        privateRoom: privateChatRoomId,
        chatData: { user: username, text: message },
      });
      callback();
    }
  );

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.username} has left.`,
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
