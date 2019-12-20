var saveButtonElement = document.getElementById("saveButton")
var modelBodyElement = document.getElementsByClassName("modal-body")[0]
var firstButtonElement = document.getElementById("dataEntryButton")
var scoreCardElement = document.getElementById("scoreCard")
var maxScoreElement = document.getElementById("maxScoreSpan")
var playerOneNameElements = document.getElementsByClassName("p1Name")
var playerTwoNameElements = document.getElementsByClassName("p2Name")
var playerOneScoreElement = document.getElementById("p1Score")
var playerTwoScoreElement = document.getElementById("p2Score")
var playerOneButtonElement = document.getElementById("p1Buton")
var playerTwoButtonElement = document.getElementById("p2Buton")
var resetButtonElement = document.getElementById("resetButon")
var playerOneScoreAndNameElement = document.getElementById("playerOneDetail")

//trying something new
var stringToPass = '<form>'+
'                            <div class="form-row">'+
'                                <div class="col">'+
'                                    <input id="playerOneName" type="text" class="form-control"'+
'                                        placeholder="Player One Name">'+
'                                </div>'+
'                                <div class="col">'+
'                                    <input id="playerTwoName" type="text" class="form-control"'+
'                                        placeholder="Player Two Name">'+
'                                </div>'+
'                            </div>'+
'                            <br>'+
'                            <div class="form-row">'+
'                                <div class="col">'+
'                                    <label id="maxScore">Maxium Score : </label>'+
'                                </div>'+
'                                <div class="col">'+
'                                    <input id="maxScoreElement" type="number" class="form-control"'+
'                                        placeholder="Enter A Number">'+
'                                </div>'+
''+
'                            </div>'+
'                        </form>';
	


//variables global
var firstNameElementValue=""
var secondNameElementValue=""
var maxScoreInput=0
var playerOneScore=0
var playerTwoScore=0

function firstClick(){
    modelBodyElement.innerHTML=stringToPass
    if(scoreCardElement.className==="statusVisible"){
        scoreCardElement.classList.remove("statusVisible")
    }
    scoreCardElement.classList.add("statusHidden")
}

function saveButtonAction() {
   //get values
    firstNameElementValue = document.getElementById("playerOneName").value
    secondNameElementValue = document.getElementById("playerTwoName").value
    maxScoreInput = document.getElementById("maxScoreElement").valueAsNumber

    //other score
    playerOneScore=0;
    playerTwoScore=0;

    //close button clicking
    document.getElementById("closeButton").click()

    if(maxScoreInput>0 && (maxScoreInput%2===0 || maxScoreInput%2===1)){
        scoreCardElement.classList.remove("statusHidden")
        scoreCardElement.classList.add("statusVisible")
        maxScoreElement.innerText=maxScoreInput
        playerOneScoreElement.innerText=playerOneScore
        playerTwoScoreElement.innerText=playerTwoScore
        for(var i = 0 ; i < playerOneNameElements.length;i++){
            playerOneNameElements[i].innerText=firstNameElementValue
            playerTwoNameElements[i].innerText=secondNameElementValue
        }
    }else{
        alert("ENTER A NATURAL NUMBER , GREATER THEN 0 and TRY AGAIN.")
    }

  

}

function returnTrueOrFalse(){
    if(playerOneScore<maxScoreInput && playerTwoScore<maxScoreInput){
        return true
    }else{
        return false
    }
}



function winnerMethod(name){
   alert('WINNER IS *** '+name+' *** !!!\n'+'Click Reset For Same Players and Same Score.\nElse Click On Enter Data.')
}


firstButtonElement.addEventListener("click",firstClick)

saveButtonElement.addEventListener("click", saveButtonAction)

playerOneButtonElement.addEventListener("click",function () {
    if(returnTrueOrFalse()){
    playerOneScore++
    playerOneScoreElement.innerText=playerOneScore
    }
    
    if(playerOneScore===maxScoreInput){
        winnerMethod(firstNameElementValue)
    }
})

playerTwoButtonElement.addEventListener("click",function () {
    if(returnTrueOrFalse()){
    playerTwoScore++
    playerTwoScoreElement.innerText=playerTwoScore
    }
    
    if(playerTwoScore===maxScoreInput){
        winnerMethod(secondNameElementValue)
    }
})

resetButtonElement.addEventListener("click",function () {
    playerOneScore=0
    playerTwoScore=0
    playerOneScoreElement.innerText=playerOneScore
    playerTwoScoreElement.innerText=playerTwoScore
})
