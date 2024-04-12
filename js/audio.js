var audio = document.getElementById('audio');
var isAudioPlayed = false; // 记录音频是否已经播放过

// 添加键盘事件监听器
document.addEventListener('keydown', function () {
    // 如果音频还没有播放过，则播放音频
    if (!isAudioPlayed) {
        playAudio();
        if (! audio.paused) {
            isAudioPlayed = true; // 将标记设置为已经播放过
        }
    }
});

// 添加页面点击事件监听器
document.addEventListener('click', function () {
    // 如果音频还没有播放过，则播放音频
    if (!isAudioPlayed) {
        playAudio();
        if (! audio.paused) {
            isAudioPlayed = true; // 将标记设置为已经播放过
        }
    }
});

// 添加页面滚动事件监听器
document.addEventListener('scroll', function () {
    // 如果音频还没有播放过，则播放音频
    if (!isAudioPlayed) {
        playAudio();
        if (! audio.paused) {
            isAudioPlayed = true; // 将标记设置为已经播放过
        }
    }
});

// 在页面加载时检查本地存储的播放位置，并设置音频播放器的当前时间
function playAudio() {
    var savedTime = sessionStorage.getItem('audioTime');
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    } else {
        audio.currentTime = 0;
    }
    try {
        audio.play();
    } catch (e) {

    }
}

// 在页面卸载时保存音频的当前播放位置
window.onbeforeunload = function () {
    sessionStorage.setItem('audioTime', audio.currentTime);
};
