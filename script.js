document.getElementById('contact form').addEventListener('submit'),function(event){
    event.preventDefault();
    const name = document.getElementById('name').Value;
    const email = document.getElementById('email').Value;
    const message= document.getElementById('message').Value;
    if (!name || email || !message){
        alert('Please fill in all the fields.');
        returns;
        alert('form submitted successfully!\nName:'+name+'\nEmail:'+email + '\nMessage:'+Message);
        document.getElementById('contact form').requestFullscreen();


    }
    

}