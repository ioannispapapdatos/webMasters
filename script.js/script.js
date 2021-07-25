
alert('helo there');

const time= document.getElementById('time');


function showTime(){
 let today=new Date();
 let hour= today.getHours();
let  min= today.getMinutes();
 let  sec = today.getSeconds();
 // set pm of am
 const amPm= hour >= 12?'PM':'AM';
 // 12 hour Format
// let  hour =hour % 12 || 12;
// add zeros

 // output time
 time.innerHTML =` ${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPM ? amPm : ''} `;
 setTimeout(showTime,1000);

}
function addZero(n){
 return(parseInt(n,10) <10 ?'0':'')+ n;
}

// set background and greeting
function setBgGreet(){
   let today = new Date();
   let hour= today.getHours();
   if (hour < 12) {
;
    document.body.style.backgroundRepeat='no-repeat';
    // document.body.style.backgroundPosition:'center';
    greeting.textContent ='Good Morning(fill your name): ' ;
     document.body.style.color='white';

   }else if(hour< 18) {
     // Afternoon

  greeting.textContent ='Good Afternoon My name is: ';
   document.body.style.color='white ';
}else{


 greeting.textContent ='Good Night My name is:';
 document.body.style.color='white';

   }
}


setBgGreet();
showTime();

// alert('hello there')
