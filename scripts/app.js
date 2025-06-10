console.log("Js loaded");

const myFullName = "Priyanka Tatikonda";
const myStudentNumber = "1173777";
let result = `${myFullName} - ${myStudentNumber}`;
console.log(result);

let primaryHeadingContent = document.querySelector("h1");
primaryHeadingContent.innerHTML = result;

primaryHeadingContent.classList.add("primaryHeading");