AFRAME.registerComponent("vrlog", {
  init: function() {
    var camRig = this.el.querySelector("#cameraRig");
    var camRigRot = this.el
      .querySelector("#cameraRig")
      .getAttribute("rotation");
        
    AFRAME.log(camRigRot);
  }
});
