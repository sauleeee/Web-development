var input = document.querySelector('input');
let rbb = document.getElementsByClassName("rubbish");
let button = document.querySelector('.button');
let list = document.querySelector('div.content .list')



button.onclick = function() {
    let listUl = document.createElement('ul');
    list.appendChild(listUl);

    let listLi = document.createElement('li');
    listLi.innerHTML = input.value;
    listUl.appendChild(listLi);


    input.value='';
    
    
    let checkbox = document.createElement("input");
    checkbox.type='checkbox';
    checkbox.onclick = function() {
            let div = this.parentElement;
            div.className = 'emph';      
    }
 
    listLi.appendChild(checkbox);

var imgDiv = document.createElement("img-content");
var img = document.createElement("IMG");
imgDiv.className = "rubbish";
img.src = "static/img/korzina.png"; 

imgDiv.appendChild(img);
listLi.appendChild(imgDiv);


for (i = 0; i < rbb.length; i++) {
    rbb[i].onclick = function() {
    var imgDiv = this.parentElement;
    imgDiv.style.display = "none";
 }
  }
}