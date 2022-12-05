const element = document.getElementById("list");
const ul = document.createElement("ul");
const list = {};
const node = {};
var numeros = document.getElementById("numeros");
var submit = document.getElementById("submit");
var numDOM = document.getElementById("explain");
var mod1 = document.getElementById("mod1");
var mod2 = document.getElementById("mod2");
submit.addEventListener('click', printNum);
let submit1 = false;


function printNum(num){
    var num = parseInt(numeros.value);
    mod1 = parseInt(mod1.value);
    mod2 = parseInt(mod2.value);
    
    element.appendChild(ul);

    let fizz = " Fizz";
    let buzz = " Buzz";
    let fizzbuzz = " FizzBuzz";
    
    for (var i = 0; i <= num; i++){
        if (i % mod1 == 0 && i % mod2 ==0){
            node[i] = document.createTextNode(i + fizzbuzz);            
            list[i] = document.createElement("li");
            list[i].appendChild(node[i]);
        }else if (i % mod1 == 0){
            node[i] = document.createTextNode(i + fizz);
            list[i] = document.createElement("li");
            list[i].appendChild(node[i]);   
        }else if (i % mod2 == 0){
            node[i] = document.createTextNode(i + buzz);
            list[i] = document.createElement("li");
            list[i].appendChild(node[i]);   
        }else{
            node[i] = document.createTextNode(i);
            list[i] = document.createElement("li");
            list[i].appendChild(node[i]);   
        }
        ul.appendChild(list[i]);
        if (i == 100){
            submit1 = true;
            if (ul.hasChildNodes && submit) {
                for(num of ul.childNodes) {
                    console.log(num);
                  ul.removeChild(ul.lastChild)
                }
            }
        }
    }
}