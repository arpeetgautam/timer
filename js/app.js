const endDate= "11 september 2023 2:36 PM ";
document.getElementById("end-Date").innerHTML=endDate;
const inputs=document.querySelectorAll("input");
function clock(){
    const end= new Date(endDate);
    const now= new Date();
    // console.log(end,now);
    const diff= end-now;
    // console.log(diff);
    if(diff < 0) return
    const temp=diff/1000/60/60/24;
    const days=Math.floor(temp);
    inputs[0].value=days;
      
    const temp1= diff/1000/3600;
    // console.log(Math.floor(temp1));
    const hour= Math.floor(temp1)-days*24;
    console.log(hour);
    inputs[1].value=hour;

    const temp2= diff/1000/60;
    const myVariable=days*24*60;
    const myVariable2=myVariable + hour*60;
    const minutes=Math.floor(temp2)- myVariable2;
    console.log(minutes);
    inputs[2].value=minutes;

    const temp3= diff/1000;
    const myVariable3= days*24*60*60 + hour*60*60 + minutes*60;
    const seconds= Math.floor(temp3)-myVariable3;
    console.log(seconds);
    inputs[3].value=seconds;





}
    // rough calcs
    // const temp1=diff/1000/60/60;
    // const temp2=Math.floor(temp1);
    // console.log(temp2);
    // const temp3= days*24;
    // const final=temp2-days;
    // inputs[1].value=final;
    // // const temp2=diff/1000/60;
    // // const mins=Math.floor(temp2);
    // // console.log(mins);
    // const timer= diff/1000/60;
    // const timer1= Math.floor(timer);
    // console.log(timer1);
    // // 
    // const countdown= diff/1000;
    // const countdown1=Math.floor(countdown);
    // console.log(countdown1);
    // const diff1= diff/1000;
    // const totalSec= diff1;





    
clock();

setInterval(
    ()=>{
        clock()
    },
    1000
    
)