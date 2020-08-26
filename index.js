/***** Deliverable 1 *****/
  
const header = document.querySelector("#header");
console.log("Here's your header:", header);
            
/***** Deliverable 2 *****/

header.style.color = 'red'

/***** Deliverable 3 *****/

console.log("PLAYERS array looks like this:", PLAYERS)
let playerContainer = document.getElementsByClassName("player-container")[0];
    
for(let i = 0; i < array.length; i++) {

    let playerDiv = document.createElement('DIV')
    playerDiv.className = 'player'
    playerDiv.setAttribute('data-number',array[i].number)

    let playerInfo = `
    <h3>${array[i].name} (<em>${array[i].nickname}</em>)</h3>
    <img src= "${array[i].photo}">
    `

    playerDiv.innerHTML = playerInfo
    playerContainer.append(playerDiv)
};


/***** Deliverable 4 *****/

let playa = document.querySelector(`[data-number="7"]`)
playa.remove()
