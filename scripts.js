(function(){
    emailjs.init("YOUR_USER_ID"); 
})();

document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('typewriter-text');
    const texts = ["Développeur Web & Expert Cybersécurité"];
    let index = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[index].length) {
            typewriterText.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        }
    }

    type();
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert("Message envoyé avec succès !");
            contactForm.reset();
        }, function(error) {
            alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
            console.error('EmailJS Error:', error);
        });
});
