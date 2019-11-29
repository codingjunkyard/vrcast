const COMPONENT_SUFFIX = '-controls';

AFRAME.registerComponent("vrlog", {
  init: function(){
    
    var fooComponent = this.el.querySelector('[gamepad-controls]');
console.log(fooComponent);
//fooComponent.qux();
    
    console.log(this.el.querySelector('#cameraRig'));
    var el = this.el; // Reference to the component's entity.
    
    AFRAME.log("Look at your controllers");
    AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
    
        
  },
  update: function() {
     var el = this.el; // Reference to the component's entity.

    el.addEventListener("xbuttondown", function(evt1) {
      AFRAME.log("xButton Pressed");
      AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
    });
    
    el.addEventListener("abuttondown", function(evt1) {
      AFRAME.log("aButton Pressed");
      AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
    });
    
    el.addEventListener("axismove", function(evt2) {
      AFRAME.log('axismove',evt2.detail.axis);
      AFRAME.log(el.querySelector('#cameraRig').getAttribute('rotation'));
    });
    
  },
})
