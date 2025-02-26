function createSnowRain() {
  const heartContainer = document.createElement('div');
  heartContainer.style.position = 'fixed';
  heartContainer.style.top = '0';
  heartContainer.style.left = '0';
  heartContainer.style.width = '100%';
  heartContainer.style.height = '100%';
  heartContainer.style.zIndex = 10
  heartContainer.style.pointerEvents = 'none';
  document.body.appendChild(heartContainer);
  
  function createSnowFlake() {
      const heart = document.createElement('div');
      heart.innerHTML = '❄️';
      heart.style.position = 'absolute';
      heart.style.fontSize = `${Math.random() * 40 + 10}px`;
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = '-20px';
      heart.style.opacity = Math.random();
      heart.style.transition = 'transform 12s linear, opacity 12s linear';
      
      heartContainer.appendChild(heart);
      
      setTimeout(() => {
          heart.style.transform = `translateY(100vh)`;
          heart.style.opacity = '0';
      }, 10);
      
      setTimeout(() => {
          heart.remove();
      }, 12000);
  }
  
  setInterval(createSnowFlake, 300);
}

createSnowRain();