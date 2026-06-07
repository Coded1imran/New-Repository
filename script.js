const themeToggleBtn = document.getElementById('theme-toggle');

// Check for saved theme preference, otherwise use system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Initialize Lucide icons so they render
lucide.createIcons();

// Toggle theme on click
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Save preference
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});