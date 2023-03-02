var userName = prompt("what is your name?");
console.log(userName);
var age = prompt("what is your age?");
if (age <= 0) {
    alert("sorry!")
}
else
{
    console.log(gender);
}
var gender = prompt("what is your gender?");
if (gender == "female" || gender == "male") {
    console.log(gender);

}
else {
    alert("sorry! please enter your gender");
    gender = prompt("what is your gender?");
}
if (gender == "female") {
    alert(`welcome Ms ${userName}`);
}
else if (gender == "male") {
    alert(`welcome Mr ${userName}`);

}
else {
    alert("welcome :)");
}


var welcoming = confirm("welcome to our page");
var skip = confirm("do you want to skip the welcoming message");
if (skip == true) {
    alert("Are you sure?");
}
var arrayOfAnswers=[];
function causeOfAttend() {
    var taskQuastion = confirm("Are you here to know your task?");
    console.log(arrayOfAnswers.push(taskQuastion));
    // console.log(taskQuastion);

    // if (taskQuastion == false) {
    //     var why = prompt("why you are here?");
    //     console.log(why);
    // }
    // else if (taskQuastion == true) {
    //     var well = alert("well done :)");
    // }
}
causeOfAttend();

function employeeId() {
    var idNum = confirm("Do you have ID number?");
    console.log(arrayOfAnswers.push(idNum));
    console.log(idNum);

}
employeeId();
function nationality()
{
    var nationalityConfirm=confirm("Are you Jordainian?");
   console.log(arrayOfAnswers.push(nationalityConfirm));
}
nationality();
console.log(arrayOfAnswers);
// function maritalStatus()
// {
//     var depNum=confirm("Are you single?");
// }



