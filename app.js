`use strict`;
var userName = prompt("what is your name?");
console.log(userName);
var age = prompt("what is your age?");
if (age <= 0) {
    alert("sorry!")
}
else {
    console.log(age);
}
var gender = prompt("what is your gender?");
if (gender == "female" || gender == "male") {
    console.log(gender);

}
else {
    alert("sorry! please enter your gender");
    gender = prompt("what is your gender?");
}
var skip = confirm("do you want to skip the welcoming message");
if (skip !== true) {
    if (gender == "female") {
        alert(`welcome Ms ${userName}`);
    }
    else if (gender == "male") {
        alert(`welcome Mr ${userName}`);

    }
    else {
        alert("welcome :)");
    }
}


var arrayOfAnswers = [];
function causeOfAttend() {
    var taskQuastion = prompt("Are you here to know your task?");
    if (taskQuastion == "yes" || taskQuastion == "no") { console.log(arrayOfAnswers.push(taskQuastion)); }

    else { arrayOfAnswers.push("invalid"); }


}
causeOfAttend();

function employeeId() {
    var idNum = prompt("Do you have ID number?");
    if (idNum == "yes" || idNum == "no") { console.log(arrayOfAnswers.push(idNum)); }

    else {
        arrayOfAnswers.push("invalid");
    }
}
employeeId();

function nationality() {
    var nationalityConfirm = prompt("Are you Jordainian?");
    if (nationalityConfirm == "yes" || nationalityConfirm == "no") { console.log(arrayOfAnswers.push(nationalityConfirm)); }


    else {
        arrayOfAnswers.push("invalid");

    }
}
nationality();
for(let i=0; i<arrayOfAnswers.length;i++)
{
    console.log(arrayOfAnswers[i]);
}


