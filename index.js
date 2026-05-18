const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signup = document.getElementById('signup');

console.log(name);
console.log(email);
console.log(password);
console.log(button);
button.addEventListener('click', () => {
    console.log('button clicked!');
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);
    alert('name' + name.value + "\nemail" + email.value + "\npassword" + password.value);
});