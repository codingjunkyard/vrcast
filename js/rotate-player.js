AFRAME.registerComponent("rotate-player", {
  schema: {
    hand: { default: "#right-hand", oneOf: ["#right-hand", "#left-hand"] }
  },
  //gamepad-controls="controller: 1"
  init: function() {
    var gp = navigator.getGamepads();
    console.log(gp);
    AFRAME.log(gp);
    //AFRAME.log(navigator.getGamepads().id);
  },

  update: function() {
    var data = this.data;
    var playerGetter = document.querySelector("#cameraRig");
    var playerAffector = this.el.querySelector(data.hand);
    var y = playerGetter.getAttribute("rotation").y;
    console.log(playerGetter);
    console.log(playerAffector);
    console.log(y);

    if (data.hand == "#right-hand") {
      //gamepad-controls="controller: 1"
    }

    playerAffector.addEventListener("axismove", function(evt1) {
      AFRAME.log(evt1.detail.axis);
      AFRAME.log(navigator.getGamepads().id);
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
