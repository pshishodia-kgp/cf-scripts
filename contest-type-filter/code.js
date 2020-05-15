// ==UserScript==
// @name         Filter cf contests by type
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filter Contests
// @author       Black.n.White (pshishod2645)
// @match        https://codeforces.com/contests*
// @grant        none
// ==/UserScript==

(function() {
    const handleChange = () => {
        let checkboxes = document.getElementById('contest-type-filter').getElementsByTagName('input');
        let enabled = [];
        for(let checkbox of checkboxes)if(checkbox.checked){
            enabled.push(checkbox.name);
        }

        let tableRows = document.getElementsByClassName('contests-table')[0].getElementsByTagName('tr');
        for(let i = 1;i <tableRows.length; ++i){
            let row = tableRows[i];
            let name = row.getElementsByTagName('td')[0].textContent;
            let keep = false;
            for(let type of enabled)if(name.toLowerCase().indexOf(type) !== -1){
                keep = true;
            }

            if(keep)row.style.display = '';
            else row.style.display = 'none';
        }
    }

    'use strict';
    $('.contests-table').prepend('<div id = "contest-type-filter"> </div>');
    var contestTypes = ['educational', 'div. 4', 'div. 1', 'div. 3', 'div. 2'];
    let checkboxes = '';
    $.each(contestTypes, function(i, name){
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.onclick = handleChange;
        checkbox.name = name;
        checkbox.style.margin = '2px';
        let label = document.createElement('label');
        label.innerHTML = name;
        label.style.margin = '2px';
        $('#contest-type-filter').append(checkbox);
        $('#contest-type-filter').append(label);
    });

})();
