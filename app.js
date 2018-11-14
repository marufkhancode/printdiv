function printData()
{
   var divToPrint=document.getElementById("printTable");
   newWin= window.open('');
   newWin.document.write('<html><head><title>Printing Reciept</title>');
   newWin.document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" media="all"/>');
   newWin.document.write('</head><body>');
   newWin.document.write(divToPrint.outerHTML);
   newWin.document.write('</body></html>');
   newWin.focus();
   setTimeout(function(){newWin.print();},1000);
   setTimeout(function(){newWin.close();},1000);
//    newWin.print();
//    newWin.close();
}
function myFunction(){
    printData();
}