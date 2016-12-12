var btn = document.querySelector("button");
var lc = document.querySelector(".load-content-here");
var rq = new XMLHttpRequest();


function handleBtnClick() {
    console.log("click");
    
    rq.open("GET", "./partials/partial.html", true);
    rq.send(null);
}
btn.addEventListener("click", handleBtnClick, false);



function ajaxCall() {
    lc.innerHTML = rq.responseText;
}
rq.addEventListener("load", ajaxCall, false);