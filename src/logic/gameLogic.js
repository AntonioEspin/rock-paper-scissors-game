export function gameLogic (userValue, computerValue) {

  const options = ['rock', 'paper', 'scissors']
  
  const valueUser = options.indexOf(userValue)
  const valueComputer = options.indexOf(computerValue)

  const result = (valueUser - valueComputer + 3) % 3

  if (result === 0) {
    return 'TIE'
  } else if (result === 1) {
    return 'YOU WIN'
  } else {
    return 'YOU LOST'
  }
}