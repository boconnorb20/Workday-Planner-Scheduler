$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
$(".saveBtn").on("click",function(){
    var input = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(input,time)
})
$("#hour-7 .description").val(localStorage.getItem("hour-7"))

function timeCheck() {
    var currentTime= moment().hours()
    $(".time-block").each(function(){
        var compareTime= parseInt($(this).attr("id").split("-")[1])
        if (currentTime === compareTime){
            $(this).addClass("present")
        } else if (currentTime > compareTime){
            $(this).removeClass("present")
            $(this).addClass("future")
        } else {
            $(this).removeClass("present")
            $(this).removeClass("future")
            $(this).addClass("past")
        }

    })

}
timeCheck()

let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;
let timeNow;

const hour1 = $('#time7').text();
const hour2 = $('#time8').text();
const hour3 = $('#time9').text();
const hour4 = $('#time10').text();
const hour5 = $('#time11').text();
const hour6 = $('#time12').text();
const hour7 = $('#time1').text();
const hour8 = $('#time2').text();
const hour9 = $('#time3').text();
const hour10 = $('#time4').text();
const hour11 = $('#time5').text();

const hour1Int = parseInt(hour1);
const hour2Int = parseInt(hour2);
const hour3Int = parseInt(hour3);
const hour4Int = parseInt(hour4);
const hour5Int = parseInt(hour5);
const hour6Int = parseInt(hour6);
const hour7Int = parseInt(hour7);
const hour8Int = parseInt(hour8);
const hour9Int = parseInt(hour9);
const hour10Int = parseInt(hour10);
const hour11Int = parseInt(hour11);

/* Getting info into Local Storage
* - trying to find ways to shorten code, stumped 
* - thought about adding additional hours, but then just adds to lengthy code
*/

$('#btn1').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }

  const hour1String = JSON.stringify(hour1);
  
  localStorage.setItem(hour1, $('#text7').val());
});

$('#btn2').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }

  const hour2String = JSON.stringify(hour2);

  localStorage.setItem(hour2, $('#text8').val());
});

$('#btn3').click(function() {
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }

  const hour3String = JSON.stringify(hour3);

  localStorage.setItem(hour3, $('#text9').val());
});

$('#btn4').click(function() {
  if($('#text10').val()) {
    localStorage.removeItem('text10');
  }

  const hour4String = JSON.stringify(hour4);

  localStorage.setItem(hour4, $('#text10').val());
});

$('#btn5').click(function() {
  if($('#text11').val()) {
    localStorage.removeItem('text11');
  }

  const hour5String = JSON.stringify(hour5);

  localStorage.setItem(hour5, $('#text11').val());
});

$('#btn6').click(function() {
  if($('#text12').val()) {
    localStorage.removeItem('text12');
  }

  const hour6String = JSON.stringify(hour6);

  localStorage.setItem(hour6, $('#text12').val());
});

$('#btn7').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }

  const hour7String = JSON.stringify(hour7);

  localStorage.setItem(hour7, $('#text1').val());
})

$('#btn8').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }

  const hour8String = JSON.stringify(hour8);

  localStorage.setItem(hour8, $('#text2').val());
})

$('#btn9').click(function() { 
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }

  const hour9String = JSON.stringify(hour9);

  localStorage.setItem(hour9, $('#text3').val());
})

$('#btn10').click(function() { 
    if($('#text4').val()) {
      localStorage.removeItem('text4');
    }
  
    const hour10String = JSON.stringify(hour10);
  
    localStorage.setItem(hour10, $('#text4').val());
  })

  $('#btn11').click(function() { 
    if($('#text5').val()) {
      localStorage.removeItem('text5');
    }
  
    const hour11String = JSON.stringify(hour11);
  
    localStorage.setItem(hour11, $('#text5').val());
  })

// Display the time using moment.js

$('#currentDay').append(timeNow);

// setting up function to have colors indicating if time is the past, present or future

colorCoding();

function colorCoding() {

  Timer = setInterval(colorCoding, 1000);
  
  if(hourNow24 >= 11 && hourNow24 <= 12) {

    for (let i =1; i <=11 ; i++) { 
     let hourInInt = parseInt($('#time'+i).text());

      if (hourInInt < 11) {
        hourInInt = hourInInt + 12;
      }
      
      if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', '#f9512e');
        continue;
      }
      
      if (hourInInt < hourNow24) {
        $('#text'+i).css('background-color', 'lightgray');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'light blue');
  }
}