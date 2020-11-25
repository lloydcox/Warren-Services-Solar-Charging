var regss = [{
  "name": "NP60UQQ",
  "values": "Little White"
},
{
  "name": "NP60UQS",
  "values": "Little Blue"
},
{
  "name": "NP60UQT",
  "values": "The Tango"
},
{
  "name": "NP60UQU",
  "values": "The Gandalf"
},
{
  "name": "NP60UQV",
  "values": "Aqua"
},
{
  "name": "NP60UQW",
  "values": "Big Red"
}
]

$(document).ready(function() {
$('#table_id').DataTable();
});

$('#table_id').DataTable({
paging: false,
searching: false,
select: true
});


$("select").change(function() {
var regs = $(this).val().toUpperCase();

if ($(this).hasClass("reg")) {
  var cars_name = $(regss)
    .filter(function(i, n) {
      return n.name === regs;
      
    });
  if (cars_name.length > 0) {
    $(this).closest("tr").find(".name").text(cars_name[0].values)
    $(this).closest('td').find("span").show().text($(this).val());
    $(this).hide();

  } else {
    $(this).closest("tr").find(".name").text("Not a valid Registration")
  }
}    
});

$("input[type='time']").change(function() {
  var time = $(this).val().split(":")[0];//get hrs
  console.log( $(this).val().split(":")[0]);
  //check hrs if grater then or lss then or not
  if((time >= 7) && (time <= 16)){
   $(this).closest('td').find("span").show().text($(this).val());
    $(this).hide();  
  }else{
  //show error 
   alert("Please enter time below 16:00 and greater the 07:00");
  }
});


$(".reset").click(function() {
$(".answer").html("");
$("input").show();
$("select").show();

});

$(".confirm").click(function() {

    $("#table_id tbody tr").each(function() {
      if ($(this).find(".reg").val() == "") {
      $(this).find(".name").text("Please enter valid Registration");
  }
  var cmra = $(this).find(".cmr").val();
  var mtnc = $(this).find(".mtnc").val();
  if ((cmra != null && cmra != "") && (mtnc != null && mtnc != "")) {
    var miles = Math.ceil((parseInt(mtnc - cmra)) / 44);
    $(this).find(".charge").text(miles);
  } else if (cmra == null || cmra == "") {
    $(this).find(".charge").text("Please enter the current miles left");
  } else if (mtnc == null || mtnc == "") {
    $(this).find(".charge").text("Please enter the mile to next charge");
  }
}) 
});

$(".generate").click(function() {
var count = 0;//for second table
//remove any bg color in td
$("#table_id_2 tbody td").css({
  "background-color": ""
});
//loop through first table to get datas
$("#table_id tbody tr").each(function() {
//get required datas
  var car1_name = $(this).find(".name").text();
  var mtnc = $(this).find(".mtnc").val();
  var charges = $(this).find(".charge").text();
  var times = $(this).find('.time').val();
//get hours i.e : 11:30 so take "11"
  var hrs = times.split(":")[0]-1;
 //get leaves
  var leaves = parseInt(hrs - charges);
  //loop through second table starting from tr eq 0
   $("#table_id_2 tbody tr:eq(" + count + ")").each(function() {
    $(this).find("td:eq(0)").text(car1_name);//set car_name
//if hrs = 11 and leaves = 2 so loop from 11 -10-9-8..
    for (var i = hrs; i > leaves; i--) {
    //add bg to that td
      $(this).find("td[value=" + i + "]").css({
        "background-color": "#00417b"
      });;
    }
    // add exit miles 
    $(this).find(".exit").text(mtnc)
  });
  count++;//increment to go to next tr 
})
});

// Drop Down 

$('select').val(2);

$(function() {
  $('.dropdown').change(function() {
    dropdownval = $(this).val();
    $('.dropdown').not(this).find('option[value="' + dropdownval + '"]').remove();
  });
});





  