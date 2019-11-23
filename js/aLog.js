AFRAME.registerComponent("hudlog", {
  
  init: function() {
    AFRAME.log("Hella, MetaVerse! Press a button", "messagez");
    AFRAME.log(navigator.getGamepads(), "messagez");
  },

  update: function() {
    var el = this.el; // Reference to the component's entity.

    el.getAttribute('id', function(evt1) {
      AFRAME.log("id", "messagez");
    });
    
    el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("xButton Pressed", "messagez");
    });
    
    el.addEventListener("axismove", function(evt2) {
      AFRAME.log("axismove", "messagez");
    });
  },

  tick: function(t) {
    AFRAME.log("YOYO", "time");
  }
});
m;
