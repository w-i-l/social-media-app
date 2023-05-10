window.onload = () => {

    const input = document.getElementsByTagName('input')[0];
    const button = document.getElementsByName('search')[0];
    
    input.addEventListener('input', () => {
        const user = input.value;   

        button.href = `/user/${user}`;
    })

    input.addEventListener("keyup", ({key}) => {
        if (key === "Enter") {
            const user = input.value;   

            const oldURL = window.location.href.split('/').at(0);
            window.location.href = oldURL + `/user/${user}`;
        }
    })
}