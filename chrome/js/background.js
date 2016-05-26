var urlMaps = localStorage["urlMaps"];
var urls = [];
function getUrls(map) {
    for (var m in map) {
        url.push(m);
    }
};
console.log(urls);
chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url;
        for (var u in urls) {
            if (url.includes(u)) {
                url.replace(u, urlMaps[u]);
            }
        }
        return {redirectUrl: url};
    },
    {
        urls:urls
    },
    ["blocking"]
);
