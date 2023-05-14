    const text = document.getElementById("error-message");
    const background = document.getElementsByClassName('background')[0];
    const balls = document.querySelector('body > ul');
    const colors = ['#D4ADFC', '#A0D8B3', 'FFB84C', '#FF55BB', 'E76161', '#AFD3E2', '#F7E1AE', '0C134F'];
    let i = 0;

    setInterval(() => {

        background.style.background = colors[colors.length - i];
        text.style.color = colors[i];
        i++;
        i = i % colors.length;
    }
    , 500);

    let index = 0;

    setInterval(() => {
                
        var li = document.createElement("li");
        const div = document.createElement("div");
        div.setAttribute("class", 'ball');
        li.appendChild(div);
        balls.appendChild(li);

        

    }, 30)

    setInterval(() => {
        var li = balls.getElementsByTagName('li')[index ++];
        li.innerHTML = '';
    }, 2000)

    setTimeout(() => {
        const oldURL = window.location.href.split('/').at(0);
        window.location.replace(oldURL + '/main');
    }, 10000);
    // console.log(33);
