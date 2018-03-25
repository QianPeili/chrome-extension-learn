chrome.browserAction.onClicked.addListener(function(tab) {
    var mmbUrl = "http://tool.manmanbuy.com/historyLowest.aspx?url=" + 
                 encodeURIComponent(tab.url);
    var newTab = {
        "url": mmbUrl
    }
    chrome.tabs.create(newTab);
});

var menuItem = {
    "id": "searchInManmanBuy",
    "title": "manmanbuy",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);


chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == menuItem.id && clickData.selectionText){
        var mmbUrl = "http://s.manmanbuy.com/Default.aspx?key=" +
                      encodeURIComponent(clickData.selectionText);
        var createData = {
            "url": mmbUrl,
        };
        chrome.tabs.create(createData, function(){});
    };
});