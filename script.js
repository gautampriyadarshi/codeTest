function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  for (i = 0; i < x.length; i++) {
      if (x[i].classList.contains(c)) {
          x[i].style.display = "block";
      } else {
          x[i].style.display = "none";
      }
  }
} 

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}

// Add active class to the current button (highlight it)
var myBtnContainer2 = document.getElementById("myBtnContainer2");
var btns = myBtnContainer2.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}

