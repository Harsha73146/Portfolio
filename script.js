AOS.init({
    duration:1000,
    once:true
});

if(document.getElementById("typing")){

new Typed("#typing",{

strings:[
"Frontend Developer",
"Java Developer",
"UI Designer",
"Web Developer"
],

typeSpeed:80,
backSpeed:50,
backDelay:1500,
loop:true

});

}


window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});


const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});


if(topBtn){

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}


/*scoll*/

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.pageYOffset/totalHeight)*100;

if(progressBar){

progressBar.style.width=progress+"%";

}

});


const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


/*Menu*/

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}


/*Close Menu*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

if(nav.classList.contains("show")){

nav.classList.remove("show");

}

});

});


/*Navi */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});


/*Project Card*/

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});


const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-element");

}

});

});

document.querySelectorAll(".info-card,.skill-card,.project-card,.fact-card,.tool-card,.goal-card").forEach(el=>{

observer.observe(el);

});


/*Form*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}