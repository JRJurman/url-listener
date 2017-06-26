const urlListener = require('../../dist/url-listener')

// set the inital value of event_calls to 0
if (localStorage.getItem('event_calls') === null) {
  localStorage.setItem('event_calls', 0)
}

// set up the listener, which increments the event_calls value
urlListener(event => {
  const calls = parseInt(localStorage.getItem('event_calls'), 10)
  localStorage.setItem('event_calls', calls+1)
})

// set up some buttons to help us mutate the state of the window
const clearButton = document.createElement('button')
clearButton.id = 'clear-button'
clearButton.onclick = () => {
  localStorage.setItem('event_calls', 0)
}
document.body.appendChild(clearButton)

const hashButton = document.createElement('button')
hashButton.id = 'hash-button'
hashButton.onclick = () => {
  window.location.hash = 'hash-value'
}
document.body.appendChild(hashButton)

const pushStateButton = document.createElement('button')
pushStateButton.id = 'push-state-button'
pushStateButton.onclick = () => {
  window.history.pushState({}, '', '/foo')
}
document.body.appendChild(pushStateButton)