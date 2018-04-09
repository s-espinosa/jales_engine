$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "http://127.0.0.1:3000/api/v1/merchants/most_revenue?quantity=5"
  }).done(function(data) {
    var liString = "";
    data.forEach(function(merchant) {
      liString += "<li>" + merchant['name'] + "</li>"
    })
    console.log(data)
    console.log(liString)
    $("ul").html(liString)
  })
})
