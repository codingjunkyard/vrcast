AFRAME.registerComponent("rotate-player", {
  
  update: function() {
  var y=this.el.getAttribute('rotation').y;
  //TODO: var playerAffector=querySelector('a-scene').querySelector(#cameraRig)

    this.el.addEventListener("abuttondown", function(evt1) {
      //this.el.addEventListener("axismove", function(evt1) {
      //if (evt1.detail.axis[0]>0.7){
      //playerAffector.setAttribute("rotation", { x: 0, y: y-=10, z: 0 });
      //}
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
