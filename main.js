window.onload = function(){
    
    var tbl = document.getElementById('main-table-ix');
    tbl.addEventListener('click', clickCount);

    var rst = document.getElementById("reset-count");
    rst.addEventListener('click', resetCount);

    function clickCount(event) {
        var tgt = event.target;
        if (tgt.tagName != "TD") {
            console.log("not a TD");
            return;
        }
        var cur = parseInt(tgt.innerText);
        var ctr = parseInt(tgt.getAttribute("counter"));
        
        if (isNaN(ctr)) {
            ctr = 0;
        }
        tgt.setAttribute("counter", ctr + 1);
        tgt.innerText = cur + ctr+1;
    }

    function resetCount(event) {
        var tbl = document.getElementById('main-table-ix');
        var tds = tbl.getElementsByTagName("td");
        for(var i =0; i < tds.length; i++) {
            tds[i].innerText = 0;
            tds[i].removeAttribute("counter");
        }
    }
}





