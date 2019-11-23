AFRAME.registerComponent("foo", {
  init: function() {
    
    console.log(this.el.querySelectorAll('a-box'));
    
  }
});
