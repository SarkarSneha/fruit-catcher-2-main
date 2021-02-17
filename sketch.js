var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var finishedplayer=0
var passedfinish

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  gamestate_2img=loadImage("images/gamestate 2.jpg")
  bronze=loadImage("images/bronze.png.png")
 gold=loadImage("images/gold.png")
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  
  if (playerCount === 2 && finishedplayer===0) {
    game.update(1);

  }

  if(gameState===2 && finishedplayer===2){
    game.displayrank()
    
  }
  if(finishedplayer===2){
    game.update(2)
  }
}