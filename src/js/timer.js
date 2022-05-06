window.onload = () => {
    const startMin = 9;
    const startSec = 0;
    let time = startSec != 0 ? startMin * 60 + startSec : startMin * 60;
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    minutes.innerHTML = startMin < 10 ? '0' + startMin : startMin;
    seconds.innerHTML = startSec < 10 ? '0' + startSec : startSec;
    let timerId = null;

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && timerId == null) {
                timerId = setInterval(countdownTimer, 1000);
                function countdownTimer() {
                    if (time <= 0) {
                        clearInterval(timerId);
                    }
                    let min = time > 0 ? Math.floor(time / 60) : 0;
                    let sec = time > 0 ? Math.floor(time % 60) : 0;
                    time--;

                    min = min < 10 ? '0' + min : min;
                    sec = sec < 10 ? '0' + sec : sec;

                    minutes.innerHTML = min;
                    seconds.innerHTML = sec;
                }
            }
        })
    }, options)

    const arr = document.querySelector('#timer7777');
    Array.prototype.forEach.call(arr.children, i => {
        observer.observe(i)
    });
}