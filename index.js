const inputRating = document.querySelectorAll('input[name="ratings"]')
console.log(inputRating)
const formSubmitBtn = document.getElementById('form-submit-btn')
const modalMsg = document.getElementById('modal-msg')
const overlay = document.getElementById('overlay')

// modal initial hidden state
overlay.style.display = 'none'

// get value rating from input radio
// set thank you message
inputRating.forEach(element => {
    element.addEventListener('click', () => {
        rating = element.value 
        modalMsg.innerHTML = `you selected ${rating} out of 5`
    })
});

// click event
//uncheck input radio
// hide modal after a certain amount of time
formSubmitBtn.addEventListener('click', function(event) {
    event.preventDefault()

    inputRating.forEach(element => {
        if(element.checked) {
            element.checked = false
            overlay.style.display = 'flex'
            setTimeout(() => {
                overlay.style.display = 'none'
            }, 2000);
        } else {}
    })
})

