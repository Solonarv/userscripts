// ==UserScript==
// @name         SufficientVelocity Unread Link Fixer
// @namespace    https://github.com/Solonarv/userscripts
// @version      0.1
// @description  Change the "go to first unread" link to point to ...thread.12345/unread
// @author       Solonarv
// @match        https://forums.sufficientvelocity.com/threads/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Thanks for having sensible class names, SV!
    for (const link of document.getElementsByClassName("unreadLink")) {
        const loc = link.href;
        if (typeof loc !== "string") continue;
        link.href = loc.replace(/page-\d+(#post-\d+)?$/, "unread");
    }
})();
