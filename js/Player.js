class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        this.rank=0
    }

  //  geting the value of playerCount
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }
// updating  the value of playerCount

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
 // udating the name distance and score
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score,
            rank:this.rank
        });
    }

    // getting the players node information and 
    //adding that data in allPlayers
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
getFinishedPlayer(){
    var finished= database.ref('finishedPlayers').on("value",(data)=>{
     finishedplayer=data.val()
    })
}
   static updatefinishedPlr(){
       database.ref('/').update({
           finishedPlayers:finishedplayer+1

       })
this.rank=this.rank+1
       
   } 
}
