/**
 * Theme Toggle - Dark/Light Mode Switcher
 * Handles theme switching without page reload
 */
(function() {
    'use strict';

    // Wait for DOM to be ready
    function initThemeToggle() {
        // Ensure body has the same theme attribute as html (for CSS selectors)
        var saved = document.documentElement.getAttribute('data-theme-version') || 'light';
        if (document.body && document.body.getAttribute('data-theme-version') !== saved) {
            document.body.setAttribute('data-theme-version', saved);
            document.body.style.backgroundColor = (saved === 'dark') ? '#171717' : '#F8F8F8';
        }

        var btn = document.getElementById('theme-toggle');
        if (!btn) {
            console.log('Theme toggle: button not found');
            return;
        }

        // Remove any existing handlers to prevent duplicates
        btn.removeEventListener('click', handleThemeToggle);

        // Attach new handler
        btn.addEventListener('click', handleThemeToggle);
        console.log('Theme toggle: handler attached');
    }

    function handleThemeToggle(e) {
        e.preventDefault();
        var html = document.documentElement;
        var body = document.body;
        var current = html.getAttribute('data-theme-version') || 'light';
        var next = (current === 'dark') ? 'light' : 'dark';

        // Set on both html and body for CSS selectors to work
        html.setAttribute('data-theme-version', next);
        body.setAttribute('data-theme-version', next);

        // Update body background color
        body.style.backgroundColor = (next === 'dark') ? '#171717' : '#F8F8F8';

        localStorage.setItem('theme-version', next);
        console.log('Theme toggled to:', next);
    }

    // Apply saved theme immediately (before DOM renders to prevent flash)
    function applySavedTheme() {
        var saved = localStorage.getItem('theme-version');
        if (saved) {
            document.documentElement.setAttribute('data-theme-version', saved);
            // Also set on body if available
            if (document.body) {
                document.body.setAttribute('data-theme-version', saved);
                document.body.style.backgroundColor = (saved === 'dark') ? '#171717' : '#F8F8F8';
            }
        }
    }

    // Run immediately to prevent flash
    applySavedTheme();

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
})();