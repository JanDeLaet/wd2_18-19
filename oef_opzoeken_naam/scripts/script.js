function bel(elem){
  var naam = elem.parentElement.nextSibling.innerHTML;
  var telnr = elem.parentElement.nextSibling.nextSibling.innerHTML;

  console.log(naam);
  console.log(telnr);


  alert('We bellen ' + naam + ' (' + telnr + ')');
}

function addLetterAndFilterWerknemers(letter){

    var x = document.getElementById("zoekveld").value;

    if(letter=='&lt;'){
        x = x.substring(0,x.length-1);
        document.getElementById("zoekveld").value=x;
    }else if(letter=='SPACE'){
        document.getElementById("zoekveld").value=x + ' ';
    }
    else{
        document.getElementById("zoekveld").value=x + letter;
    }

    filterWerknemers(document.getElementById("zoekveld").value);
}

function filterWerknemers(str) {
    if (str.length==0) { 
      document.getElementById("resultaat").innerHTML="";
      return;
    }
    if (window.XMLHttpRequest) {
      xmlhttp=new XMLHttpRequest();
    } 
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        
        var werknemers=JSON.parse(this.responseText);
        
        //var x;
        var retString='';
        for (let werknemer of werknemers) {
        //for (x in werknemers) {
            retString+='<tr>';
            retString+='<td><button type="button" class="btn btn-default" onclick="bel(this)">Bel</button></td>';
            retString+='<td>' + werknemer['naam'] + '</td>';
            retString+='<td>' + werknemer['telefoon'] + '</td>';
            retString+='</tr>';
        }

        document.getElementById("resultaat").innerHTML=retString;
      }
    }
    xmlhttp.open("GET","filterwerknemers.php?q="+str,true);
    xmlhttp.send();
  }