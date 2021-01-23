document.getElementById('clubSec').style.display = "block";
document.getElementById('onlineSec').style.display = "none";
document.getElementById('chatsSec').style.display = "none";
document.querySelector('.chatRoomCont').style.display = "none";

document.getElementById('clubNav').addEventListener('click',()=>{
    document.getElementById('clubSec').style.display = "block";
    document.getElementById('chatsSec').style.display = "none";
    document.getElementById('onlineSec').style.display = "none";
});

document.getElementById('onlineNav').addEventListener('click',()=>{
    document.getElementById('clubSec').style.display = "none";
    document.getElementById('chatsSec').style.display = "none";
    document.getElementById('onlineSec').style.display = "block";
 
});

document.getElementById('chatsNav').addEventListener('click',()=>{
    document.getElementById('clubSec').style.display = "none";
    document.getElementById('chatsSec').style.display = "block";
    document.getElementById('onlineSec').style.display = "none";
});

document.querySelector('.chatsUsernameCont').addEventListener('click',()=>{
    document.getElementById('clubSec').style.display = "none";
    document.getElementById('chatsSec').style.display = "none";
    document.getElementById('onlineSec').style.display = "none";
    document.querySelector('.chatRoomCont').style.display = "block";
});