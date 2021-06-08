'use strict';
let userName = prompt('what is your name?');
alert('welcome  '+userName);

let count=0;

let juice= prompt('Do you think I like juice').toLowerCase();
if(juice ==='yes'){
    console.log('your answer is true');
    alert('good job '+userName);
    count++;

}


let tea= prompt('Do you think I like tea').toLowerCase();
if(tea ==='yes'){
    console.log('your answer is true');
    alert('great '+userName);
    count++;

}

let coffee= prompt('Do you think I like coffee').toLowerCase();
if(coffee ==='yes'){
    console.log('your answer is true');
    alert('good answer '+userName);
    count++;

}
let cats= prompt('Do you think I like cats').toLowerCase();
if(cats ==='yes'){
    console.log('your answer is true');
    alert('wow nice '+userName);
    count++;

}
let movies= prompt('Do you think I like movies').toLowerCase();
if(movies ==='yes'){
        console.log('your answer is true');
        alert('yes  '+userName);
        count++;

}


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

 
