let loginok = localStorage.getItem("loga");
let usercoockie = localStorage.getItem("currentusera");

if (loginok == "sim") {
    document.getElementById("log_in").style.display = 'none';
    var user_ar = "Acesso: <br>" + usercoockie;
    document.getElementById("user_area").innerHTML = user_ar;
} else {
    document.getElementById("user_area").style.display = 'none';
    document.getElementById("log_in").style.display = 'block';
}

function expandimg2(imgs) {
    // Expandir imagem
    var expandImg = document.getElementById("expandedImg");
    // Texto da imagem
    var imgText = document.getElementById("imgtext");
    // link da imagem
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    // Mostrar o elemento escondido no CSS
    expandImg.parentElement.style.display = "block";
    //alert(imgs.src);

    document.querySelector('.galeriabtns').style.display = 'block';
    document.querySelector('.row').style.display = 'none';
    document.getElementById("expandedImg").addEventListener('click', closeboutton);
    document.getElementById("closecross").addEventListener('click', closeboutton);
    document.getElementById("closecross").style.visibility = 'visible';
    document.getElementById("btn-previous").style.visibility = 'visible';
    document.getElementById("btn-next").style.visibility = 'visible';
    document.getElementById('btn-next').addEventListener('click', next);
    document.getElementById('btn-previous').addEventListener('click', previous);

    var previous = document.getElementById('btn-previous');
    var next = document.getElementById('btn-next');
    var galeriabox = document.getElementById('galeria-box');

    currentgaleria = 1;

    function closeboutton() {
        document.querySelector('.galeriabtns').style.display = 'none';
        document.querySelector('.row').style.display = 'block';
        expandImg.parentElement.style.display = "none";
        document.getElementById("closecross").style.visibility = 'hidden';
        document.getElementById("btn-previous").style.visibility = 'hidden';
        document.getElementById("btn-next").style.visibility = 'hidden';
    }

    function next() {
        let galeriabox = document.getElementById('galeria-box');
        let id1 = "galeria-" + currentgaleria;

        document.getElementById(id1).classList.remove('active');

        if (currentgaleria == 8) {
            currentgaleria = 1;
        } else {
            currentgaleria++;
        }
        let id2 = "galeria-" + currentgaleria;

        document.getElementById(id2).classList.add('active');
        var globalsrc = document.getElementById(id1).src;
        expand(globalsrc);
    }

    function previous() {
        let galeriabox = document.getElementById('galeria-box');
        let id1 = "galeria-" + currentgaleria;

        document.getElementById(id1).classList.remove('active');

        if (currentgaleria == 1) {
            currentgaleria = 8;
        } else {
            currentgaleria--;
        }

        var globalsrc = document.getElementById(id1).src;
        expand(globalsrc);
        let id2 = "galeria-" + currentgaleria;

        document.getElementById(id2).classList.add('active');
    }

    function expand(globalsrc) {
        // Expandir imagem
        var expandImg = document.getElementById("expandedImg");
        // link da imagem
        expandImg.src = globalsrc;
        imgText.innerHTML = imgs.alt;
        // Mostrar o elemento escondido no CSS
        expandImg.parentElement.style.display = "block";
        //alert(imgs.src);
    }

}

function goBack() {
    window.history.back();
}

document.getElementById("goback").addEventListener('click', goBack);

function cp1() {
    document.getElementById("mi-base").style.display = 'block';
    document.getElementById("op1").style.display = 'block';
    document.getElementById("op2").style.display = 'none';
    document.getElementById("op3").style.display = 'none';
    document.getElementById("op4").style.display = 'none';
    document.getElementById("op5").style.display = 'none';
    document.getElementById("op6").style.display = 'none';
    scrolldiv();
}
function cp2() {
    document.getElementById("mi-base").style.display = 'block';
    document.getElementById("op1").style.display = 'none';
    document.getElementById("op2").style.display = 'block';
    document.getElementById("op3").style.display = 'none';
    document.getElementById("op4").style.display = 'none';
    document.getElementById("op5").style.display = 'none';
    document.getElementById("op6").style.display = 'none';
    scrolldiv();
}
function cp3() {
    document.getElementById("mi-base").style.display = 'block';
    document.getElementById("op1").style.display = 'none';
    document.getElementById("op2").style.display = 'none';
    document.getElementById("op3").style.display = 'block';
    document.getElementById("op4").style.display = 'none';
    document.getElementById("op5").style.display = 'none';
    document.getElementById("op6").style.display = 'none';
    scrolldiv();
}
function cp4() {
    document.getElementById("mi-base").style.display = 'block';
    document.getElementById("op1").style.display = 'none';
    document.getElementById("op2").style.display = 'none';
    document.getElementById("op3").style.display = 'none';
    document.getElementById("op4").style.display = 'block';
    document.getElementById("op5").style.display = 'none';
    document.getElementById("op6").style.display = 'none';
    scrolldiv();
}
function cp5() {
    document.getElementById("mi-base").style.display = 'block';
    document.getElementById("op1").style.display = 'none';
    document.getElementById("op2").style.display = 'none';
    document.getElementById("op3").style.display = 'none';
    document.getElementById("op4").style.display = 'none';
    document.getElementById("op5").style.display = 'block';
    document.getElementById("op6").style.display = 'none';
    scrolldiv();
}
function cp6() {
    document.getElementById("mi-base").style.display = 'block';
    document.getElementById("op1").style.display = 'none';
    document.getElementById("op2").style.display = 'none';
    document.getElementById("op3").style.display = 'none';
    document.getElementById("op4").style.display = 'none';
    document.getElementById("op5").style.display = 'none';
    document.getElementById("op6").style.display = 'block';
    scrolldiv();
}
var path = window.location.pathname;
var page = path.split("/").pop();
//alert(page);

underline();

function underline() {
    console.log();
    if (page == "index.html") {
        document.getElementById("imenu1").className = "activatelink";
    }
    if (page == "o-que-fazemos.html") {
        document.getElementById("imenu2").className = "activatelink";
    }
    if (page == "indicador1.html" || page == "indicador2.html" || page == "indicador3.html" ||
        page == "indicador4.html" || page == "indicador5.html" || page == "indicador6.html") {
        document.getElementById("menui3").style.background = "#906f7111";
    }
    if (page == "recursos.html") {
        document.getElementById("imenu4").className = "activatelink";
    }
    if (page == "quem-somos.html") {
        document.getElementById("imenu5").className = "activatelink";
    }
    if (page == "galeria.html") {
        document.getElementById("imenu6").className = "activatelink";
    }
    if (page == "mais-apoio.html" || page == "pdfplanoaccao.html" || page == ".html" || page == "pdfregulamento.html" ||
        page == "news.html" || page == "linksuteis.html" || page == "pdfprojetos.html") {
        document.getElementById("imenu7").style.background = "#906f7111";
    }
    if (page == "login.html") {
        document.getElementById("imenu10").className = "activatelink";
    }
    //alert();
    //return false;
};



function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 60) {
        gotopbtn.style.display = "block";
    } else {
        gotopbtn.style.display = "none";
    }
}

function scrolldiv() {
    // const vhPixels = window.innerHeight;
    var ope = document.getElementById("cp6");
    var eOffset = ope.offsetTop;
    //var eHeight = ope.scrollHeight;
    var y = window.pageYOffset;
    window.scrollBy(0, (eOffset - y));
}

function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

gotopbtn = document.getElementById("gotopbtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* var name = document.getElementById('pnome').value;
var surname = document.getElementById('ultimonome').value;
var email = document.getElementsByClassId('email').value;
var message = document.getElementById('mensagem').value; */

function contactoForm() {

    //window.alert("Dados inseridos corretamente!");
    document.getElementById('contactofrm').style.display = 'none';
    document.getElementById("sucessocontacto").style.display = 'block';
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
        }
    }
}

//-------------------------------------------------------------------------------------------------------------
function Hilitor(id, tag) {
    // private variables
    var targetNode = document.getElementById(id) || document.body;
    var hiliteTag = tag || "MARK";
    var skipTags = new RegExp("^(?:" + hiliteTag + "|SCRIPT|FORM|SPAN)$");
    var colors = ["#9f00083d", "#6699CC"];
    var wordColor = [];
    var colorIdx = 0;
    var matchRegExp = "";
    var openLeft = false;
    var openRight = false;

    // characters to strip from start and end of the input string
    var endRegExp = new RegExp('^[^\\w]+|[^\\w]+$', "g");

    // characters used to break up the input string into words
    var breakRegExp = new RegExp('[^\\w\'-]+', "g");

    this.setEndRegExp = function(regex) {
        endRegExp = regex;
        return endRegExp;
    };

    this.setBreakRegExp = function(regex) {
        breakRegExp = regex;
        return breakRegExp;
    };

    this.setMatchType = function(type) {
        switch (type) {
            case "left":
                this.openLeft = false;
                this.openRight = true;
                break;
            case "right":
                this.openLeft = true;
                this.openRight = false;
                break;
            case "open":
                this.openLeft = this.openRight = true;
                break;
            default:
                this.openLeft = this.openRight = false;
        }
    };

    this.setRegex = function(input) {
        input = input.replace(endRegExp, "");
        input = input.replace(breakRegExp, "|");
        input = input.replace(/^\||\|$/g, "");
        if (input) {
            var re = "(" + input + ")";
            if (!this.openLeft) {
                re = "\\b" + re;
            }
            if (!this.openRight) {
                re = re + "\\b";
            }
            matchRegExp = new RegExp(re, "i");
            return matchRegExp;
        }
        return false;
    };

    this.getRegex = function() {
        var retval = matchRegExp.toString();
        retval = retval.replace(/(^\/(\\b)?|\(|\)|(\\b)?\/i$)/g, "");
        retval = retval.replace(/\|/g, " ");
        return retval;
    };

    // recursively apply word highlighting
    this.hiliteWords = function(node) {
        if (node === undefined || !node) return;
        if (!matchRegExp) return;
        if (skipTags.test(node.nodeName)) return;
        if (node.hasChildNodes()) {
            for (var i = 0; i < node.childNodes.length; i++)
                this.hiliteWords(node.childNodes[i]);
        }
        if (node.nodeType == 3) { // NODE_TEXT
            if ((nv = node.nodeValue) && (regs = matchRegExp.exec(nv))) {
                if (!wordColor[regs[0].toLowerCase()]) {
                    wordColor[regs[0].toLowerCase()] = colors[colorIdx++ % colors.length];
                }
                var match = document.createElement(hiliteTag);
                match.appendChild(document.createTextNode(regs[0]));
                match.style.backgroundColor = wordColor[regs[0].toLowerCase()];
                match.style.color = "#000";
                var after = node.splitText(regs.index);
                after.nodeValue = after.nodeValue.substring(regs[0].length);
                node.parentNode.insertBefore(match, after);
            }
        };
    };

    // remove highlighting
    this.remove = function() {
        var arr = document.getElementsByTagName(hiliteTag);
        while (arr.length && (el = arr[0])) {
            var parent = el.parentNode;
            parent.replaceChild(el.firstChild, el);
            parent.normalize();
        }
    };

    // start highlighting at target node
    this.apply = function(input) {
        this.remove();
        if (input === undefined || !(input = input.replace(/(^\s+|\s+$)/g, ""))) {
            return;
        }
        if (this.setRegex(input)) {
            this.hiliteWords(targetNode);
        }
        return matchRegExp;
    };

}

let darkm1 = localStorage.getItem("darkm");
// Receiving the data:
if (darkm1 === "lightmode") { lightmode2(); };
if (darkm1 === "darkmode") {
    darkmode2();
    console.log('active');
};

/*
if (window.innerWidth || document.documentElement.clientWidth <= 720){
  lightmode2();
}  
*/
function darkmode2() {
    var body = document.body;
    body.classList.add("darkmode");

    document.getElementById("lightmode-c").style.display = 'block';
    document.getElementById("darkmode-c").style.display = 'none';

}

function lightmode2() {
    var body = document.body;
    body.classList.remove("darkmode");
    
    document.getElementById("lightmode-c").style.display = 'none';
    document.getElementById("darkmode-c").style.display = 'block';

}

function darkmode() {
    sessionStorage.removeItem(darkmode);
    
    var body = document.body;
    localStorage.setItem('darkm', 'darkmode');
    body.classList.add("darkmode");
    
    document.getElementById("lightmode-c").style.display = 'block';
    document.getElementById("darkmode-c").style.display = 'none';

    if (page == "indicador1.html" || page == "indicador2.html" || page == "indicador3.html" ||
        page == "indicador4.html" || page == "indicador5.html" || page == "indicador6.html") {
            location.reload();
    }
}

function lightmode() {
    var body = document.body;

    sessionStorage.removeItem(darkmode);
    
    var body = document.body;
    localStorage.setItem('darkm', 'lightmode');
    body.classList.remove("darkmode");
    
    document.getElementById("lightmode-c").style.display = 'none';
    document.getElementById("darkmode-c").style.display = 'block';
    
    if (page == "indicador1.html" || page == "indicador2.html" || page == "indicador3.html" ||
        page == "indicador4.html" || page == "indicador5.html" || page == "indicador6.html") {
            location.reload();
    }
}