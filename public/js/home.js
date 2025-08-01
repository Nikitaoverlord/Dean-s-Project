const socket = io();

// window.onpageshow = function(event) {
//   if (event.persisted) {
//       window.location.reload() 
//   }
// };

// socket.on('give account info', () => {
//   socket.emit('initial account info', [localStorage.getItem('email'), localStorage.getItem('password')])
// })

function homePageListeners(){
    let scale = 1
    document.querySelector('.no-button').addEventListener('click', function(){
        let noButton = document.querySelector('.no-button')
        
        if (scale > 0.4 && scale <= 1){
            scale -= 0.1
            noButton.style.transform  = `scale(${scale})`
        }
        else{
            noButton.style.transform  = `scale(${5})`
            noButton.textContent = "Fuck you 🖕"
            let imageElement = document.querySelector('#swapImage')
            let imageIndex = 1
            imageElement.src = '/imgs/nikita_angry' + imageIndex + '.jpg'
            setInterval(() => {
                imageIndex ++
                if (imageIndex == 3) imageIndex = 1; 
                imageElement.src = '/imgs/nikita_angry' + imageIndex + '.jpg'
            }, 2000)
        }

    })

    document.querySelector('.yes-button').addEventListener('click', function(){
        console.log('hello')
        // e.preventDefault()
        let questionaire = document.querySelector('.ultimate-question')
        questionaire.style.display = 'none'

        const audio = document.getElementById("loveSong");
        audio.play();

        setTimeout(() => {
            const gallery = document.getElementById("gallery");
            gallery.style.display = 'flex'
        }, 3000);


        const heartContainer = document.getElementById('heart-container');
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.top = `${Math.random() * 200 - 100}px`;
            heart.style.left = `${Math.random() * 200 - 100}px`;
            heartContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }

        const yay = document.getElementById('yay');
        yay.style.display = 'block';

        const giftPopup = document.getElementById('gift-popup');
        const giftImg = document.getElementById('gift-img');
        const couponText = document.getElementById('coupon-text');

        setTimeout(() => {
            giftPopup.style.display = 'block';
        }, 5000);

        giftImg.addEventListener('click', () => {
            giftImg.style.display = 'none';
            couponText.classList.remove('hidden');
        });

    })

    document.addEventListener('click', (e) => {
        const giftBox = document.querySelector('.gift-box');
        const giftPopup = document.getElementById('gift-popup');

        // Only close if the popup is visible and the click was outside the gift box
        if (giftPopup.style.display === 'block' && !giftBox.contains(e.target)) {
            giftPopup.style.display = 'none';
        }
    });
}
/////////////////////

homePageListeners()