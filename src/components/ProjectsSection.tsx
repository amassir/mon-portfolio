import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useClickSound } from '@/hooks/useClickSound';
import { useLocale } from '@/lib/LocaleProvider';

import legaliaImg from '@/assert/Legalia.png';
import techloopImg from '@/assert/Techloop.png';
import mamysureImg from '@/assert/Mamysure.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  period?: string;
  image: string;
}

const projectsFR: Project[] = [
  {
    title: 'Legalia — Analyse de contrats d\'assurance par IA',
    description: 'Pipeline RAG qui vulgarise les clauses juridiques et identifie les risques pour les particuliers. Architecture microservices : API REST SpringBoot + service IA Python + interface split-screen Angular.',
    tech: ['SpringBoot', 'Python', 'Angular'],
    github: 'https://github.com/amassir/Legalia',
    period: 'Octobre 2025 – Avril 2026',
    image: legaliaImg,
  },
  {
    title: 'Techloop',
    description: 'Application web de gestion des missions et compétences du personnel. API REST Node.js/Express, système de recommandation semi-automatique et base de données MySQL.',
    tech: ['Angular', 'Node.js', 'MySQL'],
    github: 'https://github.com/amassir/techloop',
    image: techloopImg,
  },
  {
    title: 'MamySure',
    description: 'Application web dédiée au suivi des personnes âgées. Interface intuitive en HTML/CSS/JS, intégration Domoticz pour la gestion domotique à distance et base de données sécurisée.',
    tech: ['HTML', 'JavaScript', 'PHP', 'SQL'],
    github: 'https://github.com/amassir/Mamysure',
    image: mamysureImg,
  },
];

const projectsEN: Project[] = [
  {
    title: 'Legalia — AI-powered Insurance Contract Analysis',
    description: 'RAG pipeline that simplifies legal clauses and identifies risks for individuals. Microservices architecture: SpringBoot REST API + Python AI service + Angular split-screen interface.',
    tech: ['SpringBoot', 'Python', 'Angular'],
    github: 'https://github.com/amassir/Legalia',
    period: 'October 2025 – April 2026',
    image: legaliaImg,
  },
  {
    title: 'Techloop',
    description: 'Web application for managing staff missions and skills. Node.js/Express REST API, semi-automatic recommendation system and MySQL database.',
    tech: ['Angular', 'Node.js', 'MySQL'],
    github: 'https://github.com/amassir/techloop',
    image: techloopImg,
  },
  {
    title: 'MamySure',
    description: 'Web application dedicated to monitoring elderly people. Intuitive HTML/CSS/JS interface, Domoticz integration for remote home automation control and secure database.',
    tech: ['HTML', 'JavaScript', 'PHP', 'SQL'],
    github: 'https://github.com/amassir/Mamysure',
    image: mamysureImg,
  },
];

const ProjectsSection = () => {
  const { playClick, } = useClickSound();
  const { t, locale } = useLocale();

  const projects = locale === 'en' ? projectsEN : projectsFR;

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('projects_title').split(' ')[0]} <span className="text-gradient">{t('projects_title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('projects_sub')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mt-4" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.03, y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-2xl overflow-hidden h-full group cursor-pointer hover-lift glow-sm ring-1 ring-primary/10 flex flex-col"
                onClick={playClick}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.period && (
                        <p className="text-xs text-muted-foreground mt-1">{project.period}</p>
                      )}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => { e.stopPropagation(); playClick(); }}
                      className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10 ml-2 shrink-0"
                    >
                      <Github size={18} />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
