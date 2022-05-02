var laskuri = 0;
$("#accordion").accordion();

$(document).ready(function () {
    $("#gif").hide();
    $("#accordion").accordion({collapsible: true});
});


$("#chuckbtn").click(function () {
    let chuckUrl = "http://api.icndb.com/jokes/random"; //random norris vitsi
    $("#gif").show();
    
    $.ajax({
        url: chuckUrl,
        type: "GET",
        dataType: "json",
        success: function (response) {
            // show data in DIV
            laskuri++;
            $("#counter").text(laskuri);
            $("#accordion").append("<h4>Joke " +"<i>" + laskuri +"</i> </h4><div><i>" + response.value.joke + "</i></div>");
            $("#accordion").accordion("refresh");
            $("#gif").hide();
        },
        error: function (jqxhr, textStatus, error) {
            console.log("Error: " + textStatus);
            $("#data").append("<br>" + "<i>" + "ei löydy" + "</i>");
            $("#gif").hide();
        },
    });
});
