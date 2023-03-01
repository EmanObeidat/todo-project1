var userName=prompt("what is your name?");
console.log(userName);
var gender=prompt("what is your gender?");
if(gender=="female" || gender=="male")
{
    console.log(gender);

}
else
{
    alert("sorry! please enter your gender");
    gender=prompt("what is your gender?");
}
if(gender=="female")
{
    alert(`welcome Ms ${userName}` );
}
else if(gender=="male")
{
alert(`welcome Mr ${userName}` );

}
else
{
    alert("welcome :)");
}

var age=prompt("what is your age?");
if(age<=0)
{
    alert("sorry!")
}
var welcoming=confirm("welcome to our page");
var cancling=confirm("Are you sure?");
