var bar = document.querySelector('.hamguger');
var menu = document.querySelector('#menuList');
var container = document.querySelector('.container');


bar.addEventListener('click', function(){
    bar.classList.toggle('active');
    menu.classList.toggle('is-active');
    container.classList.toggle('isactive'); 
})




// var circle = document.getElementById('circle');
// var upbtn = document.getElementById('upbtn');
// var downbtn = document.getElementById('downbtn');
// var rotateValue = circle.style.transform;
// var sumValue;

// upbtn.onclick = function(){
//     sumValue = rotateValue + "rotate(-90deg)";
//     circle.style.transform = sumValue;
//     rotateValue = sumValue;
// }
// downbtn.onclick = function(){
//     sumValue = rotateValue + "rotate(90deg)";
//     circle.style.transform = sumValue;
//     rotateValue = sumValue;
// }



// Code for Product Sec

  var counter = 1;
  setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if(counter >2){
       counter = 1;
  }
}, 3000);



let image = document.getElementById('image');
let image1 = document.getElementById('image1');

let pro1 = document.getElementById('pro1');
let pro2 = document.getElementById('pro2');
let pro3 = document.getElementById('pro3');
let pro4 = document.getElementById('pro4');

let Path1 = "./images/output-onlinepngtools.png";
let Path2 = "./images/output-onlinepngtools1.png";
let Path3 = "./images/output-onlinepngtools3.png";
let Path4 = "./images/output-onlinepngtools4.png";

pro1.addEventListener('click', function(){
  image.src = Path1;
})
pro2.addEventListener('click', function(){
  image.src = Path2;
})
pro3.addEventListener('click', function(){
  image1.src = Path3;
})
pro4.addEventListener('click', function(){
  image1.src = Path4;
  console.log('avcfsfsl')
})

