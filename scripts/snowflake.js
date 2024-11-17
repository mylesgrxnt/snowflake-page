const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflake() {
  return {
    x: Math.random() * canvas.width,
    y: -10,
    radius: Math.random() * 4 + 1,
    speed: Math.random() * 2 + 1,
    wind: Math.random() * 0.5 - 0.25
  };
}

function drawSnowflake(flake) {
  ctx.beginPath();
  ctx.arc(flake.x, flake.y, flake.radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (snowflakes.length < 100) {
    snowflakes.push(createSnowflake());
  }

  for (let i = 0; i < snowflakes.length; i++) {
    const flake = snowflakes[i];
    flake.y += flake.speed;
    flake.x += flake.wind;

    if (flake.y > canvas.height) {
      flake.y = -10;
    }

    drawSnowflake(flake);
  }

  requestAnimationFrame(animate);
}

animate();