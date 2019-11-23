AFRAME.registerComponent("hudlog", {
  schema: {
    event: { type: "string", default: "" },
    message: { type: "string", default: "Hella, MetaVerse! Press a button" }
  },

  init: function() {
    AFRAME.log(this.data.message, "messagez");
  },

  update: function() {
    var el = this.el; // Reference to the component's entity.
    el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("xButton Pressed", "messagez");
    });
    el.addEventListener("thumbstart", function(evt2) {
      AFRAME.log("thumbstart", "messagez");
    });
    el.addEventListener("axismove", function(evt3) {
      AFRAME.log("axismove", "messagez");
    });
  },

  tick: function(t) {
    AFRAME.log("YOYO", "time");
  }
});
m;
