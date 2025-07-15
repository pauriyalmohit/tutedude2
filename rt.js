  var start;

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function moveShape() {
      var shape = document.getElementById("shape");

      var left = Math.random() * (window.innerWidth - 150);
      var top = Math.random() * (window.innerHeight - 150);
      var size = Math.random() * 100 + 50;

      shape.style.left = left + "px";
      shape.style.top = top + "px";
      shape.style.width = size + "px";
      shape.style.height = size + "px";
      shape.style.backgroundColor = getRandomColor();
      shape.style.display = "block";

      start = new Date().getTime();
    }

   function appearAfterDelay() {
      var delay = Math.random() ; // 1 to 3 seconds
      setTimeout(moveShape, delay);
    }

    document.getElementById("shape").onclick = function () {
      var end = new Date().getTime();
      var timeTaken = (end - start);

      alert("Your reaction time: " + timeTaken + " seconds");

      this.style.display = "none";
      appearAfterDelay();
    };

    appearAfterDelay();