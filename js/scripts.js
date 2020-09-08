// Charge Table

$(document).ready( function () {
    $('#table_id').DataTable();
} );

$('#table_id').DataTable( {
    paging: false,
    searching: false,
    select: true
} );

$("input[type='text']").change(function(){
    $(this).closest('td').find("span").show().text($(this).val());
    $(this).hide();
});

$("input[type='time']").change(function(){
    $(this).closest('td').find("span").show().text($(this).val());
    $(this).hide();
});


$(".reset").click(function() {
    $(".answer").html("");  
    $("input").show();         
});

// Getting name based on registration 

var car1 = "Little White";
var car2 = "Little Grey";
var car3 = "The Tango";
var car4 = "The Gandalf";
var car5 = "Aqua";
var car6 = "Big Red";

var car_1_reg = "NP60UQQ";
var car_2_reg = "NP60UQS";
var car_3_reg = "NP60UQT";
var car_4_reg = "NP60UQU";
var car_5_reg = "NP60UQV";
var car_6_reg = "NP60UQW";

var reg = [car_1_reg,car_2_reg,car_3_reg,car_4_reg,car_5_reg,car_6_reg];

var car_name_1 = document.getElementById('car-1-name');
var car_1_charge = document.getElementById('car-1-charge-needed');
$(".confirm").click(function() {
    var car_reg_1 = $("#car-1-reg").val();
    var a =  parseInt(document.getElementById('car-1-cmra').textContent, 10);
    var b =  parseInt(document.getElementById('car-1-mtnc').textContent, 10);
    var miles = Math.ceil((b - a) / 44);  
    console.log(miles)
    if (car_reg_1 != car_1_reg) {
        car_name_1.innerText = 'Not a valid Registration';
        car_1_charge.textContent = "Please enter a valid registration";
    } else if (car_reg_1 = car_1_reg && ( isNaN(a) )) {
        car_name_1.textContent = car1;
        car_1_charge.textContent = "Please enter the current miles left";
    } else if (car_reg_1 = car_1_reg && ( isNaN(b) )) {
        car_name_1.textContent = car1;
        car_1_charge.textContent = "Please enter the miles needed";
    } else {
        car_name_1.textContent = car1;
        car_1_charge.textContent = miles;
	}
});

var car_name_2 = document.getElementById('car-2-name');
var car_2_charge = document.getElementById('car-2-charge-needed');
$(".confirm").click(function() {
    var car_reg_2 = $("#car-2-reg").val();
    var a =  parseInt(document.getElementById('car-2-cmra').textContent, 20);
    var b =  parseInt(document.getElementById('car-2-mtnc').textContent, 20);
    var miles = Math.ceil((b - a) / 44);  
    console.log(miles)
    if (car_reg_2 != car_2_reg) {
        car_name_2.innerText = 'Not a valid Registration';
        car_2_charge.textContent = "Please enter a valid registration";
    } else if (car_reg_2 = car_2_reg && ( isNaN(a) )) {
        car_name_2.textContent = car2;
        car_2_charge.textContent = "Please enter the current miles left";
    } else if (car_reg_2 = car_2_reg && ( isNaN(b) )) {
        car_name_2.textContent = car2;
        car_2_charge.textContent = "Please enter the miles needed";
    } else {
        car_name_2.textContent = car2;
        car_2_charge.textContent = miles;
	}
});

var car_name_3 = document.getElementById('car-3-name');
var car_3_charge = document.getElementById('car-3-charge-needed');
$(".confirm").click(function() {
    var car_reg_3 = $("#car-3-reg").val();
    var a =  parseInt(document.getElementById('car-3-cmra').textContent, 30);
    var b =  parseInt(document.getElementById('car-3-mtnc').textContent, 30);
    var miles = Math.ceil((b - a) / 44);  
    console.log(miles)
    if (car_reg_3 != car_3_reg) {
        car_name_3.innerText = 'Not a valid Registration';
        car_3_charge.textContent = "Please enter a valid registration";
    } else if (car_reg_3 = car_3_reg && ( isNaN(a) )) {
        car_name_3.textContent = car3;
        car_3_charge.textContent = "Please enter the current miles left";
    } else if (car_reg_3 = car_3_reg && ( isNaN(b) )) {
        car_name_3.textContent = car3;
        car_3_charge.textContent = "Please enter the miles needed";
    } else {
        car_name_3.textContent = car3;
        car_3_charge.textContent = miles;
	}
});

var car_name_4 = document.getElementById('car-4-name');
var car_4_charge = document.getElementById('car-4-charge-needed');
$(".confirm").click(function() {
    var car_reg_4 = $("#car-4-reg").val();
    var a =  parseInt(document.getElementById('car-4-cmra').textContent, 40);
    var b =  parseInt(document.getElementById('car-4-mtnc').textContent, 40);
    var miles = Math.ceil((b - a) / 44);  
    console.log(miles)
    if (car_reg_4 != car_4_reg) {
        car_name_4.innerText = 'Not a valid Registration';
        car_4_charge.textContent = "Please enter a valid registration";
    } else if (car_reg_4 = car_4_reg && ( isNaN(a) )) {
        car_name_4.textContent = car4;
        car_4_charge.textContent = "Please enter the current miles left";
    } else if (car_reg_4 = car_4_reg && ( isNaN(b) )) {
        car_name_4.textContent = car4;
        car_4_charge.textContent = "Please enter the miles needed";
    } else {
        car_name_4.textContent = car4;
        car_4_charge.textContent = miles;
	}
});

var car_name_5 = document.getElementById('car-5-name');
var car_5_charge = document.getElementById('car-5-charge-needed');
$(".confirm").click(function() {
    var car_reg_5 = $("#car-5-reg").val();
    var a =  parseInt(document.getElementById('car-5-cmra').textContent, 50);
    var b =  parseInt(document.getElementById('car-5-mtnc').textContent, 50);
    var miles = Math.ceil((b - a) / 44);  
    console.log(miles)
    if (car_reg_5 != car_5_reg) {
        car_name_5.innerText = 'Not a valid Registration';
        car_5_charge.textContent = "Please enter a valid registration";
    } else if (car_reg_5 = car_5_reg && ( isNaN(a) )) {
        car_name_5.textContent = car5;
        car_5_charge.textContent = "Please enter the current miles left";
    } else if (car_reg_5 = car_5_reg && ( isNaN(b) )) {
        car_name_5.textContent = car5;
        car_5_charge.textContent = "Please enter the miles needed";
    } else {
        car_name_5.textContent = car5;
        car_5_charge.textContent = miles;
	}
});

var car_name_6 = document.getElementById('car-6-name');
var car_6_charge = document.getElementById('car-6-charge-needed');
$(".confirm").click(function() {
    var car_reg_6 = $("#car-6-reg").val();
    var a =  parseInt(document.getElementById('car-6-cmra').textContent, 60);
    var b =  parseInt(document.getElementById('car-6-mtnc').textContent, 60);
    var miles = Math.ceil((b - a) / 44);  
    console.log(miles)
    if (car_reg_6 != car_6_reg) {
        car_name_6.innerText = 'Not a valid Registration';
        car_6_charge.textContent = "Please enter a valid registration";
    } else if (car_reg_6 = car_6_reg && ( isNaN(a) )) {
        car_name_6.textContent = car6;
        car_6_charge.textContent = "Please enter the current miles left";
    } else if (car_reg_6 = car_6_reg && ( isNaN(b) )) {
        car_name_6.textContent = car6;
        car_6_charge.textContent = "Please enter the miles needed";
    } else {
        car_name_6.textContent = car6;
        car_6_charge.textContent = miles;
	}
});


// Get leave time 

function leaveTime() {
    var timeLeaving = document.getElementsByClassName("ltime").value;
    alert(timeLeaving);
}

$(".confirm").click(function(){
    leaveTime;
});