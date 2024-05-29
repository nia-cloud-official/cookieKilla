function clearCookies(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.cookies.getAll({}, function(cookies) {
        for (var i = 0; i < cookies.length; i++) {
            chrome.cookies.remove({ url: tab.url, name: cookies[i].name });
        }
    });
}
}
chrome.tabs.onUpdated.addListener(clearCookies);