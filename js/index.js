function discr(a,b,c){
    let D = Math.pow(b,2) - 4 * a * c ;
    return D;
}
function findRoot(a,b,c,D){
    let x1, x2;
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
    let a, b, c;
    document.getElementById('result').innerHTML='';
    a =parseFloat(document.getElementById('a').value);
    b = parseFloat(document.getElementById('b').value);
    c =parseFloat( document.getElementById('c').value);
    if(isNaN(a) || isNaN(b) || isNaN(c) || a == 0){
         document.getElementById('result').innerHTML='Введіть коректні значення коефіцієнтів!!!';
    }else{
    discr();
    findRoot();
    }
}
