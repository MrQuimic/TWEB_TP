//Função para mostrar o que está oculto em cada clique

function MostraEEsconde1(){

    var blockornot = document.getElementById("p1").style.display;
    document.getElementById("p1").style.display='block';
    if(blockornot === 'none' || blockornot === '')
        document.getElementById("p1").style.display='block';
    else
        document.getElementById("p1").style.display='none';
    
        document.getElementById("p2").style.display='none';
        document.getElementById("p3").style.display='none';
        document.getElementById("p4").style.display='none';
        document.getElementById("p5").style.display='none';
}

function MostraEEsconde2(){

    var blockornot = document.getElementById("p2").style.display;
    document.getElementById("p2").style.display='block';
    if(blockornot === 'none' || blockornot === '')
        document.getElementById("p2").style.display='block';
    else
        document.getElementById("p2").style.display='none';
    
        document.getElementById("p1").style.display='none';
        document.getElementById("p3").style.display='none';
        document.getElementById("p4").style.display='none';
        document.getElementById("p5").style.display='none';
}

function MostraEEsconde3(){

    var blockornot = document.getElementById("p3").style.display;
    document.getElementById("p3").style.display='block';
    if(blockornot === 'none' || blockornot === '')
        document.getElementById("p3").style.display='block';
    else
        document.getElementById("p3").style.display='none';
    
        document.getElementById("p1").style.display='none';
        document.getElementById("p2").style.display='none';
        document.getElementById("p4").style.display='none';
        document.getElementById("p5").style.display='none';
}

function MostraEEsconde4(){

    var blockornot = document.getElementById("p4").style.display;
    document.getElementById("p4").style.display='block';
    if(blockornot === 'none' || blockornot === '')
        document.getElementById("p4").style.display='block';
    else
        document.getElementById("p4").style.display='none';
    
        document.getElementById("p1").style.display='none';
        document.getElementById("p2").style.display='none';
        document.getElementById("p3").style.display='none';
        document.getElementById("p5").style.display='none';
}

function MostraEEsconde5(){

    var blockornot = document.getElementById("p5").style.display;
    document.getElementById("p5").style.display='block';
    if(blockornot === 'none' || blockornot === '')
        document.getElementById("p5").style.display='block';
    else
        document.getElementById("p5").style.display='none';
    
        document.getElementById("p1").style.display='none';
        document.getElementById("p2").style.display='none';
        document.getElementById("p3").style.display='none';
        document.getElementById("p4").style.display='none';
}