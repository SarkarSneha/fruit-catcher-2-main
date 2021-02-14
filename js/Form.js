class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.reset = createButton('PLAY AGAIN ');
       this.greeting = createElement('h1');
       this.title = createElement('h1');
       
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(499, 30);
        this.title.style('color', 'violet');
        this.input.position(550,400);
        this.input.style('background', 'lavender');
        this.button.position(560,500);
    
        this.button.style('background', 'lightpink');
     

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello !" + player.name)
            this.greeting.position(500,400);
            this.greeting.style('color', 'yellow');
           


        });

   
    this.reset.style('background', 'lavender');
    this.reset.position(700,200);
        this.reset.mousePressed(() => {
         player.updateCount(0)
         game.update(0)
         database.ref('/').update({
            players:null

         })
        });
        
    }
}