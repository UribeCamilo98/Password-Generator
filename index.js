let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPassword=""
let secondPassword=""
let psswrd1El=document.getElementById("psswrd1")
let psswrd2El=document.getElementById("psswrd2")


function gnrtPsswrd(){
    let psswrd=""
    let index=""
    for(let i=0; i<15;i++){
        index= Math.floor(Math.random()*characters.length)
        psswrd+=characters[index]
    }
    return psswrd
}

function assignPsswrd(){
    firstPassword=gnrtPsswrd()
    secondPassword=gnrtPsswrd()
    psswrd1El.textContent = firstPassword
    psswrd2El.textContent = secondPassword
}