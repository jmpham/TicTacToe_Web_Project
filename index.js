var tictac = document.getElementById("tictac");
var menu = document.getElementById('menu');

function check( matrix1, player){
    //              [x][x][x]
    //              [x][x][ ]
    //              [x][ ][x]

  if(matrix1[0][0] == 1){
    console.log('here1' + matrix1[0][1]);
      if(matrix1[1][0] == 1){
        console.log('here2');
        if(matrix1[2][0] == 1){
          console.log('here3');
          $(".winner").html(player + 'wins');
          
        }
      }
      else if(matrix1[1][1]){
        if(matrix1[2][2]){
          $(".winner").html(player + 'wins');
        }
      }
      else if(matrix1[0][1]){
        if(matrix1[0][2]){
          $(".winner").html(player + 'wins');
        }
      }
    }
    //              [ ][x][ ]
    //              [ ][x][ ]
    //              [ ][x][ ]
    else if(matrix1[0][1] == 1){
      if(matrix1[1][1] == 1){
        if(matrix1[2][1] == 1){
          $(".winner").html(player + 'wins');
        }
      }
    }
    //              [ ][ ][x]
    //              [ ][ ][x]
    //              [ ][ ][x]
    else if(matrix1[0][2] == 1){
      if(matrix1[1][2] == 1){
        if(matrix1[2][2] == 1){
          $(".winner").html(player + 'wins');
        }
      }
    }
    //              [ ][ ][ ]
    //              [x][x][x]
    //              [ ][ ][ ]
    else if(matrix1[1][0] == 1){
      if(matrix1[1][1] == 1){
        if(matrix1[1][2] == 1){
          $(".winner").html(player + 'wins');
        }
      }
    }    
    //              [ ][ ][ ]
    //              [ ][ ][ ]
    //              [x][x][x]
    else if(matrix1[2][0] == 1){
      if(matrix1[2][1] == 1){
        if(matrix1[2][2] == 1){
          $(".winner").html(player + 'wins');
        }
      }
    } 
}



$(document).ready(function(){
  
  tictac.style.display = 'none';
  $('#pvp').click(function(){
    tictac.style.display = 'block';
    menu.style.display = 'none';
  })
  
  //******************* TOGGLE BUTTONS *****************
  
  function toggle(btn,x,y){
    
    if (player === 1){
      // prevent from clicking same btn
      if(matrix1[x][y] !== 1 && matrix2[x][y] !== 1){
        $(btn).html("X");
        matrix1[x][y] = 1;
        player = 2;
      }
    }
    else if(matrix1[x][y] !== 1 && matrix2[x][y] !== 1){
      $(btn).html("O");
      matrix2[x][y] = 1;
      player = 1;
    }
    console.log(matrix1);
    check(matrix1, 'player1');
    check(matrix2, 'player2');
    
  }
  
  let player = 1;
  let matrix1 = [[],[],[]];
  let matrix2 = [[],[],[]];
  
  
  
  
  
  //**********************************buttons********************************
  //**********************************buttons********************************
  //**********************************buttons********************************
  $("#r1c1").click(function(){
    toggle('#r1c1',0,0);
  })
  $("#r1c2").click(function(){
    toggle('#r1c2',0,1);
  })
  $("#r1c3").click(function(){
    toggle('#r1c3',0,2);
  })
  $("#r2c1").click(function(){
    toggle('#r2c1',1,0);
  })
  $("#r2c2").click(function(){
    toggle('#r2c2',1,1);
  })
  $("#r2c3").click(function(){
    toggle('#r2c3',1,2);
  })
  $("#r3c1").click(function(){
    toggle('#r3c1',2,0);
  })
  $("#r3c2").click(function(){
    toggle('#r3c2',2,1);
  })
  $("#r3c3").click(function(){
    toggle('#r3c3',2,2);
  })
})