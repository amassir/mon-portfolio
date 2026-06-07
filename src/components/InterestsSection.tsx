import { Dumbbell, Cpu, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useClickSound } from '@/hooks/useClickSound';
import { useLocale } from '@/lib/LocaleProvider';

interface Interest {
  name: string;
  details: string;
  icon: React.ElementType;
}

interface Language {
  name: string;
  level: string;
}

const interestsFR: Interest[] = [
  { name: 'Sport', details: 'Football, Musculation', icon: Dumbbell },
  { name: 'Nouvelles technologies', details: 'IA, Big Data', icon: Cpu },
];

const interestsEN: Interest[] = [
  { name: 'Sport', details: 'Football, Weightlifting', icon: Dumbbell },
  { name: 'New Technologies', details: 'AI, Big Data', icon: Cpu },
];

const languagesFR: Language[] = [
  { name: 'Français', level: 'Bilingue' },
  { name: 'Anglais', level: 'Avancé — C1' },
];

const languagesEN: Language[] = [
  { name: 'French', level: 'Bilingual' },
  { name: 'English', level: 'Advanced — C1' },
];

const InterestsSection = () => {
  const { playClick } = useClickSound();
  const { t, locale } = useLocale();

  const interests = locale === 'en' ? interestsEN : interestsFR;
  const languages = locale === 'en' ? languagesEN : languagesFR;
  const languagesTitle = locale === 'en' ? 'Languages' : 'Langues';

  return (
    <section id="interests" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('interests_title').split(' ')[0]} <span className="text-gradient">{t('interests_title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('interests_sub')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mt-4" />
          </div>
        </AnimatedSection>

        {/* Interests */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {interests.map((interest, index) => (
            <AnimatedSection key={interest.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={playClick}
                className="glass rounded-xl p-6 text-center cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <interest.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-display font-semibold text-lg mb-1">{interest.name}</h3>
                <p className="text-muted-foreground text-sm">{interest.details}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Languages */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <Languages className="w-5 h-5 text-primary" />
              {languagesTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-xl p-4 flex items-center justify-between"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-primary font-medium">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InterestsSection;
