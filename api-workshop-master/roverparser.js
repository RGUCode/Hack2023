/**
 * @Author: John Isaacs <john>
 * @Date:   23-Feb-182018
 * @Filename: getresources.js
 * @Last modified by:   john
 * @Last modified time: 28-Nov-182018
 */
$(document).ready(function() {

  $('#retrieve-data').click(function() {
    var displayResources = $('#display-data');

    displayResources.text('Loading Rover Data');

    $.ajax({
      type: "GET",
      url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY",
      success: function(result) {
        console.log(result);
        var photos = result.photos //this data contains an array called photos

        var output = "<table><thead><tr><th>Rover</th><th>Camera</th><th>Image URL</th></thead><tbody>";
        for (var i in photos) {
          if (photos[i].camera.name == 'MAST') {
            output += "<tr><td>" + photos[i].rover.name + "</td><td>" +
              photos[i].camera.name + "</td><td>" +
              "<img src='" + photos[i].img_src + "'/></td></tr>";
          }
        }
        output += "</tbody></table>";

        displayResources.html(output);
        $("table").addClass("table");
      }
    });

  });
});
