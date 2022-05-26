const title = document.getElementById("title");
const redes = document.getElementById("socialRedes");
const menuBar = document.getElementById("menuBar");
const aboutMeText = document.getElementById("aboutMeText");
const sectionsContainer = document.getElementById("sections")
const footer = document.getElementById("footer");


// v.global define que seccion veremos
let currentSection = "home";

title.innerHTML = blogs.title;
footer.innerHTML = "este es el footer "+blogs.title;

// REDES SOCIALES
let socialHtml = '';
blogs.social.forEach((e)=>{
    socialHtml +=`
    <a href="${e.url}" target="_blank" title="${e.title}">
    <div class="socialButton" style="background-image:url(/images/${e.icon});"></div>
    </a> 
    `
})

redes.innerHTML = socialHtml;


// MENU
let menuBarHtml = '';
blogs.menu.forEach(e=> {
    menuBarHtml +=`
     <div class="menuButton" onClick="changeSection('${e.link}')">${e.name}</div>
    `
});

menuBar.innerHTML = menuBarHtml;

// SECTIONS
let sectionHtml = '';
blogs.sections.forEach(e=>{
    sectionHtml +=`
    <div id="section-${e.name}" class="section hiddenSection" >
        <div class="container sectionContainer">
            <div class="row">
                <div class="col-12">
                ${e.content}                
                </div>
            </div>
        </div>
    </div>
    `
})
sectionsContainer.innerHTML += sectionHtml;

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