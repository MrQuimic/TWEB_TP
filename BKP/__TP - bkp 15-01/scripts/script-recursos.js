//Função para mostrar o que está oculto em cada clique

function mostraOuEsconde1(){


    var blockornot = document.getElementById("recursoscomunidade").style.display;

    document.getElementById("recursoscomunidade").style.display='block';

    if(blockornot === 'none' || blockornot === '')
        document.getElementById("recursoscomunidade").style.display='block';
    else
        document.getElementById("recursoscomunidade").style.display='none';
    
    document.getElementById("educacaosaude").style.display='none';
    document.getElementById("folhetosinformativos").style.display='none';
    document.getElementById("modelosregisto").style.display='none';
}

function mostraOuEsconde2(){
    document.getElementById("recursoscomunidade").style.display='none';

    var blockornot = document.getElementById("educacaosaude").style.display;

    document.getElementById("educacaosaude").style.display='block';
    
    if(blockornot === 'none' || blockornot === ''){

        document.getElementById("educacaosaude").style.display='block';
        window.scroll(0,150);
    }
    else
        document.getElementById("educacaosaude").style.display='none';
    document.getElementById("folhetosinformativos").style.display='none';
    document.getElementById("modelosregisto").style.display='none';

}

function mostraOuEsconde3(){
    document.getElementById("recursoscomunidade").style.display='none';
    document.getElementById("educacaosaude").style.display='none';
    var blockornot = document.getElementById("folhetosinformativos").style.display;

    document.getElementById("folhetosinformativos").style.display='block';
    
    if(blockornot === 'none' || blockornot === ''){
        document.getElementById("folhetosinformativos").style.display='block';
        window.scroll(0, findPosition(document.getElementById('folhetosinformativos'))); }
    else
        document.getElementById("folhetosinformativos").style.display='none';
    document.getElementById("modelosregisto").style.display='none';


       
}

function mostraOuEsconde4(){
    document.getElementById("recursoscomunidade").style.display='none';
    document.getElementById("educacaosaude").style.display='none';
    document.getElementById("folhetosinformativos").style.display='none';
    var blockornot = document.getElementById("modelosregisto").style.display;

    document.getElementById("modelosregisto").style.display='block';
    
    if(blockornot === 'none' || blockornot === ''){
        document.getElementById("modelosregisto").style.display='block';
        window.scroll(0, findPosition(document.getElementById('modelosregisto'))); }
    else
        document.getElementById("modelosregisto").style.display='none';

}