// To retrieve a value
var resultJson = '';
var bannerValueArray = new Array();
if(window.localStorage.getItem('memberyBanner')) {
    bannerValueArray = JSON.parse(window.localStorage.getItem('memberyBanner'));


    var bannerContents = "";
    for(var i = 0 ; i < bannerValueArray.length; i++) {
        //console.log('bannerValueArray[i].bannerDat', bannerValueArray[i].bannerDat);
        bannerContents = bannerContents + unescape(bannerValueArray[i].bannerDat);
        //console.log('bannercontents', bannerContents);
    }
    var footerHTML = $('.scrollable-footer').html();
    var scrollableContent = document.querySelector(".scrollable-content");
    scrollableContent.setAttribute('style', 'margin-top: 5px; margin-bottom: 5px; padding: 10px; background-color: white;')
    scrollableContent.innerHTML = '<!---<div id=\"app-status-div\"><ul id=\"app-status-ul\"><li>Notifications</li></ul></div>-->' + bannerContents + '<div class=\"scrollable-footer\">' + footerHTML + '</div>';
}

