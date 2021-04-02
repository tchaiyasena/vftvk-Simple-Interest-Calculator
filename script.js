function compute()
{
    thePrincipal = document.getElementById("principal").value;
    theRate = document.getElementById("rate").value;
    theYears = document.getElementById("years").value;
    if (thePrincipal=="" || thePrincipal < 1)
    {
    	alert("Enter a positive number");
    	document.getElementById("principal").focus();
    	return;
    }
    interest = thePrincipal*theYears*theRate/100.0;
    d = new Date();
    endYear = d.getFullYear()+parseInt(theYears);
    document.getElementById("result").innerHTML
    			='<pre>If you deposit <b class="result">'
    				+thePrincipal+"</b>"
    				+"\nat an interest rate of <b class=result>"
    				+theRate+"%</b>."
    				+"\nYou will receive an amount <b class=result>"
    				+interest+"</b>,"
    				+"\nin the year <b class=result>"+endYear
    				+"</b></pre>";
}
function showRate(newValue)
{
	document.getElementById("rateValue").innerHTML=newValue+"%";
}
function clearResults()
{
	document.getElementById("result").innerHTML="";
}
//function clearResults()
//{
//	document.getElementById("line1").innerHTML="";
//	document.getElementById("line2").innerHTML="";
//	document.getElementById("line3").innerHTML="";
//	document.getElementById("line4").innerHTML="";	
//}