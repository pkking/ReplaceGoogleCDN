chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var urls = chrome.extension.getURL('urls.js');
        console.log(urls);
        

        var url = request.url.replace('googleapis.com', 'lug.ustc.edu.cn');
        url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://fonts.googleapis.com/*",
            "*://themes.googleusercontent.com/*",
            "*://fonts.gstatic.com/*",
            "*://storage.googleapis.com/*",
            "*://gerrit.googlesource.com/*",
            "*://secure.gravatar.com/*",
        ]
    },
    ["blocking"]
);
