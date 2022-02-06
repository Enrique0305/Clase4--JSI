import MediaPlayer from './MediaPlayer';

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video });

  const button = document.querySelector('button');
  button.onclick = () => player.togglePlay(); //https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement
