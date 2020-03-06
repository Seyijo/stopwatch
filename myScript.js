let hr = 0;
let mn = 0;
let sec = 1;
let obj={foo:true};
class GetInnerHtml{
  constructor(str){
    this.str =str;
  }
  
}
let strObj = new GetInnerHtml("00:00:00");
const istart = () => {
  if(obj.foo===false){
    hr=0;
    mn=0;
    sec=0;
    obj.foo= true;
  }
  let hour = hr < 10 ? "0" + hr : hr;
  let min = mn < 10 ? "0" + mn : mn;
  let secs = sec < 10 ? "0" + sec : sec;
  let screen = document.getElementById("screen");
  if (sec > 59) {
    ++mn;
    sec = 0;
  }
  if (mn > 59) {
    ++hr;
    mn = 0;
  }
  
  screen.innerHTML = hour + ":" + min + ":" + secs;

  ++sec;
}

const runStart = () => {
  let t = setInterval(istart, 1000);
  let btn = document.getElementById("start");
  btn.setAttribute("disabled", "disabled");
  btn1 = document.getElementById("pause");
  document.getElementById("pause").disabled=false;
  let btn2 = document.getElementById("continue");
  btn1.addEventListener("click", () => {
    clearInterval(t);
    let screen=document.getElementById("screen");
    strObj.str=screen.innerHTML;
    btn1.disabled=true;
    btn2.disabled = false;
    });

    btn2.addEventListener("click", ()=>{
      cont();
    });
    let btn3=document.getElementById("stop");
    btn3.addEventListener("click",()=>{
clearInterval(t);
document.getElementById("start").disabled=false;
document.getElementById("pause").disabled=true;
document.getElementById("continue").disabled=true;
obj.foo=false;
    });
}
const cont = () => {
let str =  strObj.str;
  let arr = str.split(":");
  let hr1 = parseInt(arr[0]);
  let mn1 = parseInt(arr[1]);
  let sec1 = parseInt(arr[2]);
  const runCont =()=>{ 
    let hour = hr1 < 10 ? "0" + hr1 : hr1;
    let min = mn1 < 10 ? "0" + mn1 : mn1;
    let secs = sec1 < 10 ? "0" + sec1 : sec1;
    let screen=document.getElementById("screen");
    if (sec1 > 59) {
      sec1 = 0;
     ++mn1; 
    }
    if (mn1 > 59) {
      mn1 = 0;
      ++hr;
     }
    screen.innerHTML = hour + ":" + min + ":" + secs;
  ++sec1;
    
  }
  document.getElementById("continue").disabled=true;
  document.getElementById("pause").disabled=false;
  let timer= setInterval(runCont, 1000);
  
  document.getElementById("pause").addEventListener("click",()=>{
  clearInterval(timer);
   document.getElementById("continue").disabled=false;
  document.getElementById("pause").disabled=true;
  strObj.str=document.getElementById("screen").innerHTML;
  });
  let btn3=document.getElementById("stop");
    btn3.addEventListener("click",()=>{
clearInterval(timer);
document.getElementById("start").disabled=false;
document.getElementById("pause").disabled=true.style;
document.getElementById("continue").disabled=true;
obj.foo=false;
    });
  
}



  
