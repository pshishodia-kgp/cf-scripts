// ==UserScript==
// @name         Hide accepted problems
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Black.n.White (pshishod2645)
// @match        https://codeforces.com/problemset
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x = document.getElementsByClassName("accepted-problem");
    var i;
    for(let ele of x)
        ele.style.display = 'none';
})();
