var slotState = {
  "credit" : 100000,
  "bet" : 100,
  "panels":{}
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

function initializeApp(){
  generateSlots();
  updateSlotState();
};

function updateSlotState(){
  $("#current-credit").text(slotState.credit);
  $("#current-bet").text(slotState.bet);
};

initializeApp();

function generateSlots(){
  for (var i = 0; i < 3; i++) {
    var template =
      `<div class = 'slot-panel' id ="panel-`+i+`"></div>`;
    $("#slot-container").append(template);
  }
  genarateImagesInSlots();
}




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
  stopMachine();
}


function stopMachine(){
  setTimeout(function(){
    $("#panel-0 .slot-image").removeClass('animated-up');
    getRandomImage('#panel-0');
  }, 3000);
  setTimeout(function(){
  $("#panel-1 .slot-image").removeClass('animated-down');
    getRandomImage('#panel-1');
  }, 3500);
  setTimeout(function(){
    $("#panel-2 .slot-image").removeClass('animated-up');
    getRandomImage('#panel-2');
    processResults();
  }, 4000);

}

function getRandomImage(node){
  var pos = Math.floor(Math.random() * 6) + 1;
  pos = pos * (-200);
  $(node + " .slot-image").css('top', pos);
  slotState.panels[node] = pos;
  console.log(slotState.panels);
}

function processResults(){
  if((slotState.panels['#panel-0'] === slotState.panels['#panel-2']) && (slotState.panels['#panel-0'] === slotState.panels['#panel-1'])){
    slotState.credit = slotState.credit + (10 * slotState.bet);
  } else {
    slotState.credit = slotState.credit - slotState.bet;
  }
  updateSlotState();
}

function raise(){
  slotState.bet = slotState.bet + 100;
  updateSlotState();
}
