
const $counter = document.querySelector("#counter");
const $preview = document.querySelector(".container");
let $threshold = document.getElementById("maxNum");
const $submited = document.getElementById("#submited");
let $textara = document.getElementById("text");
let $submit = document.getElementById("submit");

$submit.disabled = true;


function taskCounter(){
  
document.querySelector("#tc").innerHTML= "Tasks for the Day : " + localStorage.length
}
taskCounter()
////----------------- menu button
  var menu =document.querySelector('#menuCart')

  function move(){
    if(menu.classList.contains("slide-in-left") !== true){
      menu.classList.remove("slide-out-left")
      menu.classList.add("slide-in-left")
      menu.style.display = "block";
    }else{
      menu.classList.remove("slide-in-left")
      menu.classList.add('slide-out-left')
    }
  }
////-------  textara
document.addEventListener("DOMContentLoaded", () => {

  $textara.addEventListener("input", (e) => {

    let value = e.target;
    let maxVal =($threshold.value == '')?0:$threshold.value;

      if($textara.value.length  >= maxVal){
        $submit.disabled = false
        $preview.innerHTML = $textara.value.substring(0,maxVal)
          $counter.innerHTML = `You wrote : ${maxVal} and ${value.value.length - maxVal} chars more`

      }else{
        $preview.innerHTML = $textara.value
        $counter.innerHTML = "You wrote : " + value.value.length + " chars "
      }
  })
});

////--==== CLEAR BUTTON
document.querySelector("#clear").addEventListener("click",function(){
  localStorage.clear()
  location.reload()
})

////-------submit button

function submit(){

  // ---
  let label =  document.createElement('label')
  let $input =  document.createElement('input')
  let $div =  document.createElement('div')
  $textara.value = ""

    const key = "id"+ localStorage.length
    const value = $preview.value
    if(key && value){
      localStorage.setItem(key,value)
    }
    for(let i = 0 ; i< localStorage.length;i++){
      const key = localStorage.key(i)
      const value = localStorage.getItem(key);
}

  label.innerHTML += `${value} <br>`
  label.setAttribute("for",`${key}`);
  label.classList.add("strickthis")
  $input.setAttribute("id",`${key}`);
  $input.classList.add('ischecked')
  $input.setAttribute("type","checkbox");
  $div.appendChild($input);
  $div.appendChild(label);
  document.querySelector("#submited").appendChild($div);

  taskCounter()

}

////  memory after reload page

if(localStorage.length !== 0 ){


  for(let i =0 ; i<localStorage.length;i++){

    let label =  document.createElement('label')
    let $input =  document.createElement('input')
    let $div =  document.createElement('div')
    var key1="id"+i

    label.innerHTML += `${localStorage.getItem(key1)} <br>`
    label.setAttribute("for",`${key1}`);
    label.classList.add("strickthis")
    $input.setAttribute("id",`${key1}`);
    $input.classList.add('ischecked')
    $input.setAttribute("type","checkbox");
    $div.appendChild($input);
    $div.appendChild(label);
    document.querySelector("#submited").appendChild($div);
taskCounter()
  }
}


///// ==== footer

function dateTime(){
  let min = new Date().getMinutes();
  if(min < 10 ){ min = "0"+ min}
  let sec = new Date().getSeconds();
  if(sec < 10 ){ sec = "0"+ sec}
  let hours = new Date().getHours();
  if(hours < 10 ){ hours = "0"+ hours}

  document.querySelector("footer").innerText =
 new Date().toISOString().substring(0,10)+" "+
  hours+":" +min+":"+sec
  }

setInterval(dateTime,1000);
//// -----------------------------------
