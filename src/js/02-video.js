import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(data => {
    const time = data.seconds;
    localStorage.setItem(CURRENT_TIME, time);
  }, 1000)
);

const getCurrentTime = localStorage.getItem(CURRENT_TIME);
player.setCurrentTime(getCurrentTime);
