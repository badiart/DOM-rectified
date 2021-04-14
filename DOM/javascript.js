function coeur() {
    var elem = document.getElementById("1");
     elem.style.color = 'red';

}
function fmoins(){
    var valeur = document.getElementById('moins').getAttribute('value');
    if (valeur>=1){
    valeur-- ;
    document.getElementById('moins').setAttribute('value',valeur);}
    total()
}


function fplus(){
        var valeur = document.getElementById('moins').getAttribute('value');
        valeur++ ;
        document.getElementById('moins').setAttribute('value',valeur);
      total()
}
function enlever(){
var parentElem = document.getElementById('main');
var childElem = document.getElementById('hint');
parentElem.removeChild(childElem); 
}





function coeur1() {
    var elem = document.getElementById("2");
     elem.style.color = 'red';

}
function fmoins1(){
    var valeur = document.getElementById('moins1').getAttribute('value');
    if (valeur>=1){
    valeur-- ;
    document.getElementById('moins1').setAttribute('value',valeur);}
    total1()
    
}
function fplus1(){
    var valeur = document.getElementById('moins1').getAttribute('value');
    valeur++ ;
    document.getElementById('moins1').setAttribute('value',valeur);
    total1()
}
function enlever1(){
    var parentElem = document.getElementById('main');
    var childElem = document.getElementById('hint1');
    parentElem.removeChild(childElem); 
    }





    function coeur2() {
        var elem = document.getElementById("3");
         elem.style.color = 'red';
    
    }
    function fmoins2(){
        var valeur = document.getElementById('moins2').getAttribute('value');
        if (valeur>=1){
        valeur-- ;
        document.getElementById('moins2').setAttribute('value',valeur);}
        total2()
    }
    function fplus2(){
        var valeur = document.getElementById('moins2').getAttribute('value');
        valeur++ ;
        document.getElementById('moins2').setAttribute('value',valeur);
        total2()
    }
    function enlever2(){
        var parentElem = document.getElementById('main');
        var childElem = document.getElementById('hint2');
        parentElem.removeChild(childElem); 
        }
function total(){
    let N=document.getElementById("moins").value;
    document.getElementById("pri").innerHTML= 1379*N;
    somme()
}
function total1(){
    let m=document.getElementById("moins1").value;
    document.getElementById("pri1").innerHTML= 176.8*m;
    somme()
}
function total2(){
    let p=document.getElementById("moins2").value;
    document.getElementById("pri2").innerHTML= 249*p;
    somme()
}
function somme(){
    let x =Number(document.getElementById("moins").value);
    let y=Number(document.getElementById("moins1").value);
    let z=Number(document.getElementById("moins2").value);
    let a=x*1379+y*176.8+z*249;
    document.getElementById("finalPrice").value=a;
}
