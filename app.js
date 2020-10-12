const btn = document.querySelector('.btn');

const text = document.querySelector('.text');

const url = "./api/person.json";

btn.addEventListener("click", function(){
    load();
})

function load(){

    const xhr = new XMLHttpRequest;

    xhr.open("GET", url);

    xhr.onreadystatechange = function(){

        if(xhr.readyState === 4 && xhr.status === 200){         
const data = JSON.parse(xhr.responseText);
const display = data.map(function(item){
return `<p>${item.name}</p>`
}).join("");

const element = document.createElement("div");
element.innerHTML = display;
text.appendChild(element);
console.log(xhr.readyState);
        }else{
console.log({
    status: xhr.status,
    text: xhr.statusText,
    state: xhr.readyState,
});
        }
    };
    xhr.send();
}

