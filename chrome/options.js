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


function loadOptions() {
	var urlMaps = localStorage["urlMaps"];

	// valid colors are red, blue, green and yellow
	if (urlMaps == undefined) {
		urlMaps = defaultMaps;
	}
    
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
          input.setAttribute("value",urlMaps[p]);
          container.appendChild(label);
          container.appendChild(input);
          node.appendChild(container);
      }
    }
}

function saveOptions() {
    var res = {};
	var inputs = document.getElementsByTagName('input');
	for (var input in inputs) {
        var key = input.getAttribute("name");
        var value = input.getAttribute("value");
        res[key] = value;
    }
    
	localStorage["urlMaps"] = res;
}

function eraseOptions() {
	localStorage.removeItem("urlMaps");
	location.reload();
}

window.addEventListener('load',loadOptions);
var save = document.getElementById('save');
save.addEventListener('click',saveOptions);
var reset = document.getElementById('reset');
reset.addEventListener('click',eraseOptions);
