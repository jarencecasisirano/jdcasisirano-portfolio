document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio is ready!');

    function loadContent(url, containerId, callback) {
        const basePath = window.location.pathname.includes('/projects/') ? '../' : '';
        fetch(basePath + url)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to fetch ${url}`);
                return response.text();
            })
            .then(data => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = data;
                    console.log(`Loaded ${url} into #${containerId}`);
                    if (callback) callback();
                } else {
                    console.error(`Container with id "${containerId}" not found.`);
                }
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    }

    function setupSplash() {
        const contactSplash = document.getElementById('contact-splash');
        const closeSplashButton = document.getElementById('close-splash');
        const contactLinks = document.querySelectorAll('[id="contact-me-link"]');

        if (contactSplash) {
            console.log('Splash screen found.');
        } else {
            console.error('Splash screen not found.');
            return;
        }

        if (contactLinks.length > 0) {
            console.log('Found Contact Me links:', contactLinks);
            contactLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    contactSplash.classList.remove('hidden');
                    console.log('Splash screen opened.');
                });
            });
        } else {
            console.error('No Contact Me links found.');
        }

        if (closeSplashButton) {
            closeSplashButton.addEventListener('click', () => {
                contactSplash.classList.add('hidden');
                console.log('Splash screen closed.');
            });
        } else {
            console.error('Close button not found.');
        }
    }

    loadContent('header.html', 'header', () => {
        console.log('Header loaded.');
        setupSplash();
    });

    loadContent('footer.html', 'footer', () => {
        console.log('Footer loaded.');
        setupSplash();
    });

    loadContent('contact-me-splash.html', 'contact-splash-container', () => {
        console.log('Contact Me splash loaded.');
        setupSplash();
    });
});
