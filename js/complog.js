AFRAME.registerComponent("foo", {
  init: function() {
    
    console.log(this.el.getAttribute('rotation'));
    
  },
  update: function(){
    var getRotation = this.el.getAttribute('rotation');
    var setRotation = getRotation+10;
    console.log(setRotation)
   // el.addEventListener("abuttondown", function() {
    //  this.el.setAttribute('rotation',{x:0 y:100 z:0});
  }
});
