// ==UserScript==
// @name         SearchBar for Codeforces Favourites
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Black.n.White (pshishod2645)
// @match        https://codeforces.com/favourite/blogEntries
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Comment Out this part to not trim the blogs
    var num = 1;  // number of paragraphs you want to see. 
    var list = document.getElementsByClassName("ttypography");
    for(var i = 0; i < list.length; ++i){
        var ptags = list[i].children
        for(var j = parseInt(num); j < ptags.length; ++j){
            ptags[j].style.display = "none";
        }
    }
    // Stop commenting out for trim here. 
    
     var allBlogs = document.getElementsByClassName("topic");
    var container = document.createElement("div");
    var blogs = document.createElement("ul");

    // create a search-bar
    var searchBar = document.createElement("input");
    searchBar.setAttribute("type", "text");
    searchBar.setAttribute("onkeyup", "myFunction;");
    searchBar.onkeyup = myFunction;
    searchBar.setAttribute("placeholder", "Search  for blog title");
    searchBar.setAttribute("id", "search-bar");

    function printFunction(i){
        return function() {
            console.log(i);
            window.location.hash = `#topic-${i}`;
        };
    }
    var titlesList = [];
    for(var i = 0;i < allBlogs.length;++i){
        var item = document.createElement("li");
        item.innerHTML = allBlogs[i].children[0].children[0].children[0].innerHTML;
        titlesList.push(item.innerHTML);
        allBlogs[i].setAttribute("id", `topic-${i}`);
        item.style.display = "none";
        item.setAttribute("class", "search-bar-list-element");
        item.setAttribute("onclick", printFunction(i));
        item.onclick = printFunction(i);
        blogs.appendChild(item);
    }


    container.appendChild(blogs);
    var referenceNode = document.getElementsByClassName("second-level-menu")[0];
    referenceNode.after(container);
    referenceNode.after(searchBar);

    function myFunction(){
        var input = document.getElementById("search-bar");
        var filter = input.value.toUpperCase();
        var blogList = document.getElementsByClassName("search-bar-list-element");
        for(var i = 0;i < blogList.length; ++i){
            var text = titlesList[i];
            if(!filter || (text.toUpperCase().indexOf(filter)== -1) ){
                blogList[i].style.display = "none";
            }else{
                var len = text.length;
                var id = text.toUpperCase().indexOf(filter);
                blogList[i].style.display = "";
                blogList[i].innerHTML = text.substring(0, id) + '<span style = "color:red; ">' + text.substring(id, id + filter.length) + '</span>' +
                    text.substring(id + filter.length, len);
            }
        }
    }
})();
