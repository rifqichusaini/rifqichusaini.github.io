// Matrix Rain Effect
function initMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 35);
}

// Cursor Glow Effect
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = (e.clientX - 10) + 'px';
        cursorGlow.style.top = (e.clientY - 10) + 'px';
    });
}

// Smooth Navigation
function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Typing Effect
function typeWriter(element, text, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Alternating Typing Effect
function alternatingTypeWriter(element, texts, speed = 100) {
    let currentTextIndex = 0;
    
    function typeText(text, callback) {
        element.innerHTML = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                setTimeout(callback, 2000); // Wait 2 seconds before callback
            }
        }
        type();
    }
    
    function eraseText(callback) {
        const currentText = element.innerHTML;
        let i = currentText.length;
        function erase() {
            if (i > 0) {
                element.innerHTML = currentText.substring(0, i - 1);
                i--;
                setTimeout(erase, speed / 2);
            } else if (callback) {
                setTimeout(callback, 500); // Wait 0.5 seconds before callback
            }
        }
        erase();
    }
    
    function cycle() {
        const currentText = texts[currentTextIndex];
        typeText(currentText, () => {
            eraseText(() => {
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                cycle();
            });
        });
    }
    
    cycle();
}

// Terminal Command Simulation
function simulateTerminalCommands() {
    const terminals = document.querySelectorAll('.terminal-content');
    terminals.forEach((terminal, index) => {
        setTimeout(() => {
            terminal.style.opacity = '0';
            terminal.style.transform = 'translateY(20px)';
            terminal.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                terminal.style.opacity = '1';
                terminal.style.transform = 'translateY(0)';
            }, 200);
        }, index * 500);
    });
}

// Glitch Effect for Cards
function initGlitchEffects() {
    const cards = document.querySelectorAll('.hack-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        card.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

// Add glitch keyframes
const glitchKeyframes = `
    @keyframes glitch {
        0% { transform: translateX(0); }
        20% { transform: translateX(-2px); }
        40% { transform: translateX(2px); }
        60% { transform: translateX(-1px); }
        80% { transform: translateX(1px); }
        100% { transform: translateX(0); }
    }
`;

// Initialize all effects
document.addEventListener('DOMContentLoaded', function() {
    // Add glitch keyframes to stylesheet
    const style = document.createElement('style');
    style.textContent = glitchKeyframes;
    document.head.appendChild(style);

    initMatrix();
    initCursorGlow();
    initNavigation();
    initGlitchEffects();
    
    // Initialize typing effect with alternating text
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero h1');
        alternatingTypeWriter(heroTitle, ['RIFQI CHUSAINI', 'CYBER SECURITY ENTHUSIAST'], 80);
    }, 1000);

    setTimeout(() => {
        simulateTerminalCommands();
    }, 2000);
});

// Resize canvas on window resize
window.addEventListener('resize', function() {
    const canvas = document.getElementById('matrixCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Add random glitch effects to text elements
setInterval(() => {
    const textElements = document.querySelectorAll('h2, h3');
    const randomElement = textElements[Math.floor(Math.random() * textElements.length)];
    if (randomElement && Math.random() < 0.1) {
        randomElement.style.textShadow = '2px 0 #ff0040, -2px 0 #00ffff';
        setTimeout(() => {
            randomElement.style.textShadow = '';
        }, 100);
    }
}, 3000);