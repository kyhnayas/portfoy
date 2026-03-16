import type { Metadata } from 'next';
import styles from './design3d.module.css';

export const metadata: Metadata = {
  title: '3D Tasarım & İç Mekan Görselleştirme | Sakarya & İstanbul',
  description:
    'Sakarya ve İstanbul merkezli profesyonel 3D tasarım ve iç mekan görselleştirme hizmeti. Blender ile fotogerçekçi mimari render, ürün animasyonu ve iç mimari tasarım.',
  keywords:
    'sakarya 3d tasarım, istanbul 3d tasarım, iç mekan tasarımı sakarya, mimari görselleştirme, blender render, 3d iç mimari, sakarya iç mekan tasarımı, istanbul iç mimari, 3d animasyon türkiye',
  alternates: { canonical: 'https://design3d.kayhanayas.com' },
  openGraph: {
    title: '3D Tasarım & İç Mekan Görselleştirme | Kayhan Ayas',
    description: 'Blender ile fotogerçekçi 3D iç mekan tasarımı ve mimari görselleştirme. Sakarya ve İstanbul hizmeti.',
    url: 'https://design3d.kayhanayas.com',
  },
};

const specialties = [
  {
    icon: '◈',
    title: 'İç Mekan Görselleştirme',
    desc: 'Mimari projenizi hayata geçirmeden önce fotogerçekçi 3D render ile nasıl görüneceğini keşfedin. Sakarya ve İstanbul\'daki mimarlık firmalarına özel hizmet.',
  },
  {
    icon: '◉',
    title: 'Mimari Render',
    desc: 'Konut, ticari ve endüstriyel yapılar için dış cephe ve çevre düzenlemesi dahil kapsamlı mimari görselleştirme.',
  },
  {
    icon: '◐',
    title: 'Ürün Animasyonu',
    desc: 'Ürününüzü en iyi açıdan gösteren 3D animasyon ve turntable render. E-ticaret ve marka sunumları için ideal.',
  },
  {
    icon: '◇',
    title: 'Blender Danışmanlık',
    desc: 'Blender yazılımı konusunda eğitim ve proje danışmanlığı. Bireyler ve firmalar için özelleştirilmiş programlar.',
  },
];

export default function Design3DPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <a href="https://kayhanayas.com" className={styles.navBack}>
          ← kayhanayas.com
        </a>
        <span className={styles.navBadge}>3D Tasarım & Görselleştirme</span>
      </nav>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Blender · Sakarya · İstanbul</p>
        <h1 className={styles.heroTitle}>
          Fikirleri<br />
          <em>Gerçeğe Dönüştür</em>
        </h1>
        <p className={styles.heroBio}>
          Blender ile üretilen fotogerçekçi 3D iç mekan tasarımları, mimari renderlar ve ürün
          görselleştirmeleri. Sakarya merkezli, İstanbul dahil Türkiye genelinde hizmet.
        </p>
        <div className={styles.heroCtas}>
          <a href="mailto:hello@kayhanayas.com" className={styles.cta}>
            Proje Teklifi Al
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
          <span className={styles.ctaNote}>Portföy yakında · Çalışmalar ekleniyor</span>
        </div>
      </section>

      <section className={styles.specialties}>
        {specialties.map((s) => (
          <div key={s.title} className={styles.specialty}>
            <span className={styles.specialtyIcon}>{s.icon}</span>
            <div>
              <h2 className={styles.specialtyTitle}>{s.title}</h2>
              <p className={styles.specialtyDesc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.portfolio}>
        <div className={styles.portfolioHeader}>
          <h2 className={styles.portfolioTitle}>Portföy</h2>
          <span className={styles.portfolioStatus}>Çalışmalar ekleniyor…</span>
        </div>
        <div className={styles.portfolioGrid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={styles.portfolioItem}>
              <div className={styles.portfolioPlaceholder}>
                <span>3D ·{i.toString().padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Kayhan Ayas · 3D Tasarım</span>
        <a href="mailto:hello@kayhanayas.com">hello@kayhanayas.com</a>
      </footer>
    </main>
  );
}
