'use strict';
let userName = prompt('what is your name?');
alert('welcome  '+userName); 

let count=0;
let age = prompt('what is my age?');
age =parseInt(age)
if(age == 23){
    console.log('Right. Well done');
    alert('Right. Well done');
    count++;
}else if(age >=20 && age <=25){
    alert('very close')
}else{
    alert('so far')
}

let weight= prompt('what is my weight?');
weight = parseInt(weight);
if(weight == 80){
    console.log('Right. Well done');
    alert('Right. Well done');
    count++;
}else if(weight >=70 && weight <=85){
    alert('very close')
}else{
    alert('so far')
}

let height= prompt('what is my height?');
height = parseInt(height)
if(height == 176){
    console.log('Right. Well done');
    alert('Right. Well done');
    count++;
}else if(height >=170 && height <=180){
    alert('very close')
}else{
    alert('so far')
}

let speed= prompt('What is the maximum speed I can reach in the car?');
speed = parseInt(speed);
if(speed == 180){
    console.log('Right. Well done');
    alert('Right. Well done');
    count++;
}else if(speed >=170 && speed <=190){
    alert('very close')
}else{
    alert('so far')
 }

let mark= prompt('What is the last mark I got?');
mark = parseInt(mark)
if(mark == 100){
    console.log('Right. Well done');
    alert('Right. Well done');
    count++;
}else if(mark >=90 && mark <100){
    alert('very close')
}else{
    alert('so far')
}


let minute= prompt('How long did it take to build this website(in minute)?');
minute = parseInt(minute);
if(minute == 40){
    console.log('Right. Well done');
    alert('Right. Well done');
    count++;
}else if(minute >=25 && minute <50){
    alert('very close')
}else{
    alert('so far')
}
console.log('your scor is '+count);
let answer =['coffe','jem','see food','cars','my pc','video games'];
let userAnser = prompt('What do you think I like more of these options?'+answer).toLowerCase();
do{
   userAnser = prompt('no try again '+answer).toLowerCase();
}
 while(userAnser !== answer[0]);

// for(let i=0 ;i<answer.length;i++){
  //   if(userAnser === answer[0]){
    //     alert('great answer');

     //}
 //}

 
