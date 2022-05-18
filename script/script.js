const title = document.getElementById("title");
const menuBar = document.getElementById("menuBar");

title.innerHTML = blogs.title;

let menuBarHtml = '';
blogs.menu.forEach(e=> {
    menuBarHtml +=`
     <div class="menuButton" onClick="goLink('${e.link}')">${e.name}</div>
    `
});

menuBar.innerHTML = menuBarHtml;


function goLink(link){
    alert("ahora voy a " + link)
}