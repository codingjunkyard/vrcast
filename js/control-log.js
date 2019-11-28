AFRAME.registerComponent("control-log", {
  
  init: function() {
    console.log(this);
    AFRAME.log("message from control log");
    AFRAME.log(this);
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