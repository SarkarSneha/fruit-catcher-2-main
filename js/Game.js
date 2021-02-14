class Game {
    constructor() {

    }
    // getting value of the gameState
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }
    //function for updateing the gamestate
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    //initial starting
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        //    creating player1 and player2 sprites
        player1 = createSprite(200, 500);
        player1.addImage(player_img);
        

        player2 = createSprite(800, 500);
        player2.addImage( player_img);
        //including the players sprites in an array
        players = [player1, player2];
    }

    //function play

    play() {

     
// hiding the form when the play function is called
        form.hide();

// calling of the function with class name from player.js
        Player.getPlayerInfo();
        player.getFinishedPlayer()
        // adding the background image 
        image(back_img, 0, 0, 1000, 800);
        var x = 100;
        var y = 200;
        var index = 0;

    
        //predifined function of drawing the sprites
        drawSprites();

        //x and y value
        for (var plr in allPlayers) {

            index = index + 1;
            

            x = 600 - allPlayers[plr].distance;
            y = 500;

            players[index - 1].x = x;
            players[index - 1].y = y;

            //displaying name on to their baskets
            if (index === player.index) {
                fill("black");
                textSize(25);
                strokeWeight(3)
                text(allPlayers[plr].name, x - 30, y + 30);
            }
         textSize(25)
         fill("white")
        text(allPlayers.player1.name + " "+allPlayers.player1.score,50,50)
        text(allPlayers.player2.name + " "+allPlayers.player2.score,50,100)

        }


//moving the basket right and left with the arrow keys
        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }

      

        //spawning the fruits
        if (frameCount % 20 === 0) {
            fruits = createSprite(random(100, 1000), 0, 100, 100);
            fruits.velocityY = 7;
            var ran = Math.round(random(1, 5));
            switch (ran) {
                case 1: fruits.addImage( fruit1_img);
                    break;
                case 2: fruits.addImage( fruit2_img);
                    break;
                case 3: fruits.addImage( fruit3_img);
                    break;
                case 4: fruits.addImage( fruit4_img);
                    break;
                case 5: fruits.addImage(fruit5_img);
                    break;
            }
           // adding the fruits in the fruit group
            fruitGroup.add(fruits);

        }

       // destroying the fruits and updating score
      if(player.index !== null){
       for (var i = 0; i < fruitGroup.length; i++){
if( fruitGroup.get(i).isTouching (players)){
    fruitGroup.get(i).destroy();
    player.score= player.score+1
    player.update();
}

}
}


}
end(){
    game.update(2)
    clear()
    background(gamestate_2img)
    fill("white")
    textSize(40)
    text("Basket Is Full",200,300-50)
    textSize(30)
    text("Go Home",200,300+40-50)
   
}


}
