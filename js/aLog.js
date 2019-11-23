AFRAME.registerComponent("hudlog", {
  schema: {
    event: { type: "string", default: "" },
    message: { type: "string", default: "Hella, MetaVerse! Press a button" }
  },

  init: function() {
    AFRAME.log(this.data.message, "messagez");
   
  },

  update: function() {
    
    
  },

  tick: function(t) {
   var el = this.el; // Reference to the component's entity.
    
    
    
    el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("xButton Pressed", "messagez");
    });
    el.addEventListener("axismove", function(evt2) {
      AFRAME.log("axismove", "messagez");
    });
  }
});
m;
