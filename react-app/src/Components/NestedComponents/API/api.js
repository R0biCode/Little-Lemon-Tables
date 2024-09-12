
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(formData) {
    return true;
};

/* If you're wondering why the API is local and not imported with an useEffect hook, it's because for some reason..

It didn't work. I even documented it on my github page, but I just couldn't get it to work, not even after asking

ChatGPT. In the end I decided to go for the local file, because I knew that this would work, and I didn't want to leave any functionality out.*/