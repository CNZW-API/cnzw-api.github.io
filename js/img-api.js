function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var CNZW_img_num = getRandomInt(0, 9);
var CNZW_img_url = 'https://cnzw-wtw.github.io/img/background/' + CNZW_img_num + '.png';