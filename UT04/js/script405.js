
let lis =Array.from(document.getElementsByTagName('li'));
lis.forEach( (li,index)  =>
  {
    let enlaces = ['Google','duckduckgo','Bing','Ecosia','Wolframalpha'];
    li.textContent='';   
    let a= document.createElement('a');
    li.appendChild(a);
    let enlace= `https://${enlaces[index]}.com`;
    a.setAttribute('href', enlace);
    a.innerHTML = enlaces[index];
});







