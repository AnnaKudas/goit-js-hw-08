import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function storeTime(obj) {
  const seconds = obj.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}
const timeVideo = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(timeVideo);

player.on('timeupdate', throttle(storeTime, 1000));
