AFRAME.registerComponent("hudlog", {
  schema: {
    event: { type: "string", default: "" },
    message: { type: "string", default: "Hella, MetaVerse!" }
  },

  init: function() {
    var self = this;

    AFRAME.log(document.document.URL, "messagez");
    
    
    
    // Using setInterval for demo convenience, but in practice, should use tick.
    setInterval(function() {
      self.logRandomColor();
    }, 500);

    setInterval(function() {
      self.logRandomNumber();
    }, 250);

    this.el.emit("log", { message: "Logging started!" });
  },

  logRandomColor: function() {
    var colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet"
    ];
    AFRAME.log(colors[Math.floor(Math.random() * 7)], "colorz");
  },

  logRandomNumber: function() {
    AFRAME.log(Math.random() * 10000, "numberz");
  },

  update: function() {
    var el = this.el; // Reference to the component's entity.
    el.addEventListener('xbuttondown', function (evt1) {
      AFRAME.log("xButton Pressed", "messagez")});
    el.addEventListener('axismove', function (evt2) {
      AFRAME.log("thumbsticktouchstart", "messagez")});
    
    
    
  },

  tick: function(t) {
    AFRAME.log("Time: " + t, "time");
  }
});
