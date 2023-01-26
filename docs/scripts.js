const desc = document.getElementById('desc');
const image = document.getElementById('img');
const timer = document.getElementById('timer');

let count = 60;

desc.addEventListener('click', () => {
  count = 60;
})

const countdown = setInterval(() => {
  if (count >= 0){
    timer.innerHTML = `${count} cat will sad`;
  }else {
    console.log("timeout");
    timer.classList.add('!hidden');
    image.src = 'images/sad.jpg';
    desc.innerHTML = 'cat sad'
  }
  
  count--;
}, 1000);
