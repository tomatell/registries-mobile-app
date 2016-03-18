// To retrieve a value
var resultJson = '';
var bannerValueArray = new Array();
if(window.localStorage.getItem('memberyBanner')) {
    bannerValueArray = JSON.parse(window.localStorage.getItem('memberyBanner'));


    var bannerContents = "";
    for(var i = 0 ; i < bannerValueArray.length; i++) {
        //console.log('bannerValueArray[i].bannerDat', bannerValueArray[i].bannerDat);
        bannerContents = bannerContents + unescape(bannerValueArray[i].bannerDat);
        console.log('bannercontents', bannerContents);
    }
    var scrollableContent = document.querySelector(".scrollable-content");
    scrollableContent.setAttribute('style', 'margin-top: 5px; margin-bottom: 5px; padding: 10px; background-color: white;')
    scrollableContent.innerHTML = '<div tooltip=\"To access a particular Membery instance, click on the banner. \
    To remove the instance, swipe the banner to the right.\">\
    <ul class=\"banner\">' + bannerContents + '</ul></div>';
}

