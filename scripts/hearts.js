function createSnowRain() {
    const heartContainer = document.createElement('div');
    heartContainer.style.position = 'fixed';
    heartContainer.style.top = '0';
    heartContainer.style.left = '0';
    heartContainer.style.width = '100%';
    heartContainer.style.height = '100%';
    heartContainer.style.zIndex = 10;
    heartContainer.style.pointerEvents = 'none';
    document.body.appendChild(heartContainer);
  
    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    function createSnowFlake() {
      const flowers = ['🌹','🌸','🌼','🌷'];
      const heart = document.createElement('div');
      heart.innerHTML = getRandomElement(flowers);
      heart.style.position = 'absolute';
      heart.style.fontSize = `${Math.random() * 40 + 10}px`;
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = '-20px';
      heart.style.opacity = Math.random();
      
      heartContainer.appendChild(heart);
  
      let startTime = Date.now();
      let duration = Math.random() * 5 + 8; // Between 8s and 13s
      let startX = parseFloat(heart.style.left);
      let swayAmount = Math.random() * 20; // Between 50px and 150px
  
      function animate() {
        let elapsed = (Date.now() - startTime) / 1000; // Convert to seconds
        let progress = elapsed / duration;
  
        if (progress < 1) {
          let sway = Math.sin(elapsed * 2) * swayAmount; // Oscillating effect
          heart.style.transform = `translate(${sway}px, ${progress * 100}vh)`;
          requestAnimationFrame(animate);
        } else {
          heart.remove();
        }
      }
  
      requestAnimationFrame(animate);
    }
  
    setInterval(createSnowFlake, 1000);
  }
  
  createSnowRain();
  