chrome.browserAction.onClicked.addListener((tab) => {
    let code = "let elemlist = document.getElementsByTagName('textarea'); for(let i=0; i<elemlist.length; ++i){elemlist[i].style.resize = 'both';}";
    chrome.tabs.executeScript({
        code: code
    });
});