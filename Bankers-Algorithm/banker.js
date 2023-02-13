/* reset fucntion : to reset all the values in  simulator*/
function reset(){
  for(var i=1; i<=5; i++){
    for(var j=1; j<=3; j++){
      document.getElementById('a'+i+j).value = '';
      document.getElementById('m'+i+j).value = '';
      document.getElementById('n'+i+j).value = '';
    }
    document.getElementById('p'+i).value = '';
  }
  // set all values null
  document.getElementById('av11').value = '';
  document.getElementById('av12').value = '';
  document.getElementById('av13').value = '';
  document.getElementById('resourceA').value = '';
  document.getElementById('resourceB').value = '';
  document.getElementById('resourceC').value = '';
  document.body.style.backgroundColor = "#ffffff";
}

/* example function : provides sample values to run banker's algorithm*/
function example(){
  sam = [[0,1,0],
        [2,0,0],
        [3,0,2],
        [2,1,1],
        [0,0,2]];

  max = [[7,5,3],
        [3,2,2],
        [9,0,2],
        [2,2,2],
        [4,3,3]];

  for(var i=1; i<=5; i++){
    for(var j=1; j<=3; j++){
      document.getElementById('a'+i+j).value = sam[i-1][j-1];
      document.getElementById('m'+i+j).value = max[i-1][j-1];
    }
  }
  document.getElementById('resourceA').value = 10;
  document.getElementById('resourceB').value = 5;
  document.getElementById('resourceC').value = 7;
}


/* find_avail function calculates the available resources for further process
this algorithm gives difference of total resource and allocated resource
available = total number of resources - total number of allocated resources */
function find_avail(){
  var a = document.getElementById('resourceA').value;
  var b = document.getElementById('resourceB').value;
  var c = document.getElementById('resourceC').value;
  var x = 0;
  var y = 0;
  var z = 0;
  // this for loops takes user input for max allocation for any process
  for(var i=1; i<=5; i++){
      var x = x + parseInt(document.getElementById('a'+i+'1').value);
      var y = y + parseInt(document.getElementById('a'+i+'2').value);
      var z = z + parseInt(document.getElementById('a'+i+'3').value);
  }
  document.getElementById('av11').value = a-x;
  document.getElementById('av12').value = b-y;
  document.getElementById('av13').value = c-z;
}

/* find_need function determines the need of resources to complete the process 
this algorithm gives difference of max resource and allocated resource
available = Required number maximum resources - total number of allocated resources */
function find_need(){
  for(var i=1; i<=5; i++){
    for(var j=1; j<=3; j++){
      document.getElementById('n'+i+j).value = parseInt(document.getElementById('m'+i+j).value) - parseInt(document.getElementById('a'+i+j).value);
    }
  }
}


function run_algo(){
  find_avail();
  find_need();
  var k=1;
  var q = 1;

  // this for loop takes allocated resources for each process 
    for(var j=1; j<=5; j++){
    x1 = parseInt(document.getElementById('av11').value);
    x2 = parseInt(document.getElementById('av12').value);
    x3 = parseInt(document.getElementById('av13').value);
    for(var i=k; i<=5; i++){
      var ex1 = parseInt(document.getElementById('a'+i+'1').value);
      var ex2 = parseInt(document.getElementById('a'+i+'2').value);
      var ex3 = parseInt(document.getElementById('a'+i+'3').value);

    
      if(ex1!= 0 || ex2!= 0 || ex3!= 0){
        // this checks need of resources is less than available resources 
        if(x1 >= parseInt(document.getElementById('n'+i+'1').value) && x2 >= parseInt(document.getElementById('n'+i+'2').value) && x3 >= parseInt(document.getElementById('n'+i+'3').value)){
          document.getElementById('p'+q).value = 'P'+i;
          document.getElementById('av11').value = parseInt(document.getElementById('av11').value) + parseInt(document.getElementById('a'+i+'1').value);
          document.getElementById('av12').value = parseInt(document.getElementById('av12').value) + parseInt(document.getElementById('a'+i+'2').value);
          document.getElementById('av13').value = parseInt(document.getElementById('av13').value) + parseInt(document.getElementById('a'+i+'3').value);
          document.getElementById('a'+i+'1').value = '0';
          document.getElementById('a'+i+'2').value = '0';
          document.getElementById('a'+i+'3').value = '0';
          k=i+1;

          
          if (k==6){
            k=1;
          }
          /* after every succesful process it adds 1 to the q ,
          q = 6 means every 5 process has been done successfully*/
          q = q + 1;
          break;
        }
      }
    }
  }
  
  /* this if-else checks for if the every process is finished or not. it will give alert for this
  if q equals 6 then it shows deadlock prevented or if q doesn't equals 6 the it 
  shows deadlock occured */
  if(q != 6){
    alert("Deadlock occurred!!");
  }
  else{
    alert("Deadlock has been prevented successfully!!");
  }
}

/*The time complexity of the Banker's algorithm as a 
function of the number n of processes and m of resources is o(n*n*m).*/