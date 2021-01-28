var regss = [{
  "name": "NP60UQQ",
  "values": "Little White",
  "KwPh": 11
},
{
  "name": "NP60UQS",
  "values": "Little Blue",
  "KwPh": 11

},
{
  "name": "NP60UQT",
  "values": "The Tango",
  "KwPh": 11

},
{
  "name": "NP60UQU",
  "values": "The Gandalf",
  "KwPh": 11
},
{
  "name": "NP60UQV",
  "values": "Aqua",
  "KwPh": 11
},
{
  "name": "NP60UQW",
  "values": "Big Red",
  "KwPh": 11
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
var time = $(this).val().split(":")[0]; //get hrs
if ((time >= 7) && (time <= 16)) {
  $(this).closest('td').find("span").show().text($(this).val());
  $(this).hide();
} else {
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
    var miles = Math.ceil(parseInt(((mtnc - cmra) + (mtnc - cmra / 10)) / 44));
    $(this).find(".charge").text(miles);
  } else if (cmra == null || cmra == "") {
    $(this).find(".charge").text("Please enter the current miles left");
  } else if (mtnc == null || mtnc == "") {
    $(this).find(".charge").text("Please enter the mile to next charge");
  }
})
});

// generate schedule 
$(".generate").click(function() {
$("#table_id_2 tbody td").css({
  "background-color": ""
});

var new_array = []; //declare this
$("#table_id tbody tr").each(function(index) {
  var obj = {} //create object
  var car1_name = $(this).find(".name").text();
  var mtnc = $(this).find(".mtnc").val();
  var charges = $(this).find(".charge").text();
  var time_l = $(this).find('.time-c').val();
  var times = $(this).find('.time').val();
  var hrs_1 = time_l.split(":")[0] - 1;
  var hrs = times.split(":")[0] - 1;
  var leaves = parseInt(hrs - charges);

  var time_available = parseInt(hrs - hrs_1);
  var priority = parseInt(time_available / charges);
  //get all values passed in new arrays
  obj["car_name"] = car1_name
  obj["mtnc"] = mtnc
  obj["hrs"] = hrs
  obj["times"] = leaves
  obj["priority"] = priority;
  obj["leaves"] = times;
  new_array.push(obj)
});
//sort new arrays..
new_array.sort(function(a, b) {
  var x = parseInt(a["priority"]);
  var y = parseInt(b["priority"]);
  if (x != y) {
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  } else {
    var m = parseInt(a["leaves"]);
    var n = parseInt(b["leaves"]);
    return ((m < n) ? -1 : ((m > n) ? 1 : 0));
  }

});
console.log(new_array)
//loop through sorted array
$(new_array).each(function(index, value) {
  $("#table_id_2 tbody tr:eq(" + index + ")").each(function() {
    //add values to required tds..
    $(this).find("td:eq(0)").text(value.car_name);
    for (var i = value.hrs; i >= value.times; i--) {
      //add bg to that td
      $(this).find("td[value=" + i + "]").css({
        "background-color": "#00417b"
      });;
    }
    $(this).find(".exit").text(value.mtnc)
  });
})
});