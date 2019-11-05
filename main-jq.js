$(document).ready(function(){

    $("#main-table-ix").click(function(event){
        var tgt = event.target;
        if(tgt.tagName != "TD") {
            return;
        }
        var  ctr = $(this).attr("counter");

        if(ctr == null){
          $(this).attr("counter", 0);
          ctr = 0;
        }
        ctr = parseInt(ctr);
        var cur = parseInt(tgt.innerText);

        $(this).attr("counter", ctr + 1);
        tgt.innerText = cur + ctr+1;     
    });

    $("#reset-count").click(function(){
      $("#main-table-ix").removeAttr("counter");
      $("#main-table-ix").find("td").each(function(){
        $(this).text("0");
      });
    });

  });