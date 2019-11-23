AFRAME.registerComponent("foo", {
  
  var rigEl = document.querySelector('a-scene');
console.log(sceneEl.querySelector('#redBox'));
  
  
  init: function() {
        console.log(this.el.querySelector('#cameraRig').getAttribute('rotation'));
        AFRAME.log(this.el.querySelector('#cameraRig').getAttribute('rotation'));
    
  },
  
  update: function() {
    var x = 0, 
        y = (this.el.querySelector('#cameraRig').getAttribute('rotation').y)+10, 
        z = 0;
    
   this.el.addEventListener("abuttondown", function(evt1) {
         this.el.querySelector('#cameraRig').setAttribute('rotation', {x: x, y: y, z: z});
   });
    
         console.log(this.el.querySelector('#cameraRig').getAttribute('rotation'));
    AFRAME.log(this.el.querySelector('#cameraRig').getAttribute('rotation'));
   }
                                                  
});
