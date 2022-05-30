const inputRadio = document.querySelectorAll('input[name="ratings"]')
const formSubmitBtn = document.getElementById('form-submit-btn')
const modalMsg = document.getElementById('modal-msg')
const overlay = document.getElementById('overlay')

// modal initial hidden state
overlay.style.display = 'none'

// get value rating from input radio
// set thank you message
inputRadio.forEach(element => {
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

    inputRadio.forEach(element => {
        if(element.checked) {
            element.checked = false
            overlay.style.display = 'flex'
            setTimeout(() => {
                overlay.style.display = 'none'
            }, 2000);
        } else {}
    })
})

