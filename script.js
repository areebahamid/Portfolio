

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        const fullName = form.querySelector('input[type="text"][placeholder="Full Name"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phoneNumber = form.querySelector('input[type="number"]').value;
        const subject = form.querySelector('input[type="text"][placeholder="Subject"]').value;
        const message = form.querySelector('textarea').value;

        
        if (!fullName  || !email  || !phoneNumber  ||!subject  || !message ) {
            alert('Please fill out all fields.');
            return; 
        }
        alert('Message has been sent SUCCESSFULLY');

        window.location.href = "page2.html"; 
    });
});
