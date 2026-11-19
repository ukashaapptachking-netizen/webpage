var studentid = 123456
var student_name = "ali"
var english = +prompt("Enter your eng marks");
var urdu =  +prompt("Enter your urdu  marks");
var math =  +prompt("Enter your math marks");
var computer =  +prompt("Enter your computer  marks");
var islamiat =  +prompt("Enter your islamiat  marks");
var obtain_marks = english + urdu + math + computer + islamiat;
var total_marks = 100*5;
var per = (obtain_marks/total_marks) * 100;

console.log('student id:',studentid)
console.log('student_name:',student_name)
console.log('english marks:',english)
console.log('urdu marks:',urdu)
console.log('math marks:',math)
console.log('computer marks:',computer)
console.log('islamiat marks:',islamiat)
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