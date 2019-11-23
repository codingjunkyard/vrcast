AFRAME.registerComponent("vrlog", {
  update: function() {
     var el = this.el; // Reference to the component's entity.

    el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("xButton Pressed");
      AFRAME.log(el.querySelector);
    });
    
    el.addEventListener("abuttondown", function(evt1) {
      AFRAME.log("aButton Pressed");
    });
  },
})
