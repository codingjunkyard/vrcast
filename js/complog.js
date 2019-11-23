AFRAME.registerComponent("foo", {
    
  init: function() {
     var sceneEl = document.querySelector('a-scene');
     var camRigRot = sceneEl.querySelector('#cameraRig').getAttribute('rotation');
     console.log(camRigRot);
     AFRAME.log(camRigRot);
  },
  
  update: function() {
    var sceneEl = document.querySelector('a-scene');
    var camRig
    var camRigRot = sceneEl.querySelector('#cameraRig').getAttribute('rotation');
    var y = (camRigRot.y)+10;
    
   this.el.addEventListener("abuttondown", function(evt1) {
         sceneEl.('#cameraRig').setAttribute('rotation', {x: 0, y: y, z: 0});
   });
    
         console.log(this.el.querySelector('#cameraRig').getAttribute('rotation'));
    AFRAME.log(this.el.querySelector('#cameraRig').getAttribute('rotation'));
   }
                                                  
});
