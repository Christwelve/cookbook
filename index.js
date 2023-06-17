function myFunction() {
    var txt;
    if (confirm("Share your favorite recipe with your friends")) {
      txt = "Thank you!";
    } else {
      txt = "It's a pity. You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    
  }

  function likeFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }