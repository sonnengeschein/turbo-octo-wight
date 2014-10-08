var tatort = new Date (2014,9,8,21,16);

function dauer()
{
jetzt = new Date();
a = new Date (tatort-jetzt);
zeit = Math.round(a.getTime()/1000);
return zeit;
}
