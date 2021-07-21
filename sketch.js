const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase;
var playerbase;
var player;
var computerPlayer;
var playerarcher;
var computerarcher;
var playerarrow;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   angle = -PI / 4;
computerbase=new ComputerBase(width-300,random(450,height-300),180,150);
playerbase=new PlayerBase(300,random(450,height-300),180,150);
player=new Player(285,playerbase.body.position.y-153,50,180);
computerPlayer=new ComputerPlayer(computerbase.body.position.x-10,computerbase.body.position.y-150,50,180);
playerarcher=new PlayerArcher(player.body.position.x-25,player.body.position.y-10,80,80,angle);
computerarcher=new ComputerArcher(computerPlayer.body.position.x-50,computerPlayer.body.position.y-25,80,80,angle);
playerarrow=new PlayerArrow(playerarcher.x,playerarcher.y,20,20)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
playerbase.display();
player.display();
computerPlayer.display();
playerarcher.display();
computerarcher.display();
playerarrow.display();
   //display Player and computerplayer
  if(keyCode === 32){
     
     playerarrow.shoot(playerarcher.body.angle);
  }

}
