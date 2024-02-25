var answerPattles = [];
var userPattles = [];
var allColor=["green","red","yellow","blue"];
var userAnswer
var checkUser
var checkAnswer

function initGame(){
    answerPattles = []
    userPattles = []
    allColor=["green","red","yellow","blue"];
    rndColor = 0

$(document).keypress(function(e){
    if(e){
        $(document).off("keypress")
        gameStart();
    }
});
}

function gameOver(){
    $("h1").text("Game Overm Press Any Key to Restart");
    $("body").addClass("game-over");
    /* var wrong = new Audio('sounds/wrong.mp3');
    wrong.play(); */
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
    initGame()
};

function gameStart(){

    var level = answerPattles.length + 1;
    $("h1").text("Level " + level)
    var rndColor=Math.floor(Math.random()*allColor.length);

    answerPattles.push(allColor[rndColor]);

    $(".btn" + "." + allColor[rndColor]).fadeOut(100);
    $(".btn" + "." + allColor[rndColor]).fadeIn(100);

    checkState();
}

function checkState(){
    $(".btn").click(function(){
        $(".btn").off("click")
        $(this).addClass("pressed");
        setTimeout(() => {
            $(this).removeClass("pressed");
        }, 100);
        
        userAnswer = $(this).attr("id");
        userPattles.push(userAnswer);

        compareArr()
    });
}

function compareArr(){
    
    
    checkAnswer = answerPattles.length;
    checkUser = userPattles.length;

    /* console.log(userPattles.length);
    console.log(answerPattles.length);
    console.log(userPattles[checkUser-1]);
    console.log(answerPattles[checkAnswer-1]); */
    
    for (var cntArr = 0;cntArr<=answerPattles.length;cntArr++){
            console.log(cntArr)
            console.log(userAnswer)
        if(answerPattles[cntArr] === userAnswer){
            console.log("YES CORRECT");
            gameStart()
        }else{
            console.log("NO INCORRECT");
            gameOver()
        }

    }
    
}

initGame()
