AFRAME.registerComponent("parse-controller", {
  dependencies: ['rotate-player'],
  
  init: function(e) {
    var gp = navigator.getGamepads()[0];
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
