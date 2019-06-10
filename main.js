// add event listener for when a specific key is pressed(keydown)

window.addEventListener('keydown', event => {

    // function ... when the query selector matches the id of the specified event key the audio that is assigned to that key 
    // will play.

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

    //  if a key that is not assigned with audio is pressed nothing will happen.

    if (!audio) return;

    audio.play()
})