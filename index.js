const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");

let errorMsg = document.querySelector("#errorMsg");
errorMsg.style.display = "none";

let characterCountInput = document.querySelector("#characterCountInput");

result1.style.color = "#273549";
result2.style.color = "#273549";

let individualContainer = document.querySelector(".individualResultContainer");


let generateBtn = document.querySelector("#generateBtn");

let passwordHolder1 = "";
let passwordHolder2 = "";

generateRandomIndex = () => {
    let index1 = Math.floor(Math.random() * characters.length);
    let index2 = Math.floor(Math.random() * characters.length);

    passwordHolder1 += characters[index1];
    passwordHolder2 += characters[index2];
}

let producePasswords = () => {
    if(characterCountInput.value === ""){
        errorMsg.style.display = "block"
        characterCountInput.style.border = "2px solid rgb(218, 81, 81)"
    }
    else{
        errorMsg.style.display = "none" // removes the warning if there's any
        characterCountInput.style.border = "none" // removes the border from the warning

        passwordHolder1 = "";
        passwordHolder2 = "";
    
        result1.style.color = "#4ADF86 ";
        result2.style.color = "#4ADF86 ";
        generateBtn.textContent = "Generate again"
    
       for(let i = 0; i < characterCountInput.value; i++){
        generateRandomIndex();
       }
    
       result1.textContent = passwordHolder1;
       result2.textContent = passwordHolder2;
    }
}

generateBtn.addEventListener("click", producePasswords);