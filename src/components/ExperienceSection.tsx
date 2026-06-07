import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useClickSound } from '@/hooks/useClickSound';
import { useLocale } from '@/lib/LocaleProvider';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  missions: string[];
}

const experiencesFR: Experience[] = [
  {
    title: 'Stagiaire Développeur Full-Stack',
    company: 'BPCE Solutions Informatiques',
    location: 'Toulouse',
    period: 'Avril 2025 – Août 2025',
    missions: [
      "Refonte d'une application de gestion documentaire bancaire au sein de l'équipe Infrastructure Éditique",
      'Conception de l\'architecture applicative 3 couches, diagrammes de séquence et modélisation de la base de données (MCD/MLD)',
      'Développement backend Spring Boot : API REST, entités JPA, services métier, tests automatisés avec Mockito',
      'Développement frontend Angular : interfaces de gestion et de suivi des références documentaires',
    ],
  },
  {
    title: 'Stagiaire Assistant Analyste de Données',
    company: 'Daher',
    location: 'Toulouse',
    period: 'Juin 2024 – Août 2024',
    missions: [
      'Participation à la digitalisation des processus internes au sein du service Supply Chain',
      'Conception de tableaux de bord interactifs sous Power BI pour le suivi des indicateurs de performance (KPI logistiques, délais fournisseurs...)',
      'Automatisation de flux de traitement de données via Power Automate (extraction, notifications, mises à jour récurrentes)',
      'Rédaction de requêtes SQL Server pour extraction, transformation et fiabilisation des données métier',
    ],
  },
];

const experiencesEN: Experience[] = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'BPCE Solutions Informatiques',
    location: 'Toulouse',
    period: 'April 2025 – August 2025',
    missions: [
      'Redesign of a banking document management application within the Éditique Infrastructure team',
      'Design of 3-layer application architecture, sequence diagrams and database modeling (MCD/MLD)',
      'Spring Boot backend development: REST API, JPA entities, business services, automated tests with Mockito',
      'Angular frontend development: management and tracking interfaces for document references',
    ],
  },
  {
    title: 'Data Analyst Assistant Intern',
    company: 'Daher',
    location: 'Toulouse',
    period: 'June 2024 – August 2024',
    missions: [
      'Participation in the digitalization of internal processes within the Supply Chain department',
      'Design of interactive Power BI dashboards for performance indicator tracking (logistics KPIs, supplier delays...)',
      'Automation of data processing flows via Power Automate (extraction, notifications, recurring updates)',
      'SQL Server query writing for extraction, transformation and reliability of business data',
    ],
  },
];

const ExperienceSection = () => {
  const { playClick } = useClickSound();
  const { t, locale } = useLocale();

  const experiences = locale === 'en' ? experiencesEN : experiencesFR;

  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('experience_title').split(' ')[0]} <span className="text-gradient">{t('experience_title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('experience_sub')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mt-4" />
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="relative pl-8 pb-12 last:pb-0">
                {index !== experiences.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-[11px] top-10 w-0.5 bg-gradient-to-b from-primary to-transparent"
                  />
                )}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center glow-sm"
                >
                  <Briefcase size={12} className="text-primary-foreground" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.995 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={playClick}
                  className="glass rounded-xl p-6 ml-4 cursor-pointer"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold text-xl">{exp.title}</h3>
                    <span className="text-primary font-medium">{exp.company}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.missions.map((mission, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {mission}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
