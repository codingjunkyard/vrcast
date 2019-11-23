AFRAME.registerComponent("rotate-player", {
  
  update: function() {
    
  var y=this.el.getAttribute('rotation').y;

    this.el.addEventListener("abuttondown", function(evt1) {
      this.setAttribute("rotation", { x: 0, y: y+=10, z: 0 });
      
    });
    
    this.el.addEventListener("xbuttondown", function(evt1) {
           this.setAttribute("rotation", { x: 0, y: y-=10, z: 0 });
      

    });
  }
});
