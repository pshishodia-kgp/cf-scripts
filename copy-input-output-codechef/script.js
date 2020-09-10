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
    var  list = ['', '0', '1', '2', '3'];

    document.body.innerHTML += '<p style = "position:fixed; bottom:0px; right: 10px; background-color:black; color:white; padding:5px; display: none;" id = "toggletext"> Your Text was copied </p>'

    var checkRenderedExists = setInterval(() => {
        let rendered = false;
        for(let i of list){
            let input = $('#exampleinput' + i).next().children();
            let output = $('#exampleoutput' + i).next().children();
            if(!input[0])continue;

            rendered = true;
            input.attr('id', 'inputtext' + i);
            output.attr('id', 'outputtext' + i);
            $('<button class = "button copier" data-clipboard-target="#inputtext' + i + '">Copy</button> <br />').insertBefore('#inputtext' + i);
            $('<button class = "button copier" data-clipboard-target="#outputtext' + i + '">Copy</button> <br />').insertBefore('#outputtext' + i);
        }
        if(rendered)clearInterval(checkRenderedExists);
    }, 100);

    clipboard.on('success', function(e){
        $('#toggletext').css('display', '');
        e.clearSelection();
        setTimeout(() => $('#toggletext').css('display', 'none'),
                   1000);
    });
})();
