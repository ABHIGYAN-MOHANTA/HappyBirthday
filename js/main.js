const synth = window.speechSynthesis;
let messages = ["Happy birthday! I hope all your birthday wishes and dreams come true.",
"A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!",
"Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!",
"May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!",
"Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!",
"This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known.",
"May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.",
"May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.",];
document.querySelector('#button').addEventListener('click', wish);

function wish(){
    const fName = document.querySelector('#firstName').value
    const lName = document.querySelector('#lastName').value

    let speakText1 = document.querySelector('#hny').innerText = `Happy Birthday! ${fName} ${lName}`;
    let speakText2 = document.querySelector('#wish').innerHTML = `${messages[Math.floor((Math.random()*messages.length))]}`

    let speakText = speakText1+". "+speakText2

    let speakAloud = new SpeechSynthesisUtterance(speakText);

    synth.speak(speakAloud);
}
