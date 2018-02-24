src=document.getElementsByTagName('script')[0].innerHTML.toUpperCase().replace(/\W/g,'');
height=a.height;
width=a.width;
size=Math.floor(Math.sqrt(Math.floor(height*width/src.length)))-2;
nperline=Math.floor(width/size);
console.log(size);
//FINE variabili utili
c.font = size+"px Courier";
c.strokeStyle="Black";
setInterval(run, 33);
window.addEventListener('keyup',keyUp,false);
function run()
{
c.fillStyle="Silver";
c.fillRect(0,0,width,height);
c.fillStyle="Black";
i=0;
while(src.length-i>0)
{
  c.save();
  c.translate(width-size*(i%nperline+1),height-size*(Math.floor(i/nperline)));
  c.beginPath();
  c.moveTo(0,0);
  c.lineTo(0,-size);
  c.lineTo(size,-size);
  c.lineTo(size,0);
  c.lineTo(0,0);
  c.stroke();
  //c.fillText(src[src.length-i-1],width-size*(i%nperline),height-size*(Math.floor(i/nperline)));
  c.fillText(src[src.length-i-1],size/10,-size/5);
  i++;
  c.restore();
}
if(src.length==0)
{
  c.fillStyle="Green";
  c.fillRect(0,0,width,height);
}
}
function keyUp(e) {
if(src[0].charCodeAt()==e.keyCode)
  src=src.substr(1);
}