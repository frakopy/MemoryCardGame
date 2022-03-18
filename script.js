'use strict'

//Animation section trough GSAP
gsap.to("header", {duration: 2, scale:1, y: 250, ease: "bounce"})

const btnRestart = document.getElementById('restart')
const cards = document.querySelectorAll('.memory-card')
let cardFliped = false
let cardLocked = false
let firstCard, secondCard

<<<<<<< HEAD
// we use the root https://raw.githubusercontent.com/frakopy followed by our repo and directory where our files are
const matchFound = new Audio('https://raw.githubusercontent.com/frakopy/MemoryCardGame/master/audio_files/match_found.wav')
const matchFail = new Audio('https://raw.githubusercontent.com/frakopy/MemoryCardGame/master/audio_files/match_fail.wav')
let backgroundAudio = new Audio('https://raw.githubusercontent.com/frakopy/MemoryCardGame/master/audio_files/background_music.wav')

=======
const matchFound = new Audio('https://raw.githubusercontent.com/frakopy/MemoryCardGame/master/audio_files/match_found.wav')
const matchFail = new Audio('https://raw.githubusercontent.com/frakopy/MemoryCardGame/master/audio_files/match_fail.wav')
let backgroundAudio = new Audio('https://raw.githubusercontent.com/frakopy/MemoryCardGame/master/audio_files/background_music.wav')
>>>>>>> d4997e7ab52a248aca34b9f90fa8d86539937d3b
backgroundAudio.loop = true;
backgroundAudio.volume =  0.2;

const orderRandom = () => {
    cards.forEach(card => {
        let randomPos = Math.ceil(Math.random() * 12)
        card.style.order = randomPos
    })
}

orderRandom() //Call the function for order randomly the div that contains the cards

const removeEventClick = () => {
    firstCard.onclick = null
    secondCard.onclick = null
    matchFound.play()
}

const unFlipCard = () => {
    matchFail.play()
    cardLocked = true
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        firstCard = null // For reset first card selected value
        secondCard = null // For reset second card selected value
        cardLocked = false
    }, 1500)
}

const checkMatch = () => {
    const match = firstCard.dataset.imgName === secondCard.dataset.imgName
    match ? removeEventClick() : unFlipCard() 
}


const flipCard = (card) => {
    //Play the background audio after click a card
    backgroundAudio.play()

    if(firstCard === card) return  
    if(cardLocked) return

    card.classList.add('flip') //add class flip for flip the card clicked
    
    if(!cardFliped){
        cardFliped = true
        firstCard = card
    }
    
    else{
        cardFliped = false
        secondCard = card
        //Call function for check if the cardas has the same image
        checkMatch() 
    }
}


cards.forEach( card => {
    card.onclick = () => {flipCard(card)}
})    


btnRestart.addEventListener('click', () => {
    backgroundAudio.pause()
    cards.forEach( card => {
        card.onclick = () => {flipCard(card)}
        card.classList.remove('flip')
        orderRandom()
    })
})
