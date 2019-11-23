AFRAME.registerComponent("foo", {
  update: function() {
    var camRig = this.el.querySelector("#cameraRig");
    var camRigRot = this.el
      .querySelector("#cameraRig")
      .getAttribute("rotation");
    var y = camRigRot.y;

    this.el.addEventListener("abuttondown", function(evt1) {
      AFRAME.log("a Button Pressed");
      camRig.setAttribute("rotation", { x: 0, y: (y+10), z: 0 });
    });
    AFRAME.log(camRigRot);
    
    this.el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("x Button Pressed");
      camRig.setAttribute("rotation", { x: 0, y: (y-10), z: 0 });
    });
    AFRAME.log(camRigRot);
    
    
  }
});
