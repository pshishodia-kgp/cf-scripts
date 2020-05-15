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
    var acceptedHidden = false, button, accepted, myButton;
    const toggleProblemStatus = () => {
        console.log('hi');
        acceptedHidden = !acceptedHidden;
        if(acceptedHidden){
            for(let problemRow of accepted)
                problemRow.style.display = 'none';
            myButton.innerHTML = 'Show Accepted';
        }else{
            for(let problemRow of accepted)
                problemRow.style.display = '';
            myButton.innerHTML = 'Hide accepted';
        }
    }
    button = document.createElement('button');
    button.style.float = 'right';
    button.id = 'accepted-toggle-button';
    button.onclick = toggleProblemStatus;
    button.innerHTML = 'Hide accepted';
    console.log(button);
    document.getElementsByClassName('second-level-menu')[0].appendChild(button);
    accepted = document.getElementsByClassName("accepted-problem");
    console.log(accepted);
    myButton = document.getElementById('accepted-toggle-button');
    console.log('hi', 'myButton : ', myButton);
})();
