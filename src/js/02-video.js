import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function time(obj) {
  const seconds = obj.seconds;
  console.log(seconds);
  localStorage.setItem('currentTime', JSON.stringify(seconds));
}

const timeVideo = localStorage.getItem('currentTime'); 
console.log(timeVideo);

player.on('timeupdate', throttle(time, 1000));
player.setCurrentTime(timeVideo);











