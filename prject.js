const body=document.querySelector('body');
const button=document.querySelector('button');   
const colors=['violet', 'red', 'blue', 'green', 'yellow'];

body.style.backgroundColor="";

button.addEventListener('click',function() {
    const colorIndex=parseInt(Math.random()*colors.lenght);
    body.style.backgroundColor=colors[colorIndex];
})