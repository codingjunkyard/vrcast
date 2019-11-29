AFRAME.registerComponent("parse-controller", {
  update: function(e) {
    var gp = navigator.getGamepads();
    console.log(gp);
    AFRAME.log(gp);

    /*var gp = navigator.getGamepads()[e.gamepad.index];
    console.log(
      "Gamepad connected at index %d: %s. %d buttons, %d axes.",
      gp.index,
      gp.id,
      gp.buttons.length,
      gp.axes.length
    );*/
  }
});
