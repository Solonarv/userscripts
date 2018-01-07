// ==UserScript==
// @name         KissAnime Ad Skipper
// @namespace    https://github.com/Solonarv/userscripts
// @version      0.2
// @description  Open KissAnime video directly in current tab
// @author       Solonarv
// @match        http://kissanime.ru/Anime/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var vidURL = document.getElementById("divContentVideo").children[0].getAttribute("src");
    var doOpen = confirm("Found video URL: <" + vidURL + ">. Open in current tab?");
    if (doOpen) window.open(vidURL, "_self");
})();
