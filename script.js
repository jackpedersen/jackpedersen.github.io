const canvas = document.getElementById('sim');
const ctx = canvas.getContext('2d');
const angleInput = document.getElementById('angle');

function draw(angleDeg) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const originX = canvas.width / 2;
  const originY = 20;
  const length = 100;
  const rad = angleDeg * Math.PI / 180;

  const x = originX + length * Math.sin(rad);
  const y = originY + length * Math.cos(rad);

  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = '#222';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#4CAF50';
  ctx.fill();
}

angleInput.addEventListener('input', e => draw(e.target.value));
draw(angleInput.value);