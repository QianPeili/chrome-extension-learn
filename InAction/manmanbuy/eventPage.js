chrome.browserAction.onClicked.addListener(function(tab) {
    var mmbUrl = "http://tool.manmanbuy.com/historyLowest.aspx?url=" + 
                 encodeURIComponent(tab.url);
    var newTab = {
        "url": mmbUrl
    }
    chrome.tabs.create(newTab);
});