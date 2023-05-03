function verify(credentials){

    const username = credentials.username;
    const good_username = username.length >= 4;

    const email = credentials.email;
    const good_email = String(email)
                        .toLocaleLowerCase()
                        .match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    
    const password = credentials.password;
    const good_password = (password.length >= 8);

    return good_username && good_email && good_password;
}

function save_credientials(){
    const username = document.getElementsByName("username");
    console.log(username);
}

module.exports = { verify, save_credientials };