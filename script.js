// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      startBootSequence();
    }, 600);
  }
});

// ===== BOOT SEQUENCE — staggered line reveal =====
function startBootSequence() {
  const bootLines = document.querySelectorAll('#boot_sequence .boot-line');
  bootLines.forEach((line) => {
    const delay = parseInt(line.dataset.delay, 10) || 0;
    setTimeout(() => {
      line.classList.add('visible');
    }, delay);
  });
}

// ===== SCROLL REVEAL — fade in as "command output" =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menu_toggle');
const navLinks = document.getElementById('nav_links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = menuToggle.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  });
});

// ===== GREEN/AMBER CRT MODE TOGGLE =====
const themeToggle = document.getElementById('theme_toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'amber') {
  document.body.classList.add('amber');
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('amber');
  const isAmber = document.body.classList.contains('amber');
  localStorage.setItem('portfolio-theme', isAmber ? 'amber' : 'green');
});

// ===== TYPING EFFECT — terminal style =====
const typingEl = document.getElementById('typing_text');
const roles = ['Computer Engineer', 'ML Engineer', 'IoT Security Researcher', 'Full-Stack Developer'];
let roleIdx = 0, charIdx = 0, deleting = false;
function typeEffect() {
  const current = roles[roleIdx];
  if (!deleting) {
    typingEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      setTimeout(() => { deleting = true; typeEffect(); }, 2500);
      return;
    }
  } else {
    typingEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, deleting ? 30 : 70);
}
setTimeout(typeEffect, 2000);

// ===== ANIMATED COUNTERS — rapid terminal counting =====
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = 'true';
      const target = parseFloat(e.target.dataset.count);
      const suffix = e.target.dataset.suffix || '';
      const isFloat = target % 1 !== 0;
      let current = 0;
      const step = target / 40; // faster counting
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        e.target.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      }, 15);
    }
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== CONTACT FORM FEEDBACK =====
const contactForm = document.getElementById('contact_form');
const formFeedback = document.getElementById('form_feedback');
const submitBtn = document.getElementById('submit_btn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-submit-text').textContent = '$ sending...';
    submitBtn.querySelector('.btn-submit-icon').textContent = '⏳';
    
    formFeedback.className = 'form-feedback';
    formFeedback.textContent = '';
    
    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        formFeedback.textContent = '[OK] Message sent successfully. Awaiting response...';
        formFeedback.className = 'form-feedback success show';
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      formFeedback.textContent = '[ERR] Transmission failed. Try direct email.';
      formFeedback.className = 'form-feedback error show';
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-submit-text').textContent = '$ send_message';
      submitBtn.querySelector('.btn-submit-icon').textContent = '⏎';
    }
  });
}

// ===== GLITCH TEXT EFFECT ON CMD HEADERS =====
document.querySelectorAll('.cmd-header').forEach(header => {
  header.addEventListener('mouseenter', () => {
    header.style.animation = 'glitch-1 0.3s ease';
    setTimeout(() => { header.style.animation = ''; }, 300);
  });
});

// ===== RANDOM CRT SCREEN FLICKER =====
function randomFlicker() {
  const body = document.body;
  const flickerChance = Math.random();
  if (flickerChance < 0.03) { // 3% chance per tick
    body.style.opacity = '0.97';
    setTimeout(() => {
      body.style.opacity = '1';
    }, 50 + Math.random() * 100);
  }
  setTimeout(randomFlicker, 3000 + Math.random() * 5000);
}
setTimeout(randomFlicker, 5000);

// ===== TERMINAL-STYLE CURRENT TIME IN CONSOLE =====
console.log('%c╔══════════════════════════════════╗', 'color: #00ff41');
console.log('%c║  Ahmad Ismail — Portfolio v2.0   ║', 'color: #00ff41; font-weight: bold');
console.log('%c║  github.com/A7medico             ║', 'color: #00ff41');
console.log('%c╚══════════════════════════════════╝', 'color: #00ff41');
