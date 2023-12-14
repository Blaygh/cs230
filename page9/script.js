`use strict`


var clickCount = 0;

document.addEventListener('DOMContentLoaded', ()=> {
    const button = document.querySelector('button');
    button.addEventListener('click', hello);
});

function hello() {
    clickCount++;
    alert(`Hello, World! You clicked ${clickCount} times.`)
}
