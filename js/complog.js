AFRAME.registerComponent("foo", {
   
  update: function() {
    var camRig = this.el.querySelector('#cameraRig');
    var camRigRot = this.el.querySelector('#cameraRig').getAttribute('rotation');
    var y = (camRigRot.y)+10;
    
   this.el.addEventListener("abuttondown", function(evt1) {
         camRig.setAttribute('rotation', {x: 0, y: y, z: 0});
   });
    
    console.log(camRigRot);
    AFRAME.log(camRigRot);
   }
                                                  
});
