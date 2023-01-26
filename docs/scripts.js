const desc = document.getElementById('desc');
const image = document.getElementById('img');
const timer = document.getElementById('timer');

let count = 3;

const countdown = setInterval(() => {
  if (count > 0){
    timer.innerHTML = `${count} cat will sad`;
  }else {
    timer.classList.add(!hidden);
    image.src = 'images/sad.jpg';
  }
  
  count--;
}, 1000);
