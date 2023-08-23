const input=document.querySelector('input');
const body=document.querySelector('.body');
const heading=document.querySelector('h2');
const btn=document.querySelector('.btn');

btn.addEventListener("click", function(){
   setInterval(()=>{
changeColour()
   },1000
   )
})
function changeColour(){
  let cc="#"+Math.floor(Math.random()*1e4);
  body.style.backgroundColor=cc;
  heading.style.backgroundColor=cc;
  heading.innerText= "colour code is " + cc;
}