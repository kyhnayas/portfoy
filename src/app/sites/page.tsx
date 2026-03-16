import type { Metadata } from 'next';
import styles from './sites.module.css';

export const metadata: Metadata = {
  title: 'Kurumsal Web Sitesi | Sakarya & İstanbul Web Tasarım',
  description:
    'Sakarya ve İstanbul merkezli profesyonel kurumsal web sitesi geliştirme. Next.js ile hızlı, SEO uyumlu, modern web siteleri. İşletmeniz için dijital çözümler.',
  keywords:
    'sakarya web tasarımı, istanbul web tasarımı, kurumsal web sitesi, nextjs web geliştirme, web site fiyatları, seo uyumlu web sitesi, sakarya web geliştirici',
  alternates: { canonical: 'https://sites.kayhanayas.com' },
  openGraph: {
    title: 'Kurumsal Web Sitesi | Kayhan Ayas - Sakarya & İstanbul',
    description:
      'Profesyonel web sitesi geliştirme hizmeti. Sakarya ve İstanbul genelinde işletmeler için modern, hızlı ve SEO uyumlu web siteleri.',
    url: 'https://sites.kayhanayas.com',
  },
};

const packages = [
  {
    name: 'Başlangıç',
    price: 'İletişime Geç',
    desc: 'Küçük işletmeler için hızlı, modern ve SEO uyumlu tek sayfalık web sitesi.',
    features: ['Tek sayfa tasarım', 'Mobil uyumlu', 'Temel SEO', 'İletişim formu', '1 ay destek'],
    highlight: false,
  },
  {
    name: 'Profesyonel',
    price: 'İletişime Geç',
    desc: 'Kurumsal firmalar için çok sayfalı, içerik yönetilebilir, gelişmiş SEO optimizasyonlu site.',
    features: ['Çok sayfa', 'Blog / Haber', 'Gelişmiş SEO', 'Google Analytics', 'Admin panel', '3 ay destek'],
    highlight: true,
  },
  {
    name: 'E-Ticaret',
    price: 'İletişime Geç',
    desc: 'Online satış yapmak isteyen işletmeler için tam entegre e-ticaret çözümü.',
    features: ['Ürün yönetimi', 'Ödeme entegrasyonu', 'Stok takibi', 'SEO + Reklam altyapısı', '6 ay destek'],
    highlight: false,
  },
];

export default function SitesPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <a href="https://kayhanayas.com" className={styles.navBack}>
          ← kayhanayas.com
        </a>
        <span className={styles.navBadge}>Web Tasarım & Geliştirme</span>
      </nav>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Sakarya · İstanbul · Türkiye</p>
        <h1 className={styles.heroTitle}>
          İşletmeniz için<br />
          <em>Profesyonel Web Sitesi</em>
        </h1>
        <p className={styles.heroBio}>
          Next.js teknolojisiyle geliştirilen web siteleri; hız, güvenlik ve SEO açısından rakipsiz.
          Sakarya'dan İstanbul'a, Türkiye genelinde kurumsal çözümler sunuyorum.
        </p>
        <a href="mailto:hello@kayhanayas.com" className={styles.cta}>
          Ücretsiz Teklif Al
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </section>

      <section className={styles.packages}>
        {packages.map((pkg) => (
          <div key={pkg.name} className={`${styles.package} ${pkg.highlight ? styles.packageHighlight : ''}`}>
            {pkg.highlight && <span className={styles.badge}>Popüler</span>}
            <h2 className={styles.pkgName}>{pkg.name}</h2>
            <p className={styles.pkgDesc}>{pkg.desc}</p>
            <ul className={styles.pkgFeatures}>
              {pkg.features.map((f) => (
                <li key={f}>
                  <span className={styles.check}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="mailto:hello@kayhanayas.com" className={styles.pkgCta}>
              {pkg.price}
            </a>
          </div>
        ))}
      </section>

      <section className={styles.trust}>
        <div className={styles.trustItem}>
          <span className={styles.trustNum}>5+</span>
          <span className={styles.trustLabel}>Yıl Deneyim</span>
        </div>
        <div className={styles.trustDivider} />
        <div className={styles.trustItem}>
          <span className={styles.trustNum}>100%</span>
          <span className={styles.trustLabel}>Müşteri Memnuniyeti</span>
        </div>
        <div className={styles.trustDivider} />
        <div className={styles.trustItem}>
          <span className={styles.trustNum}>TR</span>
          <span className={styles.trustLabel}>Sakarya · İstanbul</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Kayhan Ayas</span>
        <a href="mailto:hello@kayhanayas.com">hello@kayhanayas.com</a>
      </footer>
    </main>
  );
}
