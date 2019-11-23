AFRAME.registerComponent("foo", {
  init: function() {
        console.log(this.el.getAttribute('rotation'));
    
  },
  
  update: function() {
    var x = 0, 
        y = (this.el.getAttribute('rotation').y)+10, 
        z = 0;
    
   this.el.addEventListener("abuttondown", function(evt1) {
         this.el.setAttribute('rotation', {x: x, y: y, z: z});
   });
    
         console.log(this.el.getAttribute('rotation'));
   }
                                                  
});
