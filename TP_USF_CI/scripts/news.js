var path = window.location.search;
var page = path.split("/").pop();
const urlParams = new URLSearchParams(path);
const id = urlParams.get('id');
//alert(id);

if (id==1) {
    mostraNoticia1();
}else if (id==2) {
    mostraNoticia2();
}else if (id==3) {
    mostraNoticia3();
}else if (id==4) {
    mostraNoticia4();
}else if (id==5) {
    mostraNoticia5();
}else if (id==6) {
    mostraNoticia6();
}else{}
 
function mostraNoticia1a() {
    window.location="../pages/news.html?id=1";
}

function mostraNoticia2a() {
    window.location="../pages/news.html?id=2";
}

function mostraNoticia3a() {
    window.location="../pages/news.html?id=3"
}

function mostraNoticia4a() {
    window.location="../pages/news.html?id=4"
}

function mostraNoticia5a() {
    window.location="../pages/news.html?id=5"
}

function mostraNoticia6a() {
    window.location="../pages/news.html?id=6"
}
function mostraNoticia1() {
    document.getElementById("Noticias").style.display = "none";
    document.getElementById("NoticiaDetalhada1").style.display = "block";
}

function mostraNoticia2() {
    document.getElementById("Noticias").style.display = "none";
    document.getElementById("NoticiaDetalhada2").style.display = "block";
}

function mostraNoticia3() {
    document.getElementById("Noticias").style.display = "none";
    document.getElementById("NoticiaDetalhada3").style.display = "block";
}

function mostraNoticia4() {
    document.getElementById("Noticias").style.display = "none";
    document.getElementById("NoticiaDetalhada4").style.display = "block";
}

function mostraNoticia5() {
    document.getElementById("Noticias").style.display = "none";
    document.getElementById("NoticiaDetalhada5").style.display = "block";
}

function mostraNoticia6() {
    document.getElementById("Noticias").style.display = "none";
    document.getElementById("NoticiaDetalhada6").style.display = "block";
}