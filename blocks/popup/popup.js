const popup = document.querySelector('.popup');
const playBtn = document.querySelector('.program__btn-play');
const leaveBtn = document.querySelector('.popup__btn-leave');

const video = document.querySelector('.popup__iframe');

function opensPopup() {
  let tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  popup.classList.add('popup_opened');
  player.playVideo()
}

function closesPopup() {
  const millisecond = 300;
  popup.classList.add('popup_visibility');
  setTimeout(() => popup.classList.remove('popup_opened', 'popup_visibility'), millisecond);
}


// iframe video //
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytProcharity', {
    videoId: 'VX6mB2hGorc',
    playerVars: {
      'rel': 0,
      'controls': 0,
      'iv_load_policy': 3,
      'modestbranding': 1,
      'showinfo': 0,
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function stopVideo() {
  player.stopVideo();
}
// ---------- //

leaveBtn.addEventListener('click', stopVideo);
playBtn.addEventListener('click', opensPopup);
leaveBtn.addEventListener('click', closesPopup);
