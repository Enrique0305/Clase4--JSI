import  MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

  const video = document.querySelector('video');
  const player = new MediaPlayer({ 
    el: video,
    plugins:[
      new AutoPlay(),
      new AutoPause()
    ],
  });  

  const playButton:HTMLElement = document.querySelector('#playButton');
  playButton.onclick = () => player.togglePlay(); 
  
  //https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement
  const muteButton:HTMLElement = document.querySelector('#muteButton');
  muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error =>{
    console.error(error.message);
  });
}