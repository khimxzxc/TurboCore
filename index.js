// Открыть модальное окно
document.getElementById("play").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("playtwo").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("playthree").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})



// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})


window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


