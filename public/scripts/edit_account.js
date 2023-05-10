    const image_form = document.getElementsByName('image')[0];
    const image_label = document.getElementsByName('image_label')[0];

    const post_image = document.getElementsByClassName('change_profile_picture')[0].getElementsByTagName('img')[0];
    
    image_form.addEventListener('change', () => {
        const file = image_form.files[0];


        if(file == undefined){
            post_image.src = '/icons/image.png';
            image_label.innerText = 'Choose a file';
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            post_image.src = event.target.result;
        }
        reader.readAsDataURL(file);
        
        const image_name = image_form.value.split('\\').at(-1);
        image_label.innerText = image_name;

    })
