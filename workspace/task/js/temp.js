let imgArr = new Array(
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167515622792642420.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167516015960824455.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167515652600435978.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167532742983221456.png?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167481133010267751.jpg?gif=1&w=2560&q=100",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167515685145470025.png?gif=1&w=2560&q=100"
);

let banner = $('div.banner');
let imgsCount = imgArr.length;
let imgsIndex = 0;

function loadImgs() {
    let htmlLine;

    for (let i = 0; i < imgsCount; i++) {
        htmlLine = "<div><img src =" + imgArr[i] + ">" + "</div>";
        banner.append(htmlLine);
    }

    banner.prepend(htmlLine);
    htmlLine = "<div><img src =" + imgArr[0] + ">" + "</div>"
    banner.append(htmlLine)
}

banner.css('width', 100 * (imgsCount + 2) + "vw");
// banner.css('transform', 'translate(-' + (100 * ++imgsIndex) + 'vw)');

loadImgs();

setInterval(autoSlide, 2000);

function autoSlide() {
    banner.css('transition', 'transform 0.5s');
    imgsIndex++;
    if (imgsIndex == imgsCount + 2) {
        imgsIndex = 1;
        banner.css('transition', 'transform 0s');
        banner.css('transform', 'translate(-' + (100 * imgsIndex) + 'vw)');
    } else {
        banner.css('transform', 'translate(-' + (100 * imgsIndex) + 'vw)');
        console.log(imgsIndex)
    }
}
