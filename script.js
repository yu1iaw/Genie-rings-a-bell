const deadline = '2022-10-26';

function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - new Date();

    if (t <= 0) {
        setClock('.timer', '2024-05-13');
    } else {
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
    }

    return {
        total: t,
        days,
        hours,
        minutes,
        seconds

    };

}

function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);
    }

}
setClock('.timer', deadline);


const start = '2016-10-01';

function getSummary(starttime) {
    return summaryCounter(starttime);

}

function setOclock(selector, starttime) {
    const timer = document.querySelector(selector),
        years = timer.querySelector('#years'),
        days = timer.querySelector('#ds'),
        hours = timer.querySelector('#hrs'),
        minutes = timer.querySelector('#min'),
        seconds = timer.querySelector('#sec'),
        timeInterval = setInterval(updateOclock, 1000);

    updateOclock();

    function updateOclock() {
        const t = getSummary(starttime);

        years.innerHTML = addZero(t.years);
        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);
    }

}
setOclock('.timerIn', start);

function summaryCounter(par) {
    const t = new Date() - Date.parse(par);

    let years = Math.floor(t / (1000 * 60 * 60 * 24 * 365)),
        days = Math.floor(t / (1000 * 60 * 60 * 24) % 365),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        total: t,
        years,
        days,
        hours,
        minutes,
        seconds


    };
}

const startLearningFE = '2022-04-20';

function getAnotherSummary(beginning) {
    return summaryCounter(beginning);
}

function setTimer(selector, beginning) {

    const timer = document.querySelector(selector),
        years = timer.querySelector('#how-years'),
        days = timer.querySelector('#how-days'),
        hours = timer.querySelector('#how-hours'),
        minutes = timer.querySelector('#how-minutes'),
        seconds = timer.querySelector('#how-seconds'),
        timeInterval = setInterval(updateTimer, 1000);
    updateTimer();

    function updateTimer() {
        const t = getAnotherSummary(beginning);
        years.innerHTML = addZero(t.years);
        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);
    }
}


setTimer('.timer3', startLearningFE);


const image = document.querySelectorAll('img');

let newGenie = setInterval(function frame() {
    if (!image[1].classList.contains('show', 'frame')) {
        image[1].classList.add('show', 'frame');
        image[0].classList.add('hidden');
        image[0].classList.remove('main');
    } else {
        image[1].classList.remove('show');
        image[0].classList.remove('hidden');
        image[0].classList.add('main', 'frame');
    }

}, 5000);

setTimeout(() => {
    clearInterval(newGenie);
}, 6000);

