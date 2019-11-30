AFRAME.registerComponent("rotate-player", {
  schema: {
    hand: { default: "right", oneOf: ["right", "left","combine"] }
  },
  update: function() {
    var data = this.data;
    var handSelect = "#"+data.hand+"-hand";
    //var controlinfo = this.el.sceneEl; //figure how to get the navigator.gamepads().id to work
    var playerGetter = document.querySelector("#cameraRig");
    var playerAffector = this.el.querySelector(handSelect);
    var y = playerGetter.getAttribute("rotation").y;
    
    if (data.hand == "right") {
      playerGetter.setAttribute("gamepad-controls", { controller: 0 });
    } else if (data.hand == "left"){
      playerGetter.setAttribute("gamepad-controls", { controller: 1 });
    }
    else{
      playerAffector=this.el.querySelector("#right-hand");
      playerGetter.setAttribute("gamepad-controls", { controller: 1 });
    }
    
    AFRAME.log(handSelect);
    //console.log(controlinfo);
    //console.log(playerGetter);
    //console.log(playerAffector);
    //console.log(y);

    playerAffector.addEventListener("axismove", function(evt1) {
      //AFRAME.log(evt1.detail.axis);

      if (evt1.detail.axis[0] > 0.9) {
        playerGetter.setAttribute("rotation", { x: 0, y: (y -= 10), z: 0 });
        if (y == 360) {
          y = 0;
        }
      }
    });

    playerAffector.addEventListener("axismove", function(evt2) {
      if (evt2.detail.axis[0] < -0.9) {
        playerGetter.setAttribute("rotation", { x: 0, y: (y += 10), z: 0 });
        if (y == -360) {
          y = 0;
        }
        //AFRAME.log(y);
      }
    });
  }
});
