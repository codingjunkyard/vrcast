AFRAME.registerComponent('foo', {
  init: function () {
    var sceneEl = document.querySelector('a-scene');
    console.log(sceneEl);  // Reference to the scene element.
  }
});