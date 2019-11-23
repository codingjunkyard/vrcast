AFRAME.registerComponent("vrlog", {
  init: function(){
    var el = this.el; // Reference to the component's entity.
    AFRAME.log("Look at your controllers");
    AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
    
  },
  update: function() {
     var el = this.el; // Reference to the component's entity.

    el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("xButton Pressed");
      AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
    });
    
    el.addEventListener("abuttondown", function(evt1) {
      AFRAME.log("aButton Pressed");
      AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
    });
  },
})
