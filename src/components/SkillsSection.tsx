import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useLocale } from '@/lib/LocaleProvider';

interface SkillCategory {
  category: string;
  items: string[];
}

const skillsFR: SkillCategory[] = [
  { category: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Bootstrap', 'PHP'] },
  { category: 'Programmation', items: ['Java', 'Python', 'C', 'C++', 'SQL'] },
  { category: 'Frameworks Front', items: ['React', 'Angular', 'Vue.js'] },
  { category: 'Frameworks Back', items: ['Spring Boot', 'Express.js', 'Laravel'] },
  { category: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Neo4J'] },
  { category: 'Microsoft Power Platform', items: ['PowerApps', 'Power Automate', 'Power BI'] },
  { category: 'Gestion de projets', items: ['Scrum', 'Jira'] },
  { category: 'Divers', items: ['Shell', 'Maven', 'Docker', 'Git', 'GitHub'] },
];

const skillsEN: SkillCategory[] = [
  { category: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Bootstrap', 'PHP'] },
  { category: 'Programming', items: ['Java', 'Python', 'C', 'C++', 'SQL'] },
  { category: 'Front-end Frameworks', items: ['React', 'Angular', 'Vue.js'] },
  { category: 'Back-end Frameworks', items: ['Spring Boot', 'Express.js', 'Laravel'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Neo4J'] },
  { category: 'Microsoft Power Platform', items: ['PowerApps', 'Power Automate', 'Power BI'] },
  { category: 'Project Management', items: ['Scrum', 'Jira'] },
  { category: 'Miscellaneous', items: ['Shell', 'Maven', 'Docker', 'Git', 'GitHub'] },
];

const SkillsSection = () => {
  const { t, locale } = useLocale();

  const skills = locale === 'en' ? skillsEN : skillsFR;

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('skills_title').split(' ')[0]} <span className="text-gradient">{t('skills_title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('skills_sub')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mt-4" />
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {skills.map((group, groupIndex) => (
            <AnimatedSection key={group.category} delay={groupIndex * 0.08}>
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      whileHover={{ scale: 1.06 }}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-sm hover-lift glow-sm transition-smooth"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
