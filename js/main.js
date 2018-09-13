function shake(){
  addAnimation();
}

function addAnimation(){
  document.getElementById('dice-face').classList.add('shake');
  var timer = setInterval(function(){
    showFaceOutput();
  }, 300)
  setTimeout(function(){
    document.getElementById('dice-face').classList.remove('shake');
    clearInterval(timer);
    showFaceOutput();
  },3000);
}

function generateDots(){
  for (var i = 0; i < 3; i++) {
    var temp = "<div class = 'row'></div>";
    $("#dice-face").append(temp);
  }
  for (var i = 0; i < 3; i++) {
    var dot = "<div class='dot-box'><div class = 'dot'></div></div>";
    $(".row").append(dot);
  }
  showFaceOutput();
}

function generateFaceValue(){
  var num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
  return num;
}

function showFaceOutput(){
  var value = generateFaceValue();
  $(".dot").hide();
  var els = $(".dot")
  switch(value){
    case 1:
          $(els[4]).show();
          break;
    case 2:
          $(els[5]).show();
          $(els[3]).show();
          break;
    case 3:
          $(els[0]).show();
          $(els[4]).show();
          $(els[8]).show();
          break;
    case 4:
          $(els[0]).show();
          $(els[2]).show();
          $(els[8]).show();
          $(els[6]).show();
          break;
    case 5:
          $(els[0]).show();
          $(els[2]).show();
          $(els[4]).show();
          $(els[8]).show();
          $(els[6]).show();
          break;
    case 6:
          $(els[0]).show();
          $(els[2]).show();
          $(els[1]).show();
          $(els[8]).show();
          $(els[7]).show();
          $(els[6]).show();
          break;

  }
}

generateDots();
