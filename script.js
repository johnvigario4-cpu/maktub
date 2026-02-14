// ============================================
// MAKTUB - Love Story Website
// JavaScript - Interactivity & Animations
// ============================================

// ============================================
// Particle Background Animation
// ============================================
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.initParticles();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                color: this.getRandomColor()
            });
        }
    }
    
    getRandomColor() {
        const colors = ['#b8613d', '#d4a399', '#f5ede7', '#d6e8f0'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Update position
            p.x += p.vx;
            p.y += p.vy;
            
            // Bounce off edges
            if (p.x - p.radius < 0 || p.x + p.radius > this.canvas.width) {
                p.vx = -p.vx;
            }
            if (p.y - p.radius < 0 || p.y + p.radius > this.canvas.height) {
                p.vy = -p.vy;
            }
            
            // Draw particle
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw connections
            this.drawConnections(p, i);
        }
        
        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }
    
    drawConnections(particle, index) {
        const maxDistance = 150;
        
        for (let i = index + 1; i < this.particles.length; i++) {
            const p2 = this.particles[i];
            const dx = particle.x - p2.x;
            const dy = particle.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
                this.ctx.strokeStyle = particle.color;
                this.ctx.globalAlpha = (1 - distance / maxDistance) * 0.15;
                this.ctx.beginPath();
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.stroke();
            }
        }
    }
}

// ============================================
// Scroll Animation Observer
// ============================================
class ScrollAnimationObserver {
    constructor() {
        this.createObserver();
    }
    
    createObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.animateElement(entry.target);
                }
            });
        }, options);
        
        // Observe all elements with animation potential
        document.querySelectorAll(
            '.section-container, .gallery-item, .timeline-item, .letter-content'
        ).forEach(el => {
            el.classList.add('fade-in');
            this.observer.observe(el);
        });
    }
    
    animateElement(element) {
        // Stagger children animations
        const children = element.querySelectorAll('p, h2, h3, .timeline-date');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    child.style.transition = 'all 0.6s ease';
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, 50);
            }, index * 50);
        });
    }
}

// ============================================
// Smooth Scroll Handler
// ============================================
class SmoothScrollHandler {
    constructor() {
        this.handleLinks();
    }
    
    handleLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ============================================
// Navbar Active Section Highlight
// ============================================
class NavbarHighlight {
    constructor() {
        this.setupObserver();
    }
    
    setupObserver() {
        const sections = document.querySelectorAll('section[id]');
        
        const options = {
            threshold: 0.5
        };
        
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Update active state if you have navigation
                    document.title = `MAKTUB - ${entry.target.id.replace('-', ' ')}`;
                }
            });
        }, options).observe(sections[0]);
    }
}

// ============================================
// Image Lazy Loading
// ============================================
class LazyImageLoader {
    constructor() {
        this.setupLazyLoading();
    }
    
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ============================================
// Gallery Lightbox Modal
// ============================================
class GalleryLightbox {
    constructor() {
        this.createModal();
        this.attachEventListeners();
    }
    
    createModal() {
        this.modal = document.createElement('div');
        this.modal.id = 'lightbox-modal';
        this.modal.className = 'lightbox-modal';
        this.modal.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img id="lightbox-image" src="" alt="Gallery Image">
                <div class="lightbox-caption" id="lightbox-caption"></div>
                <button class="lightbox-prev">&lt;</button>
                <button class="lightbox-next">&gt;</button>
            </div>
        `;
        document.body.appendChild(this.modal);
        
        // Add modal styles
        this.addModalStyles();
    }
    
    addModalStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .lightbox-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            .lightbox-modal.active {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .lightbox-content {
                position: relative;
                width: 90%;
                max-width: 900px;
            }
            
            .lightbox-content img {
                width: 100%;
                border-radius: 8px;
                max-height: 80vh;
                object-fit: contain;
            }
            
            .lightbox-caption {
                color: white;
                text-align: center;
                padding: 1rem;
                font-size: 0.95rem;
            }
            
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                font-size: 2rem;
                color: white;
                background: none;
                border: none;
                cursor: pointer;
            }
            
            .lightbox-prev,
            .lightbox-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background-color: rgba(255, 255, 255, 0.3);
                color: white;
                border: none;
                font-size: 2rem;
                padding: 1rem;
                cursor: pointer;
                border-radius: 4px;
                transition: background-color 0.3s;
            }
            
            .lightbox-prev:hover,
            .lightbox-next:hover {
                background-color: rgba(255, 255, 255, 0.5);
            }
            
            .lightbox-prev {
                left: -60px;
            }
            
            .lightbox-next {
                right: -60px;
            }
        `;
        document.head.appendChild(style);
    }
    
    attachEventListeners() {
        const images = document.querySelectorAll('.gallery-item img');
        
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                this.openLightbox(img.src, img.alt, index);
            });
            img.style.cursor = 'pointer';
        });
        
        document.querySelector('.lightbox-close').addEventListener('click', () => {
            this.closeLightbox();
        });
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeLightbox();
            }
        });
    }
    
    openLightbox(src, alt, index) {
        this.currentIndex = index;
        document.getElementById('lightbox-image').src = src;
        document.getElementById('lightbox-caption').textContent = alt;
        this.modal.classList.add('active');
    }
    
    closeLightbox() {
        this.modal.classList.remove('active');
    }
}

// ============================================
// Mobile Menu Toggle (if needed)
// ============================================
class MobileMenuHandler {
    constructor() {
        this.handleMobileMenu();
    }
    
    handleMobileMenu() {
        // Close menu on link click
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                // Automatically close any mobile menu if it exists
            });
        });
    }
}

// ============================================
// Initialize All on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle background
    new ParticleBackground();
    
    // Initialize scroll animations
    new ScrollAnimationObserver();
    
    // Initialize smooth scroll
    new SmoothScrollHandler();
    
    // Initialize navbar highlight
    new NavbarHighlight();
    
    // Initialize lazy loading
    new LazyImageLoader();
    
    // Initialize gallery lightbox
    new GalleryLightbox();
    
    // Initialize mobile menu handler
    new MobileMenuHandler();
    
    console.log('MAKTUB - Love Story Website Loaded Successfully');
});

// ============================================
// Performance Optimization - Debounce
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Window Resize Handler
// ============================================
window.addEventListener('resize', debounce(() => {
    // Handle any resize-related updates
}, 250));

// ============================================
// Keyboard Navigation
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('lightbox-modal');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    }
});
