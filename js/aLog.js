AFRAME.registerComponent("hudlog", {
  schema: {
    event: { type: "string", default: "" },
    message: { type: "string", default: "Hella, MetaVerse!" }
  },

  init: function() {
    AFRAME.log(document, "messagez");
  },

  update: function() {
    var el = this.el; // Reference to the component's entity.
    el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("xButton Pressed", "messagez");
    });
  },

  tick: function(t) {
    AFRAME.log("YOYO", "time");
  }
});
m;
