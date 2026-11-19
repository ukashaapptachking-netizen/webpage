var std_id = 1776577
var std_name = "zain"
var eng = +prompt("Enter your english marks");
var urdu =  +prompt("Enter your urdu  marks");
var islamiat =  +prompt("Enter your islamiat marks");
var comp =  +prompt("Enter your computer  marks");
var chem =  +prompt("Enter your chemistry marks");
var obtain_marks = english + urdu + islamiat + comp + chem;
var total_marks = 100*5;
var per = (obtain_marks/total_marks) * 100;

console.log('student id:',std_id)
console.log('student_name:',std_name)
console.log('english marks:',eng)
console.log('urdu marks:',urdu)
console.log('islamiat marks:',islamiat)
console.log('computer marks:',comp)
console.log('chemistry marks:',chem)
console.log('obtain marks:',obtain_marks)
console.log('total marks:',total_marks)
console.log('percentage:',per.toFixed(2));

if((per >= '90')&&(per <= '100')){
    console.log('Grade : A+');
}
else if((per >= '80')&&(per <= '89')){
    console.log('Grade : A');
}
else if((per >= '70')&&(per <= '79')){
    console.log('Grade : B');
}
else if((per >= '60')&&(per <= '69')){
    console.log('Grade : C');
}
else if((per >= '33')&&(per <= '59')){
    console.log('Grade : D');
}
else if((per >= '00')&&(per <= '32')){
    console.log('Grade : Fail');
}
else{
    console.log('Not A Valid Percentage');
}