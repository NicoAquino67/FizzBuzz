const element = document.getElementById("list");
const ul = document.getElementById("listRemovable");
const list = {};
const node = {};
const numeros = document.getElementById("numeros");
const submit = document.getElementById("submit");
const numDOM = document.getElementById("explain");
var mod1 = document.getElementById("mod1");
var mod2 = document.getElementById("mod2");
submit.addEventListener('click', printNum);


function printNum(num){

    let fizz = " Fizz";
    let buzz = " Buzz";
    let fizzbuzz = " FizzBuzz";
    var num = parseInt(numeros.value);
    element.appendChild(ul);
    mod1 = parseInt(mod1.value);
    mod2 = parseInt(mod2.value);
    for (var i = 0; i <= num; i++){
        if (i % mod1 == 0 && i % mod2 ==0){
            node[i] = document.createTextNode(i + fizzbuzz);            
            list[i] = document.createElement("li");
            list[i].appendChild(node[i]);
            console.log(`print${fizzbuzz}`);
        } else if (i % mod1 == 0){
            node[i] = document.createTextNode(i + fizz);
            list[i] = document.createElement("li");
            list[i].appendChild(node[i]);  
            console.log(`print${buzz}`); 
        } else if (i % mod2 == 0){
            node[i] = document.createTextNode(i + buzz);
            list[i] = document.createElement("li");
            list[i].appendChild(node[i]);   
            console.log(`print${buzz}`);
        } else {
            node[i] = document.createTextNode(i);
            list[i] = document.createElement("li");
            list[i].appendChild(node[i]);   
            console.log(`print ${i}`);
        }
        ul.appendChild(list[i]);
    }
    console.log("print FizzBuzz");
}

function RemoveElements(object){
    while (object.lastChild){
        object.removeChild(object.lastChild);
    }
}