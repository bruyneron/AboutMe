document.querySelector('.btn-nav').addEventListener('click', (e) => {
    navBarBtn = document.querySelector('.btn-nav a');
    navBarContainer = document.querySelector('.expanded-nav-container');

    if (navBarBtn.textContent === '+') {
        navBarBtn.textContent = '-';
    } else {
        navBarBtn.textContent = '+';
    }
    navBarContainer.classList.toggle('show');
})