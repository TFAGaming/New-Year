import '@tfadev/utils.js';

const calculateNewYear = (date: string | number | Date) => {
    const now = new Date();
    const evenDate = new Date(date);

    const actualTime = now.getTime();
    const eventTime = evenDate.getTime();
    const remTime = eventTime - actualTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = h < 10 ? (0 + h) : h;
    m = m < 10 ? (0 + m) : m;
    s = s < 10 ? (0 + s) : s;

    if (d < 0) {
        return `🎉🎉 Happy new year 2024! 🎉🎉`
    } else {
        return `New year 2024 in: ${d} days, ${h} hours, ${m} mins and ${s} secs.`
    };
};

setInterval(() => {
    console.clear();

    const res = calculateNewYear('January 1, 2024');

    console.log(res);
}, 1000);
