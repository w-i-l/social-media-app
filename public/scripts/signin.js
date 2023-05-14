window.onload = () => {
    const form = document.getElementsByTagName('form')[0];
    const submit = form.getElementsByTagName('input')[2];

    const email = form.getElementsByTagName('input')[0];
    const password = form.getElementsByTagName('input')[1];

    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
        email.value = user['email'];
        password.value = '';
    }
    else{
        email.value = '';
        password.value = '';
    }

    form.addEventListener("submit", e => {
        const data = new FormData(e.target);
        localStorage.setItem("user", JSON.stringify({
            email: data.get('email'),
        }));
    })
}