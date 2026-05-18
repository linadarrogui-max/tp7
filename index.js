const signupForm = document.getElementById('signupForm');
const signinForm = document.getElementById('signinForm');

const showSignup = document.getElementById('showSignup');
const showSignin = document.getElementById('showSignin');


// afficher Sign Up
showSignup.addEventListener('click', () => {

    signupForm.style.display = 'flex';
    signinForm.style.display = 'none';

});


// afficher Sign In
showSignin.addEventListener('click', () => {

    signupForm.style.display = 'none';
    signinForm.style.display = 'flex';

});


// bouton Sign Up
document.getElementById('signupBtn').addEventListener('click', () => {

    const name = document.getElementById('signupName').value;

    const email = document.getElementById('signupEmail').value;

    const password = document.getElementById('signupPassword').value;


    if(name === '' || email === '' || password === ''){
        alert('Veuillez remplir tous les champs');
        return;
    }

    alert(
        'Compte créé !' +
        '\nNom : ' + name +
        '\nEmail : ' + email
    );

});


// bouton Sign In
document.getElementById('signinBtn').addEventListener('click', () => {

    const email = document.getElementById('signinEmail').value;

    const password = document.getElementById('signinPassword').value;


    if(email === '' || password === ''){
        alert('Veuillez remplir tous les champs');
        return;
    }

    alert(
        'Connexion réussie !' +
        '\nEmail : ' + email
    );

});