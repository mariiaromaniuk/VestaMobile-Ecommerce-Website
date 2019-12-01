function setCookie(name,value,days)
{
	var x=new Date();
	x.setTime(x.getTime() + (days*24*60*60*1000));
	document.cookie=name+"="+value+ "; expires="+x.toGMTString()+"; path=/";
} 
function getCookie2(name)
{
	var x=document.cookie;
	var y=x.split("; ");
	for(var i=0; i<y.length;i++)
	{
		var z=y[i].split("=");
		if(name==z[0]) return z[1];
	}	
	return null;
}
function getCookie(name)
{
	var x=document.cookie;
	var y=x.split("; ");
	for(var i=0; i<y.length;i++)
	{
		var z=y[i].split("=");
		if(name==z[0]) return z[1];
	}	
	return null;
}
function getraw(){return document.cookie;}
