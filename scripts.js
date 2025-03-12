document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('background-video');
  const videoSource = document.getElementById('video-source');
  const longVideoPath = 'assets/helen-videolongo.mp4';
  
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
    videoElement.play();
  }
  
  // Tentar carregar o vídeo longo inicialmente
  checkLongVideo().then(exists => {
    if (exists) {
      console.log('Vídeo longo encontrado, carregando...');
      loadLongVideo();
    } else {
      console.log('Vídeo longo ainda não disponível, usando o vídeo curto.');
      
      // Verificar novamente a cada 30 segundos
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
      }, 30000); // 30 segundos
    }
  });
}); 