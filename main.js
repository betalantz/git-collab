import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
   
    <h1>Hello Demo!</h1>
    
  </div>
`
const myButton = document.createElement('button')
myButton.innerText = "Click Me!"

myButton.style.backgroundColor = 'green'

document.querySelector('#app').append(myButton)
