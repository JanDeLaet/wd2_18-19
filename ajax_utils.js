/*
SOURCE:
https://www.w3schools.com/php/php_ajax_php.asp
*/

function doe_iets(str) {
alert(str);
    // if (str.length == 0) { 
    //     document.getElementById("txtHint").innerHTML = "";
    //     return;
    // } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "backend.php?inputKey=" + str, true);
    xmlhttp.send();
    // }
}