document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
});

const navbar = document.getElementById("navbar");
const navLink = document.getElementById("navLink");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
    mobileMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(0)';
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
    } else {
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
    }
});

window.addEventListener('load', () => {
    const spinner = document.getElementById('spinner');
    //spinner.classList.add('hidden');
    setTimeout(() => spinner.remove(), 1000);
});

// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable common inspect shortcuts
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }
	
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) {
        e.preventDefault();
    }
	
    // Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "j")) {
        e.preventDefault();
    }
	
    // Ctrl+U (View source)
    if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
    }
	
    // Ctrl+S (Save page)
    if (e.ctrlKey && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
    }
	
    // Ctrl+Shift+C (Inspect element)
    if (e.ctrlKey && e.shiftKey && (e.key === "C" || e.key === "c")) {
        e.preventDefault();
    }
});

// Optional: Prevent dragging images/text
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});

// Optional: Prevent selecting text
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// Disable copying
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// Prevent text selection via touch events (mobile)
document.addEventListener('touchstart', function(e) {
    if(e.touches.length > 1) { // multi-touch
        e.preventDefault();
    }
}, { passive: false });