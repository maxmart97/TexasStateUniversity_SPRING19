$(document).ready(function() {
   $("#book").button();
   $("#book").click(function() {
       $("#dialog").dialog( {
           modal: true
       });
   });
});