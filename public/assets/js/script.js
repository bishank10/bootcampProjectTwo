// Keeps user logged in between sessions
var userName = localStorage.getItem("congoUser");
if (window.location.pathname == "/" && userName) {
  window.location.replace("/main");
}
$("#hello").text(`Hello ${userName}!`);

// Log out the user
$("#logout").on("click", function (event) {
  event.preventDefault(event);
  localStorage.removeItem("congoUser");
  window.location.replace("/")
});

// Send user to login page
$("#login").on("click", function (event) {
  event.preventDefault(event);
  window.location.replace("/login");
})

// Send user to add product
$("#addProduct").on("click", function (event) {
  event.preventDefault(event);
  window.location.replace("/add");
})

function includePosters() {
  
}

// updating the likes
$("button.like").on("click", function (event) {
  event.preventDefault();
  var productId = event.target.id;
  var like = $(this).data("like") + 1;
  console.log(productId);
  console.log(like);
  var updatedLikes = {
    likes: like
  }
  $.ajax("/api/products/like/" + productId, {
    type: "PUT",
    data: updatedLikes
  }).then(function (res) {
    location.reload();
  });

});

// updating the dislikes
$("button.dislike").on("click", function (event) {
  event.preventDefault();
  var productId = event.target.id;
  var dislike = $(this).data("dislike") + 1;
  var dislike2 = parseInt(dislike);
  console.log(productId);
  console.log(dislike2);
  var updatedDislikes = {
    dislikes: dislike2
  }
  $.ajax("/api/products/dislike/" + productId, {
    type: "PUT",
    data: updatedDislikes
  }).then(function (res) {
    location.reload();
  });

});

includePosters();