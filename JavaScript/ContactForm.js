document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });


        fetch('https://example.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            handleFormResponse('success', 'Your message has been successfully submitted.');
        })
        .catch(error => {
            handleFormResponse('error', 'There was an error submitting your message. Please try again.');
        });
    });

    function handleFormResponse(status, message) {
        if (status === 'success') {
            formResponse.innerHTML = `<div class="alert alert-success">${message}</div>`;
        } else {
            formResponse.innerHTML = `<div class="alert alert-danger">${message}</div>`;
        }

        contactForm.reset();
    }
});
