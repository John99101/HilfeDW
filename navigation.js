document.addEventListener("DOMContentLoaded", function() {
    var navigationContainer = document.getElementById("navigation-container");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "navigation.html", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        navigationContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });