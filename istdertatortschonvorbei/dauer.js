var tatort = new Date (2014,9,9,21,16);

function dauer()
{
	jetzt = new Date();
	a = new Date (tatort-jetzt);
	zeit = Math.round(a.getTime()/1000);
	return zeit;
}

function decision()
{
	//document.getElementById("debug").innerHTML = dauer();
	if (dauer() > 0)
	{
		countdowntill(dauer(),'cID4');
	}
	if (dauer() < -1,5*60*60)
	{
		document.getElementById("textfield").innerHTML = "JA!";
	}
	else
	{
		countdownwhile(dauer()+(1.5*60*60),'cID4');
	}
}
