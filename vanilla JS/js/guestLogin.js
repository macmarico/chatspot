document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("guestLogin").addEventListener('submit', login);
});

async function guestLogin(url, fd){
    let h = new Headers();
    h.append('Accept', 'application/json');
    let req = new Request(url,{
        method: 'POST',
        headers: h,
        mode: 'cors',
        body: fd,
    });
     let response = await fetch(req);
     let text = await response.json();
    if(text.status == true){ 
         contents = `[{username: ${text.name}, status: ${text.status}]`;
        sessionStorage.setItem("loginDetailsKey", contents);
        location.replace("home.html")
   }
}

async function login(ev) {
    ev.preventDefault();
    let loginForm = ev.target;
    console.log(loginForm);
    let fd = new FormData(loginForm);
    const url = 'php/guestLogin.php';
    guestLogin(url,fd);
    
}