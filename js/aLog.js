AFRAME.registerComponent("hudlog", {
  schema: {
    event: { type: "string", default: "" },
    message: { type: "string", default: "Hella, MetaVerse!" }
  },

  init: function() {
    var self = this;

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
    var data = this.data; // Component property values.
    var el = this.el; // Reference to the component's entity.

    if (data.event) {
      // This will log the `message` when the entity emits the `event`.
      el.addEventListener(data.event, function() {
        AFRAME.log(data.message, "messagez");
      });
    } else {
      // `event` not specified, just log the message.
      AFRAME.log(data.message, "messagez");
    }
  },

  tick: function(t) {
    AFRAME.log("Time: " + t, "time");
  }
});
