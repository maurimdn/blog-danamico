const title = document.getElementById("title");
const footer = document.getElementById("footer");
const menuBar = document.getElementById("menuBar");
const aboutMeText = document.getElementById("aboutMeText");

// v.global define que seccion veremos
let currentSection = "home";

title.innerHTML = blogs.title;
footer.innerHTML = "este es el footer "+blogs.title;

let menuBarHtml = '';
blogs.menu.forEach(e=> {
    menuBarHtml +=`
     <div class="menuButton" onClick="changeSection('${e.link}')">${e.name}</div>
    `
});

menuBar.innerHTML = menuBarHtml;


// ABOUTME
aboutMeText.innerHTML = blogs.aboutMe.text


// change section
function changeSection(name){
    currentSection = name;
    loandSection();
}

function loandSection(){
document.querySelectorAll('.section').forEach(e=>{
    e.classList.add('hiddenSection')});
document.querySelector('#section-' + currentSection).classList.remove('hiddenSection');
}

loandSection()