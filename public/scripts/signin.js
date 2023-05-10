window.onload = () => {
    const form = document.getElementsByTagName('form')[0];
    const submit = form.getElementsByTagName('input')[2];

    const email = form.getElementsByTagName('input')[0];
    const password = form.getElementsByTagName('input')[1];

    const user = localStorage.getItem("user");
    console.log(user);

    if(user){
        email.value = user[0][-1];
        password.value = user[1][-1];
    }

    submit.addEventListener("submit", e => {
        e.preventDefault();
        e.stopPropagation();
        const data = new FormData(e.target);
        localStorage.setItem("user", JSON.stringify([...data.entries()]));
    })
}