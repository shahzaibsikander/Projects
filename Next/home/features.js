var bar = document.querySelector('.hamguger');
var menu = document.querySelector('#menuList');
var container = document.querySelector('.container');


bar.addEventListener('click', function(){
    bar.classList.toggle('active');
    menu.classList.toggle('is-active');
    container.classList.toggle('isactive'); 
})








var circle = document.getElementById('circle');
var upbtn = document.getElementById('upbtn');
var downbtn = document.getElementById('downbtn');
var rotateValue = circle.style.transform;
var sumValue;

upbtn.onclick = function(){
    sumValue = rotateValue + "rotate(-90deg)";
    circle.style.transform = sumValue;
    rotateValue = sumValue;
}
downbtn.onclick = function(){
    sumValue = rotateValue + "rotate(90deg)";
    circle.style.transform = sumValue;
    rotateValue = sumValue;
}
