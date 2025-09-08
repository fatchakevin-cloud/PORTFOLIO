// React Components pour le Portfolio - Ultra Moderne
import React, { useState, useEffect, useRef } from 'react';

// Composant de compétences interactif
export const InteractiveSkills = () => {
    const [activeSkill, setActiveSkill] = useState(null);
    const [skills] = useState([
        {
            id: 1,
            category: "Développement Web",
            icon: "fas fa-code",
            color: "#ff6b6b",
            skills: [
                { name: "HTML/CSS", level: 95, color: "#ff6b6b" },
                { name: "JavaScript", level: 90, color: "#4ecdc4" },
                { name: "React", level: 85, color: "#45b7d1" },
                { name: "Node.js", level: 80, color: "#feca57" }
            ]
        },
        {
            id: 2,
            category: "Cybersécurité",
            icon: "fas fa-shield-alt",
            color: "#4ecdc4",
            skills: [
                { name: "Analyse de vulnérabilités", level: 90, color: "#4ecdc4" },
                { name: "Sécurité des applications", level: 85, color: "#45b7d1" },
                { name: "Tests d'intrusion", level: 80, color: "#feca57" },
                { name: "Gestion des risques", level: 85, color: "#ff9ff3" }
            ]
        },
        {
            id: 3,
            category: "Autres Compétences",
            icon: "fas fa-server",
            color: "#45b7d1",
            skills: [
                { name: "Python", level: 85, color: "#45b7d1" },
                { name: "Bases de données", level: 80, color: "#96ceb4" },
                { name: "Git & GitHub", level: 90, color: "#feca57" },
                { name: "DevOps", level: 75, color: "#ff9ff3" }
            ]
        }
    ]);

    return (
        <div className="skills-container">
            {skills.map((category) => (
                <div 
                    key={category.id}
                    className={`skill-category hover-lift hover-glow scroll-reveal ${activeSkill === category.id ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSkill(category.id)}
                    onMouseLeave={() => setActiveSkill(null)}
                    style={{
                        borderColor: activeSkill === category.id ? category.color : 'transparent',
                        transform: activeSkill === category.id ? 'translateY(-15px) scale(1.05)' : 'translateY(0) scale(1)',
                        boxShadow: activeSkill === category.id ? `0 30px 60px ${category.color}40` : '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <h3 style={{ color: category.color }}>
                        <i className={category.icon}></i> {category.category}
                    </h3>
                    {category.skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-header">
                                <span>{skill.name}</span>
                                <span style={{ color: skill.color }}>{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div 
                                    className="skill-progress"
                                    data-width={`${skill.level}%`}
                                    style={{
                                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                                        width: activeSkill === category.id ? `${skill.level}%` : '0%',
                                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: `0 0 20px ${skill.color}60`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

// Composant de projets interactif
export const InteractiveProjects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [projects] = useState([
        {
            id: 1,
            title: "Plateforme E-commerce",
            description: "Application web complète avec React, Node.js et MongoDB. Système de paiement sécurisé et interface utilisateur moderne.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            color: "#ff6b6b",
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Dashboard de Sécurité",
            description: "Interface de monitoring en temps réel pour la cybersécurité avec alertes automatiques et visualisation des menaces.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Python", "Django", "WebSocket", "Chart.js"],
            color: "#4ecdc4",
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Portfolio Personnel",
            description: "Site web portfolio responsive avec animations CSS avancées et design moderne. Optimisé pour les performances.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            color: "#45b7d1",
            github: "#",
            demo: "#"
        }
    ]);

    return (
        <div className="projects-grid">
            {projects.map((project) => (
                <div 
                    key={project.id}
                    className={`project-card hover-lift card-3d scroll-reveal ${hoveredProject === project.id ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{
                        borderColor: hoveredProject === project.id ? project.color : 'transparent',
                        transform: hoveredProject === project.id ? 'translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.05)' : 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)',
                        boxShadow: hoveredProject === project.id ? `0 30px 60px ${project.color}40` : '0 20px 40px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <div className="card-inner">
                        <div className="project-image hover-shimmer">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a 
                                        href={project.demo} 
                                        className="project-link hover-elastic-bounce"
                                        style={{ backgroundColor: project.color }}
                                    >
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                    <a 
                                        href={project.github} 
                                        className="project-link hover-elastic-bounce"
                                        style={{ backgroundColor: project.color }}
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3 style={{ color: project.color }}>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="project-tag"
                                    style={{ 
                                        backgroundColor: `${project.color}20`,
                                        color: project.color,
                                        border: `1px solid ${project.color}40`
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Composant de particules animées
export const AnimatedParticles = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create particles
        const createParticles = () => {
            particlesRef.current = [];
            for (let i = 0; i < 50; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    size: Math.random() * 3 + 1,
                    color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        createParticles();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particlesRef.current.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();
            });
            
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

// Composant de typewriter avancé
export const AdvancedTypewriter = ({ texts, speed = 100 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const current = texts[textIndex];
            
            if (isDeleting) {
                setCurrentText(current.substring(0, currentText.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % texts.length);
                }
            } else {
                setCurrentText(current.substring(0, currentText.length + 1));
                if (currentText === current) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex, texts, speed]);

    return (
        <div className="typewriter">
            <span className="text-glow">
                {currentText}
                <span className="animate-typewriter-cursor">|</span>
            </span>
        </div>
    );
};

// Composant de statistiques animées
export const AnimatedStats = ({ stats }) => {
    const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({ ...stat, current: 0 })));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.querySelector('.hero-stats');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            animatedStats.forEach((stat, index) => {
                const duration = 2000;
                const increment = stat.value / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.value) {
                        current = stat.value;
                        clearInterval(timer);
                    }
                    
                    setAnimatedStats(prev => 
                        prev.map((s, i) => 
                            i === index ? { ...s, current: Math.floor(current) } : s
                        )
                    );
                }, 16);
            });
        }
    }, [isVisible]);

    return (
        <div className="hero-stats">
            {animatedStats.map((stat, index) => (
                <div key={index} className="stat-item hover-lift animate-elastic-bounce">
                    <div className="stat-number text-gradient">
                        {stat.current}{stat.suffix}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default {
    InteractiveSkills,
    InteractiveProjects,
    AnimatedParticles,
    AdvancedTypewriter,
    AnimatedStats
};

