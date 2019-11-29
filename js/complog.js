AFRAME.registerComponent("vrlog", {
  init: function() {
    console.log(this.el.querySelector("#cameraRig"));

    AFRAME.log(
      "Hello DEVUSOL Team!\nUse the controllers to manuver yourself around.\nTRY" +
        "ALL OF THE BUTTONS!!!\nThe LEFT THUMBSTICK should move around\nThe RIGHT THUMBSTICK should " +
        "rotate\nThe LEFT TRIGGER should teleport.\nIf not, let me know what they are doing. " +
        "Our goal is to discover the most intuitive setup for new users to navigate " +
        "the VR space using quest controllers. Keep in mind we might be using virtual hands " +
        "or shooter models for hands, so the trigger might not be the best button to use for teleporting." +
        "We can also adjust movement and rotation speeds as well. Let me know what you guys think."
    );
    // AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
  },
  update: function() {
    var el = this.el; // Reference to the component's entity.

    el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("xButton Pressed");
    });
    el.addEventListener("abuttondown", function(evt1) {
      AFRAME.log("aButton Pressed");
    });
    el.addEventListener("bbuttondown", function(evt1) {
      AFRAME.log("bButton Pressed");
    });
    el.addEventListener("ybuttondown", function(evt1) {
      AFRAME.log("yButton Pressed");
    });
    el.addEventListener("gripdown", function(evt1) {
      AFRAME.log("gripButton Pressed");
    });
    el.addEventListener("triggerdown", function(evt1) {
      AFRAME.log("trigerButton Pressed");
    });
    el.addEventListener("thumbstickdown", function(evt1) {
      AFRAME.log("thumbstickButton Pressed");
    });
  }
});
