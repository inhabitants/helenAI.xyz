document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('background-video');
  const videoSource = document.getElementById('video-source');
  const backgroundContainer = document.querySelector('.background-container');
  const longVideoPath = 'assets/helen-videolongo.mp4';
  
  // Criar e adicionar imagem estática de fundo enquanto o vídeo carrega
  const staticBackground = document.createElement('img');
  staticBackground.src = 'assets/helen-social.jpg';
  staticBackground.className = 'temp-background';
  staticBackground.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;';
  backgroundContainer.appendChild(staticBackground);
  
  // Esconder o vídeo até que esteja pronto
  videoElement.style.display = 'none';
  
  // Função para verificar se o vídeo longo existe
  function checkLongVideo() {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open('HEAD', longVideoPath, true);
      http.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      };
      http.send();
    });
  }
  
  // Função para carregar o vídeo longo
  function loadLongVideo() {
    videoSource.src = longVideoPath;
    videoElement.load();
    
    // Quando o vídeo estiver carregado e pronto para reprodução
    videoElement.oncanplay = function() {
      // Mostrar o vídeo
      videoElement.style.display = 'block';
      videoElement.play();
      
      // Remover a imagem estática com fade out
      staticBackground.style.transition = 'opacity 1s ease';
      staticBackground.style.opacity = '0';
      setTimeout(() => {
        staticBackground.remove();
      }, 1000);
    };
  }
  
  // Tentar carregar o vídeo longo inicialmente
  checkLongVideo().then(exists => {
    if (exists) {
      console.log('Vídeo longo encontrado, carregando...');
      loadLongVideo();
    } else {
      console.log('Vídeo longo ainda não disponível, usando o vídeo curto.');
      
      // Usar o vídeo curto por enquanto, mas manter a imagem estática até carregar
      videoElement.oncanplay = function() {
        // Mostrar o vídeo
        videoElement.style.display = 'block';
        videoElement.play();
        
        // Remover a imagem estática com fade out
        staticBackground.style.transition = 'opacity 1s ease';
        staticBackground.style.opacity = '0';
        setTimeout(() => {
          staticBackground.remove();
        }, 1000);
      };
      
      // Verificar novamente a cada 8 segundos
      const checkInterval = setInterval(() => {
        checkLongVideo().then(exists => {
          if (exists) {
            console.log('Vídeo longo encontrado, carregando...');
            loadLongVideo();
            clearInterval(checkInterval);
          } else {
            console.log('Vídeo longo ainda não disponível.');
          }
        });
      }, 8000); // 8 segundos
    }
  });
}); 