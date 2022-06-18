document.querySelector("#form").addEventListener("submit",signin)
document.querySelector("#button2").addEventListener("click",createAccount)
 let userInfo = JSON.parse(localStorage.getItem("userInfo"))
//  console.log(userInfo)
function createAccount(){
window.location.href="signup.html"
}

let flag = false


function signin(event){
event.preventDefault();
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;
console.log(email, password);
for(var i=0; i<userInfo.length; i++)
{
    if(userInfo[i].email == email && userInfo[i].password == password)
    {
        flag = true
    }
}

if(flag)
{
    alert("login successful!");
    window.location.href = "#"
}
else
{
    alert("Login failed!");
}
}