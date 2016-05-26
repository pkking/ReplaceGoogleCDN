var defaultMaps = {   
"downloads.openwrt.org":	"openwrt.mirrors.ustc.edu.cn",
"registry-1.docker.io":	"docker.mirrors.ustc.edu.cn",
"registry.npmjs.org":	"npmreg.mirrors.ustc.edu.cn",
"www.npmjs.com":	"npm.mirrors.ustc.edu.cn",
"fonts.gstatic.com":	"fonts-gstatic.lug.ustc.edu.cn",
"fonts.googleapis.com":	"fonts.lug.ustc.edu.cn",
"ajax.googleapis.com":	"ajax.lug.ustc.edu.cn",
"themes.googleusercontent.com":	"google-themes.lug.ustc.edu.cn",
"www.gravatar.com":	"gravatar.lug.ustc.edu.cn"
};

function onError(value){
    console.log(value);
};

function loadOptions() {
    var s = chrome.storage.local;
    var node = document.getElementById("settings");
    var configInput = document.getElementById("config");
    
    for (var p in defaultMaps){
      if (defaultMaps.hasOwnProperty(p)){
          var container = document.createElement("div");
          var input = document.createElement("input");
          var label = document.createElement("label"); 
          input.setAttribute("name", p);
          label.setAttribute("id", p);
          var text = document.createTextNode(p);
          label.appendChild(text);
          if (s.get(p, onError)){
              input.setAttribute("value", s.get(p, onError));
          }
          else{
              input.setAttribute("value", defaultMaps[p]);
          }
          container.appendChild(label);
          container.appendChild(input);
          node.appendChild(container);
      }
    }
};

function saveOptions() {
    var s = chrome.storage.local;
    var res = {};
    var urls = [];
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
        var key = inputs[i].getAttribute("name");
        var value = inputs[i].getAttribute("value");
        res[key] = value ;
        urls.push("*://"+key+"/*");
    }
    s.set(res, onError);
    s.set({'urls':urls}, onError);
};

function eraseOptions() {
    var s = chrome.storage.local;
    var l = [];
    
    s.set({'urls': []}, onError);
    s.set(defaultMaps, onError);
};

window.addEventListener('load',loadOptions);
var save = document.getElementById('save');
save.addEventListener('click',saveOptions);
var reset = document.getElementById('reset');
reset.addEventListener('click',eraseOptions);
