AFRAME.registerComponent("foo", {
  init: function() {
        console.log("Old Rotation"+this.el.querySelector('#cameraRig').getAttribute('rotation'));
        AFRAME.log(this.el.querySelector('#cameraRig').getAttribute('rotation'));
    
  },
  
  update: function() {
    var x = 0, 
        y = (this.el.getAttribute('rotation').y)+10, 
        z = 0;
    
   this.el.addEventListener("abuttondown", function(evt1) {
         this.el.setAttribute('rotation', {x: x, y: y, z: z});
   });
    
         console.log(this.el.getAttribute('rotation'));
    AFRAME.log(this.el.getAttribute('rotation'));
   }
                                                  
});
