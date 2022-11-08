import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// console.log(Player);
// console.log(throttle);

const iframe = document.querySelector('#vimeo-player');
// console.dir(iframe);
const player = new Player(iframe);
// console.log(player);

// перший спосіб

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))
}, 1000));

// другий спосіб

// const timePlay = function(data) {
//     localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
//     console.log('played the video!');
// }
// player.on('timeupdate', throttle(timePlay, 1000));


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(data) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});