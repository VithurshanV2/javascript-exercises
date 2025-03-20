const repeatString = function (word, times) {
    let words = "";
    if (times < 0) {
        return "ERROR";
    }

    for (i = 0; i < times; i++) {
        words += word;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
