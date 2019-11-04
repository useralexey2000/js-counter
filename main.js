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
        var tbl = document.getElementById('main-table-ix');
        var ctr = tbl.getAttribute("counter");
        
        if(ctr == null) {
            tbl.setAttribute("counter", 0);
            ctr = 0;
        }
        ctr = parseInt(ctr);
        var cur = parseInt(tgt.innerText);
        
        tbl.setAttribute("counter", ctr + 1);
        tgt.innerText = cur + ctr+1;
    }

    function resetCount(event) {
        var tbl = document.getElementById('main-table-ix');
        tbl.removeAttribute("counter");
        var tds = tbl.getElementsByTagName("td");
        for(var i =0; i < tds.length; i++) {
            tds[i].innerText = 0;
        }
    }
}





