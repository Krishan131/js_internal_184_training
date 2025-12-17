document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    // Only run if the form exists (on register.html)
    if (form) {
        // Output Fields (for debugging or single page flow, though now we redirect)
        // const outputDiv = document.getElementById('output');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent page reload

            // Reset errors
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
            let isValid = true;

            // 1. Validate Name
            const nameInput = document.getElementById('name');
            const nameVal = nameInput.value.trim();
            if (nameVal === '') {
                document.getElementById('nameError').textContent = 'Name should not be empty';
                isValid = false;
            }

            // 2. Validate Email
            const emailInput = document.getElementById('email');
            const emailVal = emailInput.value.trim();
            if (!emailVal.includes('@') || !emailVal.includes('.')) {
                document.getElementById('emailError').textContent = 'Email should be valid';
                isValid = false;
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
                document.getElementById('genderError').textContent = 'Gender must be selected';
                isValid = false;
            }

            // 4. Validate Course
            const courseInput = document.getElementById('course');
            const courseVal = courseInput.value;
            if (courseVal === '') {
                document.getElementById('courseError').textContent = 'Course must be selected';
                isValid = false;
            }

            // 5. Validate Terms
            const termsInput = document.getElementById('terms');
            if (!termsInput.checked) {
                document.getElementById('termsError').textContent = 'Terms checkbox must be checked';
                isValid = false;
            }

            if (isValid) {
                // Save to localStorage
                localStorage.setItem('regName', nameVal);
                localStorage.setItem('regEmail', emailVal);
                localStorage.setItem('regGender', genderVal);
                localStorage.setItem('regCourse', courseVal);

                // Redirect to success page
                window.location.href = 'success.html';
            }

        });
    }
});
