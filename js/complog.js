AFRAME.registerComponent("foo", {
  init: function() {
    var setRot = this.el.getAttribute('rotation')+10;
  
       
    this.el.setAttribute
    console.log(this.el.getAttribute('rotation'));
    
  },
  update: function(){
    el.addEventListener("xbuttondown", function() {
      AFRAME.log("xButton Pressed", "messagez");
    });
    
  }
});
