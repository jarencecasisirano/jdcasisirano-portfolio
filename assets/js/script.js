document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio is ready!');

    // Function to dynamically load content into specific sections
    function loadContent(url, containerId, callback) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = data; // Insert content into the corresponding section
                    if (callback) callback(); // Ensure callback runs after content is added
                } else {
                    console.error(`Container with id "${containerId}" not found.`);
                }
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Function to set up the Contact Me splash functionality
    function setupSplash() {
        const contactSplash = document.getElementById('contact-splash');
        const closeSplashButton = document.getElementById('close-splash');
        const contactLinks = document.querySelectorAll('#contact-me-link'); // Select all "Contact Me" links

        if (contactSplash && closeSplashButton) {
            // Ensure splash screen is initially hidden
            contactSplash.classList.add('hidden');

            // Add click event listener to all "Contact Me" links
            contactLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    contactSplash.classList.remove('hidden'); // Show the splash screen
                });
            });

            // Hide splash screen when 'Close' button is clicked
            closeSplashButton.addEventListener('click', () => {
                contactSplash.classList.add('hidden'); // Hide the splash screen
            });
        } else {
            console.error('Splash screen elements not found.');
        }
    }

    // Dynamically load content into sections
    loadContent('html/about-me.html', 'about-me', () => console.log('About Me loaded.'));
    loadContent('html/projects.html', 'projects', () => console.log('Projects loaded.'));
    loadContent('html/skills.html', 'skills', () => console.log('Skills loaded.'));
    loadContent('html/footer.html', 'footer', () => console.log('Footer loaded.'));

    // Load Contact Me splash screen dynamically and set up functionality
    loadContent('html/contact-me-splash.html', 'contact-splash-container', () => {
        console.log('Contact Me splash screen loaded.');
        setupSplash(); // Run the setup after the splash content is loaded
    });
});
