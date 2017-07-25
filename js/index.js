
let D;
let x1,x2;
let a,b,c;
function discr(){
    D = Math.pow(b,2) - 4 * a * c ;
    return D;
}
function findRoot(){
    if(D == 0){
        x1 = (-b + Math.sqrt(D))/(2*a);
        document.getElementById('result').innerHTML='Оскільки D=0, то корінь рівняння лише один:<br><br>  x1 = ' + x1 + ';';
    }else if(D > 0){
        x1 = (-b + Math.sqrt(D))/(2*a);
        x2 = (-b - Math.sqrt(D))/(2*a);
        document.getElementById('result').innerHTML='Корені рівняння:<br><br>  x1 = ' + x1 + ';<br><br>  x2 = ' + x2 + ';';
    }else{
        document.getElementById('result').innerHTML='Оскільки D<0, то коренів рівняння не знайдено';
    }
}
function quadratEquation(){
    document.getElementById('result').innerHTML='';
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    discr();
    findRoot();
}
