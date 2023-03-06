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
// if (gender == "female") {
//     alert(`welcome Ms ${userName}`);
// }
// else if (gender == "male") {
//     alert(`welcome Mr ${userName}`);

// }
// else {
//     alert("welcome :)");
// }


// var welcoming = confirm("welcome to our page");
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
    }}

    `use strict`;

var arrayOfAnswers = [];
function causeOfAttend() {
    var taskQuastion = prompt("Are you here to know your task?");
    if (taskQuastion == "yes" || taskQuastion == "no")
     { console.log(arrayOfAnswers.push(taskQuastion)); }
    // else if (taskQuastion == " "|| taskQuastion==true || taskQuastion==false) {
    //     var emptyQuastion = prompt("INVALID:please answer if you are here to know your task")
    //     console.log(arrayOfAnswers.push(emptyQuastion))
    // }
    else { console.log(arrayOfAnswers.push("invalid")); }


}
causeOfAttend();

function employeeId() {
    var idNum = prompt("Do you have ID number?");
    if (idNum == "yes" || idNum == "no")
     { console.log(arrayOfAnswers.push(idNum)); }
    // else if (idNum == " " || idNum==true ||idNum==false) 
    // {
    //     var emptyid = prompt("INVALID:please enter if you have id number or not")
    //     console.log(arrayOfAnswers.push(emptyid))
    // }
    else {
        console.log(arrayOfAnswers.push("invalid"));
    }
}
employeeId();

function nationality() {
    var nationalityConfirm = prompt("Are you Jordainian?");
    if (nationalityConfirm == "yes" || nationalityConfirm == "no")
     { console.log(arrayOfAnswers.push(nationalityConfirm)); }

    // else if (nationalityConfirm == "") {
    //     var invalidnation = prompt("INVALID:please answer if you are jordanian or not");
    //     console.log(arrayOfAnswers.push(invalidnation));
    // }
    else {
        console.log(arrayOfAnswers.push("invalid"));

    }
}
nationality();
console.log(arrayOfAnswers);



