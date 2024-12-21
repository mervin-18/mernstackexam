// Simple JavaScript for interactive elements like Enroll Now button
document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    
    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for enrolling in this course!');
        });
    });
});
