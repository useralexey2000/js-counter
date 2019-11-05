$(document).ready(function(){

    $("td").click(function(event){

      var tbl = $("#main-table-ix");
      var  ctr = tbl.attr("counter");

      if (ctr == null) {
        tbl.attr("counter", 0);
        ctr = 0;
      }
      ctr = parseInt(ctr);
      var cur = parseInt($(this).text());

      tbl.attr("counter", ctr + 1);
      $(this).text(cur + ctr+1);
    });

    $("#reset-count").click(function(){
      $("#main-table-ix").removeAttr("counter");
      $("#main-table-ix").find("td").each(function(){
        $(this).text("0");
      });
    });

  });