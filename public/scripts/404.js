    const text = document.getElementsByTagName("h1")[1];
    const background = document.getElementsByClassName('background')[0];
    const colors = ['#D4ADFC', '#A0D8B3', '#FF55BB', '#AFD3E2', '#F7E1AE'];
    let i = 0;

    setInterval(() => {
        background.style.background = colors[colors.length - i];
        text.style.color = colors[i];
        i++;
        i = i % colors.length;
    }
    , 1000);

    setTimeout(() => {
        const oldURL = window.location.href.split('/').at(0);
        window.location.replace(oldURL + '/main');
    }, 10000);
    // console.log(33);
