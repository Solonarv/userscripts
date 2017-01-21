// ==UserScript==
// @name         Darths and Droids Linkifier
// @namespace    https://github.com/Solonarv/userscripts/blob/master/darthsanddroids.net/linkify.user.js
// @version      0.1
// @author       Solonarv
// @match        http://darthsanddroids.net/episodes/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var imgs = document.getElementsByTagName("img");
    var comicImage;
    for (var i=0; i < imgs.length; i++){
        if (/.*\/comics\/.*/.test(imgs[i].src)){
            comicImage = imgs[i];
            break;
        }
    }
    if (typeof comicImage === "undefined") return;
    console.log("found comic image!");
    var comicImageParent = comicImage.parentElement;

    var links = document.getElementsByTagName("a");
    var nextLink;
    for (var j=0; j < links.length; j++){
        if (links[j].innerText === "NEXT>"){
            nextLink = links[j];
            break;
        }
    }

    if (typeof nextLink === "undefined") return;
    console.log("found next link!");

    var imgWrapper = document.createElement("a");
    imgWrapper.href = nextLink.href;
    comicImageParent.insertBefore(imgWrapper, comicImage);
    comicImageParent.removeChild(comicImage);
    imgWrapper.appendChild(comicImage);
})();
