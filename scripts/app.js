const mode = document.querySelector(".darkmode");

mode.addEventListener("click", function () {
  mode.classList.toggle("dark-mode");
});

// tidio chat code

document.tidioChatLang = document.querySelector("html").getAttribute("lang");

document.tidioChatLang = "es";
setTimeout(function () {
  var tidioScript = document.createElement("script");
  tidioScript.src = "//code.tidio.co/PUBLIC_KEY.js";
  document.body.appendChild(tidioScript);
}, 5 * 1000);

(function () {
  function onTidioChatApiReady() {
    window.tidioChatApi.open();
  }
  if (window.tidioChatApi) {
    window.tidioChatApi.on("ready", onTidioChatApiReady);
  } else {
    document.addEventListener("tidioChat-ready", onTidioChatApiReady);
  }
})();
