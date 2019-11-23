
      AFRAME.registerComponent('hudlog', {
        init: function () {
          var self = this;

          // Using setInterval for demo convenience, but in practice, should use tick.
          setInterval(function () {
            self.logRandomColor();
          }, 500);

          setInterval(function () {
            self.logRandomNumber();
          }, 250);

          this.el.emit('log', {message: 'Logging started!'});
        },

        logRandomColor: function () {
          var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
          AFRAME.log(colors[Math.floor(Math.random() * 7)], 'colorz');
        },

        logRandomNumber: function () {
          AFRAME.log(Math.random() * 10000, 'numberz');
        },

        tick: function (t) {
          AFRAME.log('Time: ' + t, 'time');
        }
      });
    