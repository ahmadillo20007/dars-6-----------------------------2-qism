// h1 bt a, b

var btn = document.getElementById('calc');
var h1 = document.getElementById('result');

btn.onclick = function(){
    var c = document.getElementById('c').value;
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    a = parseInt(a);
    b = parseInt(b);
    if(c == '+'){
        alert(a+b);
    }
    else if(c == '*'){
        alert(a*b)
    }
    else if(c =='/'){
        alert(a/b)
    }
    else if(c =='-'){
        alert(a-b)
    }


};




























// var elResult = document.querySelector('.result')
// var elClick = document.querySelector('.click')
// var elInput2 = document.querySelector('.input2')

// var elInput1 = 'a'
// var elInput2 = 'c'
// var elInput3 = 'b'
// btn.onclick = function () {
// if(document.querySelector('.input2').value = '*') {
    
// }

    
// }

// function btn(a,b,c) {
//     if( elInput3.value =='*'){
//         console.log(elInput1.value * elInput3.value);
//     }

    
    
// }
// btn()