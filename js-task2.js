function findIp(){
    var str = prompt("Enter Ip", "");
    var regexp  = /\b^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]))$\b/
    if (regexp .test(str)) {
        alert(true);
    } else {
        alert(false);
    }
}

function findRgba(){
    var str = prompt("Enter RGBA", "");
    var regexp  =/[r][g][b][a]([(]([\d]{1}|[\d]{1}\.?[\d]{1}|[\d]{1}\.?[\d]{2}|[\d]{2}\.?[\d]{1}), ([\d]{1}|[\d]{1}\.?[\d]{1}|[\d]{1}\.?[\d]{2}|[\d]{2}\.?[\d]{1}), ([\d]{1}|[\d]{1}\.?[\d]{1}|[\d]{1}\.?[\d]{2}|[\d]{2}\.?[\d]{1}), (0{1}|1{1})[)])/
    if (regexp .test(str)) {
        alert(str);
    } else {
        alert(null);
    }
}

function findColour(){
    var str = prompt("Enter string w/o hex color", "");
    var regexp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    var result =  str.match(regexp);
    alert(result);
}

function findTag(){
    var mytag = prompt("Enter tag", "");
    var str = prompt("Enter string", "");
    var regexp = new RegExp("<"+ mytag +">", "g");
    var result =  str.match(regexp);
    alert(result);
}

function posNumbers(){
    var str = prompt("Enter numbers", "");
    var regexp = /(\+\d+(\.\d+)?)/g
    var result =  str.match(regexp);
    alert(result);
}

function findDates(){
    var str = prompt("Enter string w/o dates", "");
    var regexp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g
    var result =  str.match(regexp);
    alert(result);
}

findIp();
findRgba();
findTag();
posNumbers();
findDates();

