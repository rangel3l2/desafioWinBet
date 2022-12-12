
import { layout } from "./data.js"

//global variables
const container = document.querySelector('.container')
const container_bet = document.createElement('div')
container_bet.classList.add('container-bet')
container.appendChild(container_bet)

let clickedContent = []


const JsonData =

    {
        "game": "brazilXcroacia",
        "winBet": "",
        "gol1Bet": "",
        "gol2Bet": "",
        "winner1Bet": "",
        "winner2Bet": "",
        "valueBet": null
    }


main()
function main(){
    createHeader()
    createPanel()
    createWinBet()
    createAnotherBets()
    createEndBet()
    footer()
   
   
}
// function to create header html
function createHeader(){
    const header = document.createElement('div')
    header.classList.add('header')
    container_bet.appendChild(header)
    const logo = document.createElement('img')
    header.appendChild(logo)
    logo.setAttribute('src','Assets/img/Logo.png')
}
//panel with game showing
function createPanel(){
    const panel = document.createElement('div')
    panel.classList.add('panel')
    container_bet.appendChild(panel)
    const titlePanel = document.createElement('span')
    titlePanel.classList.add('title-panel')
    const subTitle = document.createElement('p')

    panel.append(titlePanel, subTitle)
    titlePanel.innerText = layout.titlePanel
    subTitle.innerText = layout.subTitlePanel
    subTitle.classList.add('gameSubtitle')
    createGame(panel)
}
function createGame(panel){


    const game = document.createElement('div')
    panel.append(game)
    game.classList.add('game')
    let gameTitleSplited =layout.gameTitle.split('X')

    //----------------------------------------------------------------
    const squareTeam = document.createElement('div')
    squareTeam.classList.add('squareTeam')
    const DivX = document.createElement('div')
    for(let i = 0;i<2;i++){
        const divGameName = document.createElement('div')
        divGameName.classList.add('divGameName')
        const divGameImg = document.createElement('div')
        const gameName  = document.createElement('span')
        gameName.classList.add('gameName')
        gameName.innerText =  gameTitleSplited[i]
        const gameSubtitle = document.createElement('p')
        gameSubtitle.innerText = layout.gameSubtitle[i]
        gameSubtitle.classList.add('gameSubtitle')
        const gameImg = document.createElement('img')
        gameImg.setAttribute('src', `${layout.imageGameURL[i]}`)
        gameImg.id = 'firstGameImg'      
        game.append(squareTeam)
        if(i==0){      
       
            const X = document.createElement('p')
             X.innerText = 'X'
            
             DivX.append(X) 
             divGameImg.append(gameImg)
             divGameName.append(gameName,gameSubtitle)          
             squareTeam.append(divGameName,divGameImg,DivX)
        }
      
        if (i == 1){

           
            divGameImg.append(gameImg)
            divGameName.append(gameName,gameSubtitle)
            squareTeam.append(divGameImg,divGameName) 
        }
       
    }
    const gameDateTime = document.createElement('p')
    gameDateTime.innerText = layout.gameDataTime
    gameDateTime.classList.add('gameSubtitle')
    gameDateTime.classList.add('gameDateTime')
    game.append(gameDateTime)
    
    //----------------------------------------------------------------

    
}
function createWinBet(){
    const panel = document.querySelector('.panel')
    const winBet = document.createElement('div')
    winBet.classList.add('winBet')
    const winBetTitle = document.createElement('span')
    winBetTitle.innerText = layout.winBetTitle
    panel.append(winBetTitle)
    createCard(layout.winBetContent,3,layout.winBetTitleSelectors, layout.winBetContentSelectors, )

}

function createCard(titleCardText,qtdSelectors, titleSelectorN, contentSelectorText){
    const card = document.createElement('div')
    card.classList.add('card')
    const titleCardContainer = document.createElement('div') 
    const titleCard = document.createElement('p')
    titleCard.classList.add('TitleCard')
    titleCard.innerText = titleCardText 
    card.appendChild(titleCard)
   
    let squareArray= []
    let titleSquareArray = []
    for(let i = 0;i < qtdSelectors; i ++){
    
       

        const squareSelectorContainer = document.createElement('div')
        squareSelectorContainer.classList.add('squareSelectorContainer')
        const titleSelector = document.createElement('p')
        titleSelector.innerText = titleSelectorN[i]
        titleSelector.classList.add('titleSelector')
        var squareSelector = document.createElement('div')        
        squareSelector.classList.add('squareSelector')
        const contentSelector = document.createElement('p')
        contentSelector.classList.add('contentSelector')
        contentSelector.innerText = contentSelectorText[i]
        titleSelector.classList.add('gameSubtitle')
       
        //----------------------------------------------------------------
        squareSelector.append(contentSelector)
        squareSelectorContainer.append(titleSelector, squareSelector)
        card.append(squareSelectorContainer )
        container_bet.append(card)

        //----------------------------------------------------------------
          //events
         
        squareArray.push(squareSelector)
        titleSquareArray.push(titleSelector.innerText)

}
        
     clickedSquareSelector(squareArray, titleSquareArray) 
   
}
function createAnotherBets(){
    const winBet = document.createElement('div')
    winBet.classList.add('winBet')
    const winBetTitle = document.createElement('span')
    winBetTitle.innerText = layout.gol1betTitle
    container_bet.append(winBetTitle)
   
    createCard(layout.gol1betCardTitle,2,layout.gol1betTitleSelector, layout.gol1betContentSelector)

    createCard(layout.gol2betCardTitle,2,layout.gol2betTitleSelector, layout.gol2betContentSelector )

    createCard(layout.winner1BetTitle,3,layout.winBetTitleSelectors, layout.winBetContentSelectors)

    createCard(layout.winner2BetTitle,3,layout.winner2BetTitleSelector, layout.winner1BetContentSelector)
    
    
    

} 

function createEndBet(){
    //titleBet 
    const winBet = document.createElement('div')
    winBet.classList.add('winBet')
    const winBetTitle = document.createElement('span')
    winBetTitle.innerText = layout.valueBetTitle
    //contentBet
    container_bet.append(winBetTitle)
    const endBet = document.createElement('div')
    endBet.classList.add('endBet')
    const containerBetValue = document.createElement('div')
    containerBetValue.classList.add('containerBetValue')
    const betValueTitle = document.createElement('p')
    betValueTitle.innerText = layout.valueBetContentTitle
    betValueTitle.classList.add('titleSelector','gameSubtitle','betValueTitle')    
    const betValue = document.createElement('div')
    betValue.classList.add('betValue')
    const contentBetValue = document.createElement('div')
    contentBetValue.innerHTML = '<span>R$</span>'
    contentBetValue.classList.add('contentBetValue')
    const inputTextValue = document.createElement('input')
    contentBetValue.append(inputTextValue)
    inputTextValue.classList.add('inputTextValue')
    inputTextValue.setAttribute('placeholder', 'Valor')
    const buttomEndBet = document.createElement('button')
    buttomEndBet.classList.add('buttomEndBet')
    buttomEndBet.innerHTML = layout.valueBetTitle
    buttomEndBet.addEventListener('click', function(){
        
        console.log(JSON.stringify(JsonData))
    })

   
    inputTextValue.addEventListener('change', ()=>{
        JsonData.valueBet = parseInt(inputTextValue.value)
    })
    //-------------------------------------------------------
    betValue.append(contentBetValue)
    containerBetValue.append(betValueTitle,betValue)    
    endBet.append(containerBetValue, buttomEndBet)
    container_bet.appendChild(endBet)

}

function clickedSquareSelector (squareArray, titleSquareArray){
  
    let verifyClick = [false,false,false]
    squareArray.map((item, i)=>{
        item.addEventListener("click",()=>{
        if(verifyClick[0]==false || verifyClick[1]== false  || verifyClick[2]==false){
           
          
            item.style.border = '2px solid #90ff81 '
            clickedContent.push(item.parentNode.firstChild.innerText)
          
        }
        verifyClick[0] = true    
        verifyClick[1] = true
        verifyClick[2] = true 

        JsonData.winBet = clickedContent[0]
        JsonData.gol1Bet = clickedContent[1]
        JsonData.gol2Bet = clickedContent[2]
        JsonData.winner1Bet = clickedContent[3]
        JsonData.winner2Bet = clickedContent[4]   
  
   
    })
})
 
}
function footer(){
    const footer = document.createElement('div')
    footer.classList.add('footer')   
    container_bet.append(footer)
}



