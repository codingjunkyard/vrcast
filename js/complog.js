const COMPONENT_SUFFIX = '-controls';

AFRAME.registerComponent("vrlog", {
  init: function(){
        
    console.log(this.el.querySelector('#cameraRig'));
        
    AFRAME.log("Hello From vrlog");
   // AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
       
        
  },
  update: function() {
     
    
    
  },
});
