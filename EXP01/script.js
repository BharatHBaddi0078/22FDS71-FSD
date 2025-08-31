document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('successMsg').textContent = '';

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        valid = false;
    }

    // Age validation
    const age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 10 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be between 10 and 100.';
        valid = false;
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select a gender.';
        valid = false;
    }

    // Course validation
    const course = document.getElementById('course').value.trim();
    if (course.length < 2) {
        document.getElementById('courseError').textContent = 'Course name must be at least 2 characters.';
        valid = false;
    }

    if (valid) {
        document.getElementById('successMsg').textContent = 'Admission form submitted successfully!';
        document.getElementById('admissionForm').reset();
    }
});
