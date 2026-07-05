/**
 * ============================================================
 * AYUSH INSTITUTE OF COMPUTER EDUCATION (AICE)
 * Main JavaScript File
 * ============================================================
 * Features:
 * - Loading Screen
 * - Sticky Navbar
 * - Mobile Menu Toggle
 * - Dark Mode
 * - Smooth Scroll
 * - Scroll Animations
 * - Typing Effect
 * - Counter Animation
 * - Back to Top Button
 * - Certificate Verification (Manual Database)
 * - Enroll Button (Google Form)
 * - Form Validation
 * - Button Hover Effects
 * ============================================================
 */

// ============================================================
// CONFIGURATION
// ============================================================

/**
 * GOOGLE FORM URL
 * Replace this URL with your actual Google Form link
 */
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/your-form-id/viewform';

/**
 * CONTACT INFORMATION
 */
const CONTACT = {
    phone: '+916371004033',
    whatsapp: '916371004033',
    email: 'aice.learning.edu@gmail.com',
};

// ============================================================
// CERTIFICATE DATABASE (MANUAL)
// ============================================================

/**
 * CERTIFICATE DATABASE
 * Add your certificate details here manually
 * 
 * Format:
 * {
 *   certNumber: "AICE-CBCA-2026-0001",
 *   studentName: "Student Name",
 *   course: "Course Name",
 *   duration: "Duration",
 *   issueDate: "Issue Date",
 *   status: "Valid"
 * }
 * 
 * To add a new certificate, simply add a new object to the array
 * To remove a certificate, delete the object
 * To update, modify the existing object
 */
const CERTIFICATE_DATABASE = [
    {
        certNumber: "AICE-CBCA-2026-9001",
        studentName: "PRATYUSH KUMAR ROUTRAY",
        course: "Certificate in Basic Computer Applications (CBCA)",
        duration: "3 Months",
        issueDate: "JULY 05 2026",
        status: "Valid"
    },
    {
        certNumber: "AICE-CBCA-2026-0002",
        studentName: "Priya Mishra",
        course: "Certificate in Basic Computer Applications (CBCA)",
        duration: "3 Months",
        issueDate: "January 2026",
        status: "Valid"
    },
    {
        certNumber: "AICE-CBCA-2026-0003",
        studentName: "Amit Kumar",
        course: "Certificate in Basic Computer Applications (CBCA)",
        duration: "3 Months",
        issueDate: "February 2026",
        status: "Valid"
    },
    {
        certNumber: "AICE-CBCA-2026-0004",
        studentName: "Sneha Patel",
        course: "Certificate in Basic Computer Applications (CBCA)",
        duration: "3 Months",
        issueDate: "February 2026",
        status: "Valid"
    },
    {
        certNumber: "AICE-CBCA-2026-0005",
        studentName: "Vikram Singh",
        course: "Certificate in Basic Computer Applications (CBCA)",
        duration: "3 Months",
        issueDate: "March 2026",
        status: "Valid"
    },
    // Add more certificates here as needed
    // Example:
    // {
    //     certNumber: "AICE-CBCA-2026-0006",
    //     studentName: "New Student",
    //     course: "Certificate in Basic Computer Applications (CBCA)",
    //     duration: "3 Months",
    //     issueDate: "March 2026",
    //     status: "Valid"
    // },
];

// ============================================================
// CERTIFICATE VERIFICATION FUNCTIONS
// ============================================================

/**
 * Search for a certificate in the database
 * @param {string} certNumber - The certificate number to search for
 * @returns {object|null} - Returns certificate data or null if not found
 */
function findCertificate(certNumber) {
    // Normalize the certificate number (uppercase, trim)
    const normalizedCert = certNumber.toUpperCase().trim();
    
    // Search in the database
    return CERTIFICATE_DATABASE.find(
        cert => cert.certNumber.toUpperCase() === normalizedCert
    ) || null;
}

/**
 * Add a new certificate to the database
 * @param {object} certData - Certificate data object
 * @returns {boolean} - True if added successfully
 */
function addCertificate(certData) {
    try {
        // Check if certificate already exists
        const exists = CERTIFICATE_DATABASE.some(
            cert => cert.certNumber === certData.certNumber
        );
        
        if (exists) {
            console.warn('Certificate already exists!');
            return false;
        }
        
        CERTIFICATE_DATABASE.push(certData);
        console.log('Certificate added successfully!');
        return true;
    } catch (error) {
        console.error('Error adding certificate:', error);
        return false;
    }
}

/**
 * Update an existing certificate
 * @param {string} certNumber - The certificate number to update
 * @param {object} updatedData - Updated certificate data
 * @returns {boolean} - True if updated successfully
 */
function updateCertificate(certNumber, updatedData) {
    try {
        const index = CERTIFICATE_DATABASE.findIndex(
            cert => cert.certNumber === certNumber
        );
        
        if (index === -1) {
            console.warn('Certificate not found!');
            return false;
        }
        
        CERTIFICATE_DATABASE[index] = {
            ...CERTIFICATE_DATABASE[index],
            ...updatedData
        };
        console.log('Certificate updated successfully!');
        return true;
    } catch (error) {
        console.error('Error updating certificate:', error);
        return false;
    }
}

/**
 * Delete a certificate from the database
 * @param {string} certNumber - The certificate number to delete
 * @returns {boolean} - True if deleted successfully
 */
function deleteCertificate(certNumber) {
    try {
        const index = CERTIFICATE_DATABASE.findIndex(
            cert => cert.certNumber === certNumber
        );
        
        if (index === -1) {
            console.warn('Certificate not found!');
            return false;
        }
        
        CERTIFICATE_DATABASE.splice(index, 1);
        console.log('Certificate deleted successfully!');
        return true;
    } catch (error) {
        console.error('Error deleting certificate:', error);
        return false;
    }
}

/**
 * Get all certificates (for admin purposes)
 * @returns {array} - Array of all certificates
 */
function getAllCertificates() {
    return CERTIFICATE_DATABASE;
}

/**
 * Get certificate count
 * @returns {number} - Total number of certificates
 */
function getCertificateCount() {
    return CERTIFICATE_DATABASE.length;
}

// ============================================================
// DOM REFERENCES
// ============================================================

const DOM = {
    loader: document.getElementById('loader'),
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('navToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    darkModeIcon: document.getElementById('darkModeIcon'),
    backToTop: document.getElementById('backToTop'),
    enrollBtn: document.getElementById('enrollBtn'),
    certForm: document.getElementById('certificateForm'),
    certInput: document.getElementById('certNumber'),
    certResult: document.getElementById('certResult'),
    statNumbers: document.querySelectorAll('.stat-number'),
    scrollAnimate: document.querySelectorAll('.scroll-animate'),
    heroTagline: document.querySelector('.hero-tagline'),
};

// ============================================================
// LOADING SCREEN
// ============================================================

window.addEventListener('load', () => {
    setTimeout(() => {
        DOM.loader.classList.add('hidden');
        // Trigger counter animations after loader hides
        setTimeout(animateCounters, 600);
    }, 800);
});

// ============================================================
// STICKY NAVBAR
// ============================================================

let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add/remove scrolled class
    if (currentScrollY > 80) {
        DOM.navbar.classList.add('scrolled');
    } else {
        DOM.navbar.classList.remove('scrolled');
    }

    // Hide/show back to top button
    if (currentScrollY > 500) {
        DOM.backToTop.classList.add('visible');
    } else {
        DOM.backToTop.classList.remove('visible');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();

    lastScrollY = currentScrollY;
});

// ============================================================
// ACTIVE NAV LINK (Scroll Spy)
// ============================================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            DOM.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Update on load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ============================================================
// MOBILE MENU TOGGLE
// ============================================================

DOM.navToggle.addEventListener('click', () => {
    const isActive = DOM.navMenu.classList.toggle('active');
    DOM.navToggle.classList.toggle('active');
    DOM.navToggle.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
});

// Close menu on link click
DOM.navLinks.forEach(link => {
    link.addEventListener('click', () => {
        DOM.navMenu.classList.remove('active');
        DOM.navToggle.classList.remove('active');
        DOM.navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    const isNavClick = DOM.navMenu.contains(e.target) || DOM.navToggle.contains(e.target);
    if (!isNavClick && DOM.navMenu.classList.contains('active')) {
        DOM.navMenu.classList.remove('active');
        DOM.navToggle.classList.remove('active');
        DOM.navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// ============================================================
// DARK MODE
// ============================================================

// Check for saved theme preference
const savedTheme = localStorage.getItem('aice-theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    DOM.darkModeIcon.classList.replace('fa-moon', 'fa-sun');
}

DOM.darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('aice-theme', newTheme);

    // Toggle icon
    if (newTheme === 'dark') {
        DOM.darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        DOM.darkModeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

// ============================================================
// BACK TO TOP BUTTON
// ============================================================

DOM.backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// ============================================================
// TYPING EFFECT (Hero Tagline)
// ============================================================

function initTypingEffect() {
    const text = DOM.heroTagline.textContent;
    DOM.heroTagline.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            DOM.heroTagline.textContent += text.charAt(index);
            index++;
            setTimeout(type, 60 + Math.random() * 40);
        }
    }

    // Start typing after loader
    setTimeout(type, 1000);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', initTypingEffect);

// ============================================================
// COUNTER ANIMATION
// ============================================================

function animateCounters() {
    DOM.statNumbers.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        let current = 0;
        const increment = target / 80;
        const duration = 2000;
        const stepTime = duration / 80;

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                return;
            }
            counter.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        };

        // Use Intersection Observer to trigger counter
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// ============================================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================================

function initScrollAnimations() {
    // Add scroll-animate class to elements
    const elementsToAnimate = document.querySelectorAll(
        '.about-grid, .founder-card, .course-card, .testimonial-card, .contact-item, .certificate-card'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-animate');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ============================================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) - 16;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// ============================================================
// COURSE GOOGLE FORM URLS
// ============================================================

const COURSE_FORM_URLS = {
    'Basic Computer Applications': 'https://forms.gle/QunzF6SLQMgcND617',
    'Basic Python Programming': 'https://forms.gle/QunzF6SLQMgcND617',
    'Basic AI & Machine Learning': 'https://forms.gle/QunzF6SLQMgcND617'
};

// ============================================================
// ENROLL BUTTON HANDLERS
// ============================================================

document.querySelectorAll('.enroll-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const courseName = this.getAttribute('data-course');
        const formUrl = COURSE_FORM_URLS[courseName];
        
        if (!formUrl) {
            showNotification(
                `Google Form URL not configured for ${courseName}. Please update the COURSE_FORM_URLS object in script.js`,
                'warning'
            );
            return;
        }
        
        // Open Google Form in new tab
        window.open(formUrl, '_blank');
        showNotification(
            `📋 Opening enrollment form for ${courseName}`,
            'info'
        );
    });
});
// ============================================================
// NOTIFICATION SYSTEM
// ============================================================

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.aice-notification');
    if (existing) existing.remove();

    const colors = {
        success: '#2ed573',
        error: '#ff4757',
        info: '#4a7fc7',
        warning: '#ffa502',
    };

    const notification = document.createElement('div');
    notification.className = 'aice-notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--white, #fff);
        color: var(--text-color, #1e2430);
        padding: 16px 28px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.20);
        font-family: 'Poppins', sans-serif;
        font-size: 0.95rem;
        z-index: 99999;
        max-width: 90%;
        border-left: 4px solid ${colors[type] || colors.info};
        animation: slideUp 0.4s ease;
        transition: opacity 0.4s ease;
        display: flex;
        align-items: center;
        gap: 12px;
    `;

    // Add icon
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️',
    };

    notification.innerHTML = `
        <span style="font-size:1.2rem;">${icons[type] || 'ℹ️'}</span>
        <span>${message}</span>
        <button style="
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            color: var(--text-light, #888);
            padding: 0 0 0 12px;
        " onclick="this.parentElement.remove()">×</button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}

// Add keyframe animation for notification
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideUp {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

// ============================================================
// CERTIFICATE VERIFICATION - MANUAL DATABASE
// ============================================================

DOM.certForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const certNumber = DOM.certInput.value.trim().toUpperCase();

    // Validate format
    const pattern = /^[A-Z]{4}-[A-Z]{4}-\d{4}-\d{4}$/;
    if (!pattern.test(certNumber)) {
        showCertificateResult(false, 'Invalid format. Please use: AICE-CBCA-2026-0001');
        return;
    }

    // Search for certificate in database
    const certificate = findCertificate(certNumber);

    if (certificate) {
        // Certificate found - show details
        showCertificateResult(true, certificate);
    } else {
        // Certificate not found
        showCertificateResult(false, 'Certificate not found in our database. Please check the number and try again.');
    }
});

/**
 * Display certificate verification result
 */
function showCertificateResult(success, data) {
    DOM.certResult.className = 'cert-result visible';

    if (!success) {
        DOM.certResult.className = 'cert-result visible error';
        DOM.certResult.innerHTML = `
            <div style="display:flex; align-items:center; gap:12px;">
                <i class="fas fa-times-circle" style="color:#ff4757; font-size:1.6rem;"></i>
                <div>
                    <h4 style="color:#ff4757;">Verification Failed</h4>
                    <p style="color:var(--text-light); margin:0;">${data}</p>
                </div>
            </div>
            <span class="status-badge invalid">Invalid</span>
        `;
        return;
    }

    DOM.certResult.className = 'cert-result visible success';
    
    // Data is an object with certificate details
    DOM.certResult.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
            <i class="fas fa-check-circle" style="color:#2ed573; font-size:1.6rem;"></i>
            <div>
                <h4 style="color:#2ed573;">Certificate Verified!</h4>
                <span class="status-badge valid">${data.status || 'Valid'}</span>
            </div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px 24px; font-size:0.95rem;">
            <div><strong>Certificate No:</strong> ${data.certNumber || 'N/A'}</div>
            <div><strong>Student Name:</strong> ${data.studentName || 'N/A'}</div>
            <div><strong>Course:</strong> ${data.course || 'N/A'}</div>
            <div><strong>Duration:</strong> ${data.duration || 'N/A'}</div>
            <div><strong>Issue Date:</strong> ${data.issueDate || 'N/A'}</div>
            <div><strong>Status:</strong> <span style="color:#2ed573; font-weight:600;">${data.status || 'Valid'}</span></div>
        </div>
    `;
}

// ============================================================
// FORM VALIDATION (Certificate Input)
// ============================================================

DOM.certInput.addEventListener('input', function() {
    const value = this.value.toUpperCase();
    const pattern = /^[A-Z]{0,4}-?[A-Z]{0,4}-?\d{0,4}-?\d{0,4}$/;

    // Auto-format as user types
    let formatted = value.replace(/[^A-Z0-9-]/g, '');

    // Auto-add dashes
    if (formatted.length > 4 && formatted[4] !== '-') {
        formatted = formatted.slice(0, 4) + '-' + formatted.slice(4);
    }
    if (formatted.length > 9 && formatted[9] !== '-') {
        formatted = formatted.slice(0, 9) + '-' + formatted.slice(9);
    }
    if (formatted.length > 14 && formatted[14] !== '-') {
        formatted = formatted.slice(0, 14) + '-' + formatted.slice(14);
    }

    if (formatted !== value) {
        this.value = formatted;
    }

    // Validate and show hint
    const fullPattern = /^[A-Z]{4}-[A-Z]{4}-\d{4}-\d{4}$/;
    if (fullPattern.test(formatted)) {
        this.style.borderColor = '#2ed573';
    } else if (formatted.length > 0) {
        this.style.borderColor = '#ffa502';
    } else {
        this.style.borderColor = '';
    }
});

// ============================================================
// SMOOTH REVEAL ON SCROLL (Additional)
// ============================================================

// Re-run scroll animations on resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Re-check visibility
        document.querySelectorAll('.scroll-animate').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }, 200);
});

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================

document.addEventListener('keydown', (e) => {
    // Alt + D for dark mode
    if (e.altKey && e.key === 'd') {
        e.preventDefault();
        DOM.darkModeToggle.click();
    }

    // Escape to close mobile menu
    if (e.key === 'Escape' && DOM.navMenu.classList.contains('active')) {
        DOM.navMenu.classList.remove('active');
        DOM.navToggle.classList.remove('active');
        DOM.navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// ============================================================
// CONSOLE INFO
// ============================================================

console.log('%c Ayush Institute of Computer Education (AICE) ',
    'background: #1a3a6b; color: #c9a84c; font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 4px;');
console.log('%c Learn Today, Lead Tomorrow ', 
    'background: #c9a84c; color: #1a3a6b; font-size: 14px; padding: 4px 12px; border-radius: 4px;');
console.log('🚀 AICE Website - Built with ❤️');
console.log('📝 Certificate Database:', CERTIFICATE_DATABASE);
console.log('📝 Total Certificates:', getCertificateCount());
console.log('📝 Google Form URL:', GOOGLE_FORM_URL);

// ============================================================
// EXPOSE CONFIG FOR EASY UPDATES (Global)
// ============================================================

window.AICE = {
    config: {
        GOOGLE_FORM_URL,
        CONTACT,
    },
    certificates: {
        database: CERTIFICATE_DATABASE,
        find: findCertificate,
        add: addCertificate,
        update: updateCertificate,
        delete: deleteCertificate,
        getAll: getAllCertificates,
        getCount: getCertificateCount,
    },
    utils: {
        showNotification,
    },
    DOM,
};

console.log('✨ AICE global object available: window.AICE');
console.log('📝 To add certificates, use: window.AICE.certificates.add({...})');
console.log('📝 To find certificates, use: window.AICE.certificates.find("AICE-CBCA-2026-0001")');
