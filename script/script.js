const title = document.getElementById("title");
const redes = document.getElementById("socialRedes");
const menuBar = document.getElementById("menuBar");


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

document.getElementById("homeProfile").innerHTML = blogs.aboutMe.textShort;
document.getElementById("aboutMeText").innerHTML = blogs.aboutMe.textLong; 





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
    document.getElementById("homePostTitle"+index).innerHTML +=`
    <span class="blogListFooter" onClick="goPost('${post.id}')"><b>${post.title}</b></span>
    `;
    document.getElementById("homePostPhoto"+index).style.backgroundImage = "url(/images/" + post.img + ")";
    document.getElementById("homePostCol"+index).classList.remove("hidden")
})


document.getElementById("homePostTitle0").innerHTML += `
<br>
${homePosts[0].description}
</br>
<span class="blogListFooter" onClick="goPost('${homePosts[0].id}')"><b>Ver articulo completo...</b></span>
`

// SEARCH

function search(){
    let queryRow = document.getElementById("search").value;
    let searchResult = document.getElementById("searchResult");
    let searchResultHtml = '';
    currentSection = 'search';

    // a queryRow le asignamos toLoweCase para que no importe si escribimos mayusculas o minusculas
    let query = queryRow.toLowerCase().split(' ');

    let found = []; // array de resultados
    
    blogs.posts.forEach(post=>{
        // buscar en titulo y descripcion del post
        let tags = post.tags.toLowerCase().split(',');
                             
        
        // buscar en tags del post 
        tags = tags.map(tag=>{
            // eliminamos espacios
            return tag.trim();
        })

      
        //  utilizar el metodo some() para buscar en los tags
        let foundInTags = tags.some(tag=>{
           return query.includes(tag);
          
        })

        // si es encontro es positivo lo agregamos al array found
        if(foundInTags)
            found.push(post.id);
    })

    
    let searchFilter = blogs.posts.filter(post=>{
        return found.includes(post.id);
    })

    searchFilter.forEach((e)=>{
        searchResultHtml += `
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
        `;
    })

    if(found.length === 0)
        searchResultHtml += `<div class="container"><div class="row"><div class="col-12">
                                    <h1>No se encontraron resultados</h1></div></div></div>`;

    searchResult.innerHTML = searchResultHtml;

    loandSection(); 
}



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