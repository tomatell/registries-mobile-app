// To retrieve a value
var resultJson = '';
var bannerValueArray = new Array();
if(window.localStorage.getItem('memberyBanner')) {
    bannerValueArray = JSON.parse(window.localStorage.getItem('memberyBanner'));


    var bannerContents = "";
    for(var i = 0 ; i < bannerValueArray.length; i++) {
        console.log('bannerValueArray[i].bannerDat', bannerValueArray[i].bannerDat);
        bannerContents = bannerContents + unescape(bannerValueArray[i].bannerDat);
        //console.log('bannercontents', bannerContents);
    }
    var footerHTML = $('.scrollable-footer').html();
    document.querySelector(".scrollable-content").innerHTML = bannerContents + '<div class=\"scrollable-footer\">' + footerHTML + '</div>';
}

