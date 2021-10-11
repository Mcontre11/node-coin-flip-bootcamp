document.getElementById('tails').addEventListener('click', function(){
  fetch("/api")
  // javas script object notation is a text trasnfer notation 
      .then(res => res.json())
      .then(data => {
          console.log(data)
          let result = data.result
          if (result === 1) {
              document.querySelector('h2').textContent = "You Win"
          }
          else {
              document.querySelector('h2').textContent = "You Lose"
          }
      })
})

document.getElementById('heads').addEventListener('click', function () {
  fetch("/api")
      .then(res => res.json())
      .then(data => {
          let result = data.result
          if (result === 0) {
              document.querySelector('h2').textContent = "You Win"
          }
          else {
              document.querySelector('h2').textContent = "You Lose"
          }
      })
})