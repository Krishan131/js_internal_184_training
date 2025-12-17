const form = document.getElementById('registrationForm');
const errorDialog = document.getElementById('errorDialog');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

        // Reset errors
        errorDialog.style.display = 'none';
        errorDialog.innerHTML = '';

        let errors = [];

        // 1. Validate Name
        const nameInput = document.getElementById('name');
        const nameVal = nameInput.value.trim();
        if (nameVal === '') {
            errors.push('Name should not be empty');
        }

        // 2. Validate Email
        const emailInput = document.getElementById('email');
        const emailVal = emailInput.value.trim();
        if (!emailVal.includes('@') || !emailVal.includes('.')) {
            errors.push('Email should be valid');
        }

        // 3. Validate Gender
        const genderInputs = document.getElementsByName('gender');
        let genderVal = '';
        let genderSelected = false;
        for (const input of genderInputs) {
            if (input.checked) {
                genderSelected = true;
                genderVal = input.value;
                break;
            }
        }
        if (!genderSelected) {
            errors.push('Gender must be selected');
        }

        // 4. Validate Course
        const courseInput = document.getElementById('course');
        const courseVal = courseInput.value;
        if (courseVal === '') {
            errors.push('Course must be selected');
        }

        // 5. Validate Terms
        const termsInput = document.getElementById('terms');
        if (!termsInput.checked) {
            errors.push('Terms checkbox must be checked');
        }

        if (errors.length > 0) {
            // Show errors in dialog
            let errorHtml = '<strong>Please correct the following errors:</strong><ul>';
            errors.forEach(function (err) {
                errorHtml += '<li>' + err + '</li>';
            });
            errorHtml += '</ul>';

            errorDialog.innerHTML = errorHtml;
            errorDialog.style.display = 'block';
        } else {
            // Success - Construct URL with query parameters
            const params = new URLSearchParams();
            params.append('name', nameVal);
            params.append('email', emailVal);
            params.append('gender', genderVal);
            params.append('course', courseVal);

            // Redirect to success page with params
            window.location.href = 'success.html?' + params.toString();
        }

    });
}
