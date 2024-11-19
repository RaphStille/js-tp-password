    const pwfield = document.getElementById("password");
    const pwBtn = document.querySelector('.showPass');

    pwBtn.addEventListener("click", () => {
        if (pwfield.type === 'password') {
            pwfield.type = 'text';
            pwBtn.textContent = 'Cacher';
        } else {
            pwfield.type = 'password';
            pwBtn.textContent = 'Montrer';
        }
    });