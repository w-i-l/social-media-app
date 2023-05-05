window.onload = () => {
    
    // const username_form = document.getElementsByName('username')[0];
    const description_form = document.getElementsByName('description')[0];
    const image_form = document.getElementsByName('image')[0];
    console.log(image_form)

    // const post_username = document.getElementsByClassName('user')[0].getElementsByTagName('h5')[0];
    const post_description = document.getElementsByClassName('description')[0].getElementsByTagName('p')[0];
    const post_image = document.getElementsByClassName('post')[0].getElementsByTagName('img')[0];
    
    // username_form.addEventListener('input', () => {
    //      post_username.innerText = username_form.value;
    // })

    description_form.addEventListener('input', () =>{
        post_description.innerText = description_form.value;
    })

    image_form.addEventListener('change', () => {
        const file = image_form.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            post_image.src = event.target.result;
        }
        reader.readAsDataURL(file);
    })
}
