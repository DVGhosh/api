const xhr = new XMLHttpRequest;
const dom = document.querySelector(".text");

xhr.open("GET", "./api/sample.txt");

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200 ){
const text = document.createElement("p");
text.innerHTML = xhr.responseText;
dom.appendChild(text);
    }else{
       console.log({
           status:xhr.status,
           text:xhr.statusText,
           state: xhr.state,
       });
    }
};


xhr.send();
