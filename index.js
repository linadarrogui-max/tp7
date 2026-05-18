const signupPageBtn = document.getElementById('signupPageBtn');

const signinPageBtn = document.getElementById('signinPageBtn');

const signupPage = document.getElementById('signupPage');

const signinPage = document.getElementById('signinPage');


// afficher inscription
signupPageBtn.addEventListener('click', () => {

    signupPage.style.display = 'flex';

    signinPage.style.display = 'none';

});


// afficher connexion
signinPageBtn.addEventListener('click', () => {

    signupPage.style.display = 'none';

    signinPage.style.display = 'flex';

});


// inscription
document.getElementById('signupBtn').addEventListener('click', () => {

    const name = document.getElementById('signupName').value;

    const email = document.getElementById('signupEmail').value;

    const password = document.getElementById('signupPassword').value;


    if(name === '' || email === '' || password === ''){
        alert('Veuillez remplir tous les champs');
        return;
    }

    alert('Compte créé avec succès');

});


// connexion
document.getElementById('signinBtn').addEventListener('click', () => {

    const email = document.getElementById('signinEmail').value;

    const password = document.getElementById('signinPassword').value;


    if(email === '' || password === ''){
        alert('Veuillez remplir tous les champs');
        return;
    }

    alert('Connexion réussie');

});