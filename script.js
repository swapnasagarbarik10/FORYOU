const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for(let i=0;i<120;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+0.5,
    s:Math.random()*0.3+0.1,
    type:Math.random()>0.7?'flower':'star'
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.fillStyle = p.type==='star'?'rgba(255,255,255,0.8)':'rgba(255,200,210,0.6)';
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.y += p.s;
    if(p.y>canvas.height) p.y=0;
  });
  requestAnimationFrame(draw);
}
draw();

const scenes=document.querySelectorAll('.scene');
let i=0;
setTimeout(()=>{scenes[i++].classList.remove('active');scenes[i].classList.add('active')},3000);
setTimeout(()=>{scenes[i++].classList.remove('active');scenes[i].classList.add('active')},6500);

document.getElementById('yes').onclick=()=>{
  scenes[i++].classList.remove('active');
  scenes[i].classList.add('active');
  document.getElementById('song').play();
};