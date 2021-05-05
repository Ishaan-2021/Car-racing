canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=120;
rover_height=70;
background_image="racing.jpg";
console.log("background img = "+background_image);
rover_image="car1.png";
rover_x=10;
rover_y=10;
car_width=120;
car_height=70;
car_image="car2.png";
car_x=10;
car_y=100;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
    car_imgTag=new Image();
    car_imgTag.onload=uploadrover;
    car_imgTag.src=car_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y, rover_width,rover_height);
    ctx.drawImage(car_imgTag,car_x,car_y, car_width,car_height);   
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="40")
{
   down();
   console.log("down");    
}
if(keyPressed=="38")
{
   up();
   console.log("up");    
}
if(keyPressed=="37")
{
   left();
   console.log("left");    
}
if(keyPressed=="39")
{
   right();
   console.log("right");    
}
if(keyPressed=="87")
{
   car2up();
   console.log("car2up");    
}
if(keyPressed=="83")
{
   car2down();
   console.log("car2down");    
}
if(keyPressed=="65")
{
   car2left();
   console.log("car2left");    
}
if(keyPressed=="68")
{
   car2right();
   console.log("car2right");    
}
if(rover_x>700)
{
console.log("car1 won");
document.getElementById("game_status").innerHTML="car 1 won!";  
}
if(car_x>700)
{
console.log("car2 won");
document.getElementById("game_status").innerHTML="car 2 won!";  
}
}
function up(){
   if(rover_y>=0)
   {
      rover_y=rover_y-10;
      console.log("when up arrow pressed ,x= "+rover_x+" y= "+rover_y );
      uploadBackground();
      uploadrover(); 
   }
}
function down(){
   if(rover_y<=500)
   {
      rover_y=rover_y+10;
      console.log("when down arrow pressed ,x= "+rover_x+" y= "+rover_y );
      uploadBackground();
      uploadrover(); 
   }
}
function left(){
   if(rover_x>=0)
   {
      rover_x=rover_x-10;
      console.log("when left arrow pressed ,x= "+rover_x+" y= "+rover_y );
      uploadBackground();
      uploadrover(); 
   }
}
function right(){
   if(rover_x<=700)
   {
      rover_x=rover_x+10;
      console.log("when right arrow pressed ,x= "+rover_x+" y= "+rover_y );
      uploadBackground();
      uploadrover(); 
   }
}
function car2up(){
   if(car_y>=100)
   {
      car_y=car_y-10;
      console.log("when up arrow pressed ,x= "+car_x+" y= "+car_y );
      uploadBackground();
      uploadrover(); 
   }
}
function car2down(){
   if(car_y<=500)
   {
      car_y=car_y+10;
      console.log("when down arrow pressed ,x= "+car_x+" y= "+car_y );
      uploadBackground();
      uploadrover(); 
   }
}
function car2left(){
   if(car_x>=0)
   {
      car_x=car_x-10;
      console.log("when left arrow pressed ,x= "+car_x+" y= "+car_y );
      uploadBackground();
      uploadrover(); 
   }
}
function car2right(){
   if(car_x<=700)
   {
      car_x=car_x+10;
      console.log("when right arrow pressed ,x= "+car_x+" y= "+car_y );
      uploadBackground();
      uploadrover(); 
   }
}
