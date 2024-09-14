const container = document.querySelector('#contianer');//container for our elements

//red text paragraph
const p = document.createElement('p');
p.textContent = "Hey, i am red";
p.style.color = "red";

//blue text paragraph
const h3 = document.createElement('h3');
h3.textContent = "Hey, i am blue";
h3.style.color = "blue";

//creating the div element
const div = document.createElement('div');
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";

//creating the inner h1 and p elements
const innerH1 = document.createElement('h1');
innerH1.textContent = "I`m in a div";
div.appendChild(innerH1);

const innerP = document.createElement("p");
innerP.textContent = "I`m also in a div";
div.appendChild(innerP);

container.appendChild(div);