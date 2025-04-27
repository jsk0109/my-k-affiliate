function initContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();


            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;


            console.log('문의 내용:', { name, email, subject, message });

            alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');

            contactForm.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});