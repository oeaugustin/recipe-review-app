var apiURL = "https://www.themealdb.com/api/json/v1/1/random.php"
var thumbUp = document.getElementsByClassName("fa-thumbs-up")
var thumbDown = document.getElementsByClassName("fa-thumbs-dowm")
var trash = document.getElementsByClassName("fa-trash")

$("#meals").on("click",function(e){
e.preventDefault()
$.ajax({
  url:  apiURL,
  // Work with the response
  success: function( response ) {
    $("img").attr("src",response.meals[0].strMealThumb)
    $("h1").html(response.meals[0].strMeal)
    $("h2").html(response.meals[0].strArea)
    $("p").html(response.meals[0].strInstructions)
    $("li").hide()
    if (response.meals[0].strIngredient1 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient1+'</li>')
    }
    if (response.meals[0].strIngredient2 != ""){
      console.log(response.meals[0])
      $(".meals").append('<li>'+response.meals[0].strIngredient2+'</li>')
    }
    if (response.meals[0].strIngredient3 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient3+'</li>')
    }
    if (response.meals[0].strIngredient4 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient4+'</li>')
    }
    if (response.meals[0].strIngredient5 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient5+'</li>')
    }
    if (response.meals[0].strIngredient6 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient6+'</li>')
    }
    if (response.meals[0].strIngredient7 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient7+'</li>')
    }
    if (response.meals[0].strIngredient8 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient8+'</li>')
    }
    if (response.meals[0].strIngredient9 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient9+'</li>')
    }
    if (response.meals[0].strIngredient10 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient10+'</li>')
    }
    if (response.meals[0].strIngredient11 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient11+'</li>')
    }
    if (response.meals[0].strIngredient12 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient12+'</li>')
    }
    if (response.meals[0].strIngredient13 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient13+'</li>')
    }
    if (response.meals[0].strIngredient14 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient14+'</li>')
    }
    if (response.meals[0].strIngredient15 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient15+'</li>')
    }
    if (response.meals[0].strIngredient16 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient16+'</li>')
    }
    if (response.meals[0].strIngredient17 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient17+'</li>')
    }
    if (response.meals[0].strIngredient18 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient18+'</li>')
    }
    if (response.meals[0].strIngredient19 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient19+'</li>')
    }
    if (response.meals[0].strIngredient20 != ""){
      $(".meals").append('<li>'+response.meals[0].strIngredient20+'</li>')
    }
    wiki(response.meals[0].strArea)
    // console.log( response ); // server response
  },
  error: function (r){
    console.log( r ); // server response
  }
});
})

function wiki(searchTerm){
  var apiURL2 = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json"
  $.ajax({
    url: apiURL2,
    success: function(response) {
      $(".thankyou").removeClass()
      $("#country").append('<li><a href="'+ response[3][0]+'">'+ response[3][0]+'</a></li>')

      console.log(response);

    },
    error: function (r){
      console.log( r ); // server response
    }
  })
}
