FRAME.registerComponent("control-log", {
  
  init: function() {
    console.log(this);
    AFRAME.log("message from control log", "messagez");
    AFRAME.log(this, "messagez");
  },

  update: function() {
    var el = this.el; // Reference to the component's entity.

    el.addEventListener('axismove', function(evt2) {
      AFRAME.log('axismove', evt2.detail.axis);
      console.log('axismove',evt2.detail.axis);
    });
  },

  tick: function(t) {
  
  }
});