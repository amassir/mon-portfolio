import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useLocale } from '@/lib/LocaleProvider';

interface Formation {
  degree: string;
  school: string;
  period: string;
  details: string;
}

const parcoursFR: Formation[] = [
  {
    degree: 'Master MIAGE — Méthodes Informatiques Appliquées à la Gestion des Entreprises',
    school: 'Université Paul Sabatier, Toulouse',
    period: 'Septembre 2025 – Août 2027',
    details: 'Parcours ITN (Ingénierie de Transformation Numérique)',
  },
  {
    degree: 'Licence MIAGE — Méthodes Informatiques Appliquées à la Gestion des Entreprises',
    school: 'Université Paul Sabatier, Toulouse',
    period: 'Septembre 2022 – Août 2025',
    details: '',
  },
];

const parcoursEN: Formation[] = [
  {
    degree: 'Master MIAGE — Computer Methods Applied to Business Management',
    school: 'Université Paul Sabatier, Toulouse',
    period: 'September 2025 – August 2027',
    details: 'ITN track (Digital Transformation Engineering)',
  },
  {
    degree: 'Bachelor MIAGE — Computer Methods Applied to Business Management',
    school: 'Université Paul Sabatier, Toulouse',
    period: 'September 2022 – August 2025',
    details: '',
  },
];

const ParcoursSection = () => {
  const { t, locale } = useLocale();

  const parcours = locale === 'en' ? parcoursEN : parcoursFR;

  return (
    <section id="parcours" className="section-padding relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('parcours_title').split(' ')[0]} <span className="text-gradient">{t('parcours_title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('parcours_sub')}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {parcours.map((p, i) => (
              <motion.div
                key={p.degree}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <GraduationCap className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-semibold mb-1">{p.degree}</div>
                  <div className="text-muted-foreground text-sm mb-1">{p.school}</div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
                    <Calendar size={12} />
                    {p.period}
                  </div>
                  {p.details && (
                    <div className="text-xs text-primary mt-1">{p.details}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParcoursSection;
