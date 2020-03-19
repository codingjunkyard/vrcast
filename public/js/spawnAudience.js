
AFRAME.registerComponent('spawnaudience', {
  schema: {
    radius: {type: 'number', default: 1}
  },

  init: function() {
    var el = this.el;
    var center = el.getAttribute('position');
    var players = document.querySelectorAll(".head");
    var worldPoint = {x: center.x + players.length + 1, y: 0, z: 0};
    
    el.setAttribute('position', worldPoint);
    console.log('world point', worldPoint);

    
    el.object3D.rotation.set(0, 0, 0);
    
    console.log('count', players.length);
  }
  
});