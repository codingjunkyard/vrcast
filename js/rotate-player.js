AFRAME.registerComponent("rotate-player", {
  
  update: function() {
  var y=this.el.getAttribute('rotation').y;

    this.el.addEventListener("abuttondown", function(evt1) {
      this.setAttribute("rotation", { x: 0, y: y-=10, z: 0 });
      if(y==360){
        y=0;
      }
    });
    
    this.el.addEventListener("bbuttondown", function(evt1) {
           this.setAttribute("rotation", { x: 0, y: y+=10, z: 0 });
      if(y==-360){
        y=0;
      }

    });
  }
});
