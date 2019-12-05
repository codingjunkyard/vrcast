AFRAME.registerComponent("rotateplayer", {
  schema: {
    hand: { default: "right", oneOf: ["right", "left", "combine"] }
  },
  update: function() {
    var data = this.data;
    var handSelect = "#" + data.hand + "-hand";
    //var controlinfo = this.el.sceneEl; //figure how to get the navigator.gamepads().id to work
    var playerGetter = document.querySelector("#cameraRig");
    var playerAffector = this.el.querySelector(handSelect);
    var y = playerGetter.getAttribute("rotation").y;
    var count = 0;
    AFRAME.log(handSelect);
    AFRAME.log(count);

    this.el.addEventListener("abuttondown", function(evt1) {
      if (count == 0) {
        playerGetter.setAttribute("gamepad-controls", { controller: 0 });
        count = 1;
        AFRAME.log("count "+ count +"hand " + handSelect);
      } else if (count == 1) {
        playerGetter.setAttribute("gamepad-controls", { controller: 1 });
        count = 2;
        AFRAME.log("count "+ count +"hand " + handSelect);
      } else if (count == 2) {
        console.log(this);
        this.setAttribute("rotate-player",{hand: "right"});
        playerGetter.setAttribute("gamepad-controls", { controller: 0 });
        count = 3;
        AFRAME.log("count "+ count +"hand " + handSelect);
      } else {
        this.setAttribute("rotate-player",{hand: "left"});
        playerGetter.setAttribute("gamepad-controls", { controller: 1 });
        count = 0;
        AFRAME.log("count "+ count +"hand " + handSelect);
      }
    });

    //console.log(playerGetter);
    //console.log(playerGetter);
    //console.log(y);

    playerAffector.addEventListener("axismove", function(evt1) {
      //AFRAME.log(evt1.detail.axis);

      if (evt1.detail.axis[0] > 0.9) {
        playerGetter.setAttribute("rotation", { x: 0, y: (y -= 5), z: 0 });
        if (y == 360) {
          y = 0;
        }
      } else if (evt1.detail.axis[0] < -0.9) {
        playerGetter.setAttribute("rotation", { x: 0, y: (y += 5), z: 0 });
        if (y == -360) {
          y = 0;
        }
      }
    });
  }
});
