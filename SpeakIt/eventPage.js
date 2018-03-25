var menuItem = {
    "id": "speak",
    "title": "Speak",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == menuItem.id && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText, {"rate": 0.7});
    };
});