var slotState = {

}
var imgobj = [{
    "path"  : 'css/images/batman.png'
  },{
    "path"  : 'css/images/capt.png'
  },{
    "path"  : 'css/images/deadpoo.png'
  },{
    "path"  : 'css/images/gl.jpg'
  },{
    "path"  : 'css/images/ww.png'
  },{
    "path"  : 'css/images/spider.png'
  },{
    "path"  : 'css/images/superman.png'
  }
]
function generateSlots(){

  for (var i = 0; i < 3; i++) {
    var template =
      `<div class = 'slot-panel' id ="panel-`+i+`"></div>`;
    $("#slot-container").append(template);
  }
  genarateImagesInSlots();
}
generateSlots();



function genarateImagesInSlots(){
  for (var i = 0; i < imgobj.length; i++) {
    var template = `<img src = ` + imgobj[i].path + ` class='slot-image'>`;
    $(".slot-panel").append(template);
  }
}

function runMachine(){
  $("#panel-0 .slot-image").addClass('animated-up');
  $("#panel-1 .slot-image").addClass('animated-down');
  $("#panel-2 .slot-image").addClass('animated-up');
  setTimeout(function(){
    $(".slot-image").removeClass('animated-up');
      $(".slot-image").removeClass('animated-down');
  },3000)
}
