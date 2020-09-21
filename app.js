document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardsArray = [
        {
            name: 'ash',
            img: 'images/20046-3-pokemon-ash-file-thumb.png'
        },
        {
            name: 'ash',
            img: 'images/20046-3-pokemon-ash-file-thumb.png'
        },
        {
            name: 'pikachu',
            img: 'images/20048-2-pikachu-hd-thumb.png'
        },
        {
            name: 'pikachu',
            img: 'images/20048-2-pikachu-hd-thumb.png'
        },
        {
            name: 'mewtwo',
            img: 'images/20068-3-legendary-pokemon-picture-thumb.png'
        },
        {
            name: 'mewtwo',
            img: 'images/20068-3-legendary-pokemon-picture-thumb.png'
        },
        {
            name: 'charizard',
            img: 'images/20252-5-pokemon-transparent-background-thumb.png'
        },
        {
            name: 'charizard',
            img: 'images/20252-5-pokemon-transparent-background-thumb.png'
        },
        {
            name: 'evee',
            img: 'images/20346-7-pokemon-hd-thumb.png'
        },
        {
            name: 'evee',
            img: 'images/20346-7-pokemon-hd-thumb.png'
        },
        {
            name: 'charmander',
            img: 'images/37543-2-pokemon-picture-thumb.png'
        },
        {
            name: 'charmander',
            img: 'images/37543-2-pokemon-picture-thumb.png'
        },
    ];

    cardsArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create board
    createBoard = () => {
        for(let i = 0; i < cardsArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/20250-9-pokeball-photo-thumb.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert('Match Found!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipcard)
            cards[optionTwoId].removeEventListener('click', flipcard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/20250-9-pokeball-photo-thumb.png');
            cards[optionTwoId].setAttribute('src', 'images/20250-9-pokeball-photo-thumb.png');
            alert('Try Again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cards.length/2) {
            resultDisplay.textContent = 'You Won!'
        }
    }

    function flipcard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    };

    createBoard();
});