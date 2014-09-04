if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","http://fisherdigital.org/cd_catalog.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

document.write("<div>");
var x=xmlDoc.getElementsByTagName("CD");
for (i=0;i<x.length;i++)
  { 
  document.write("<li><div><img src='http://localhost:3000/dist/img/hometownmkt-logo2.png'>");

  document.write(x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
  document.write("</div><div>");

  document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
  document.write("</div></li>");
  }
document.write("</div>");
    }