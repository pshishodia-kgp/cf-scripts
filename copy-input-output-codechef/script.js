// ==UserScript==
// @name         copy input/output - codechef
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allow copying input/output in codechef problems
// @author       pshishod2645
// @match        https://www.codechef.com/*/problems/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var clipboard = new ClipboardJS(".copier");

    let input = $('#exampleinput').next().children();
    let output = $('#exampleoutput').next().children();
    input.attr('id', 'inputtext1');
    output.attr('id', 'outputtext1');
    console.log(input[0], output[0]);


    $('<button class = "button copier" data-clipboard-target="#inputtext1">Copy</button> <br />').insertBefore('#inputtext1');
    $('<button class = "button copier" data-clipboard-target="#outputtext1">Copy</button> <br />').insertBefore('#outputtext1');

    document.body.innerHTML += '<p style = "position:fixed; bottom:0px; right: 10px; background-color:grey; padding:5px; display: none;" id = "toggletext"> Your Text was copied </p>'
    clipboard.on('success', function(e){
        $('#toggletext').css('display', '');
        e.clearSelection();
        setTimeout(() => $('#toggletext').css('display', 'none'),
                   3000);
    });
})();
