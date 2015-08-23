$(document).ready(function() {
    
    $("#urlsubmit").click(function(event){
      
       url = $("#urlfield").val()
       
       var intRegex = /[0-9 -()+]+$/;
       var prodID = intRegex.exec(url)[0];
       
       var APICall = "http://api.walmartlabs.com/v1/items/" + prodID + "?format=json&apiKey=gbrbhujav38dgg32hjyu8zny";

       $.getJSON(APICall, function(data){
           
           var product = data;
           $( "body" ).append("<div> <b>" + product.name + "</b></div><br>");
           $( "body" ).append("<img src=" + product.thumbnailImage + " align=\"left\">"); 
           $( "body" ).append("<div>" + product.brandName + "</div>");
           $( "body" ).append("<div>" + "$" + product.salePrice + " +" + product.standardShipRate + " shipping" + "</div>");
           $( "body" ).append("<br>");
           $( "body" ).append("<br><br><br>");

       });



       return false

    });

});
