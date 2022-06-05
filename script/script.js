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



// blogListContainer
let blogListHtml = '';
blogs.posts.forEach((e)=>{
    blogListHtml +=`
    <div class="container">
        <div class="row">
            <div class="col-4">
              <div class="blogListPhoto" style="background-image:url(/images/${e.img})"></div>
            </div>    

            <div class="col-6">
              <div class="blogListLink" onClick="goPost('${e.id}')">
                ${e.title}
              </div>
                <div class="blogListDescription">${e.description}</div>
                <br/>
                <span class="blogListFooter" onClick="goPost('${e.id}')"><b>Ver articulo completo...</b></span>
            </div>
        </div>
    </div> 
    <br/>
    `
})

document.querySelector("#blogListContainer").innerHTML = blogListHtml;

// LEVEL BLOG

blogs.posts.sort((a,b)=>{
    return b.level - a.level;
})

let homePosts = blogs.posts.slice(0,6);

homePosts.forEach((post, index)=>{
    document.getElementById("homePostTitle"+index).innerHTML = post.title;
    document.getElementById("homePostPhoto"+index).style.backgroundImage = "url(/images/" + post.img + ")";
    document.getElementById("homePostCol"+index).classList.remove("hidden")
})


document.getElementById("homePostTitle0").innerHTML += `
<br>
${homePosts[0].description}
</br>
<span class="blogListFooter" onClick="goPost('${homePosts[0].id}')"><b>Ver articulo completo...</b></span>
`





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

function goPost(id){
    let currentArticle = blogs.posts.find(e => e.id == id);
    document.getElementById("img").setAttribute("src", "/images/" + currentArticle.img);
    document.getElementById("postTitle").innerHTML = currentArticle.title
    document.getElementById("postContent").innerHTML = currentArticle.content

    changeSection('article')
}


loandSection()