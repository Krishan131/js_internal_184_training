document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from URL parameters
    const params = new URLSearchParams(window.location.search);

    const name = params.get('name');
    const email = params.get('email');
    const gender = params.get('gender');
    const course = params.get('course');

    const outputContainer = document.querySelector('.output-container');

    if (name) {
        document.getElementById('outName').textContent = name;
        document.getElementById('outEmail').textContent = email;
        document.getElementById('outGender').textContent = gender;
        document.getElementById('outCourse').textContent = course;
    } else {
        outputContainer.innerHTML = '<h3>No Registration Found</h3><p>Please go back and fill the form.</p><a href="index.html" class="submit-btn" style="text-decoration: none; display: inline-block;">Go to Form</a>';
    }
});
