AFRAME.registerComponent("rotate-player", {
  schema:
  
  gamepad-controls="controller: 1"
  
  
  
  update: function() {
    //var y = this.el.getAttribute("rotation").y;
    //console.log(this.el.querySelector('#right-hand'));
    var playerGetter = document.querySelector("#cameraRig");
    var playerAffector = this.el.querySelector("#right-hand");
    var y = playerGetter.getAttribute("rotation").y;
    console.log(playerGetter);
    console.log(playerAffector);
    console.log(y);

    playerAffector.addEventListener("axismove", function(evt1) {
      AFRAME.log(evt1.detail.axis);
      if (evt1.detail.axis[0] > 0.7) {
        playerGetter.setAttribute("rotation", { x: 0, y: (y -= 10), z: 0 });
        if (y == 360) {
          y = 0;
        }
      }
    });

    playerAffector.addEventListener("axismove", function(evt2) {
      if (evt2.detail.axis[0] < -0.7) {
        playerGetter.setAttribute("rotation", { x: 0, y: (y += 10), z: 0 });
        if (y == -360) {
          y = 0;
        }
      }
    });
  }
});
