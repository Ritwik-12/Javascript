const inputSlider=document.querySelector("[data-lengthSlider]");

const lengthDisplay=document.querySelector("[data-lengthNumber]");
const passwordDispaly=document.querySelector("[ data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");

const upperCaseCheck=document.querySelector("#uppercase");
const lowerCaseCheck=document.querySelector("#lowercase");
const numberCaseCheck=document.querySelector("#numbers");
const symbolCaseCheck=document.querySelector("#sumbols");

const indicator=document.querySelector("[data-indicater]");

const generateBtn=document.querySelector(".generateButton");

const allCheckBox=document.querySelectorAll("input[type=checkbox]");

let password ="";
let passwordLength=15; 
let checkCount=1;

handleSlider();

//set strength  gth circle color to grey

//set slider 

function handleSlider(){

    inputSlider.value=passwordLength;
    lengthDisplay.innerHTML=passwordLength;
}





