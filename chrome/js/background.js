chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var s = chrome.storage.local;
        var url = request.url;
        for (var u in urls) {
            if (url.includes(u)) {
                url.replace(u, urlMaps[u]);
            }
        }
        console.log(url);
        return {redirectUrl: url};
    },
    {
        urls:[   
                "*downloads.openwrt.org/*",
                "*registry-1.docker.io/*",
                "*registry.npmjs.org/*",
                "*www.npmjs.com/*",
                "*://fonts.gstatic.com/*",
                "*://fonts.googleapis.com/*",
                "*://ajax.googleapis.com/*",
                "*themes.googleusercontent.com/*",
                "*://www.gravatar.com/*",
        ]
    },
    ["blocking"]
);
