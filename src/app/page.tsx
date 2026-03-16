import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";
import styles from "./page.module.css";
import WorkSection from "./WorkSection";
import IletisimFormu from "./IletisimFormu";

export default function HomePage() {
  const { frontmatter: p, content: bio } =
    getMarkdownContent("profile/index.md");
  const { frontmatter: s } = getMarkdownContent("services/index.md");

  return (
    <div className={styles.root}>
      {/* NAV */}
      <nav className={styles.nav}>
        <a href="/" className={styles.navLogo}>
          <span className={styles.logoBox}>KA</span>
          <span className={styles.logoSuffix}>YHAN AYAS</span>
        </a>
        <ul className={styles.navLinks}>
          <li>
            <a href="#hakkinda">{p.navHakkinda || "Hakkımda"}</a>
          </li>
          <li>
            <a href="#calisma">{p.navCalisma || "Çalışmalar"}</a>
          </li>
          <li>
            <a href="#iletisim">{p.navIletisim || "İletişim"}</a>
          </li>
        </ul>
        <div className={styles.navInfo}>
          <span>{p.location}</span>
          <span className={styles.navDivider}>/</span>
          <span>Art Dir. · 3D · Web</span>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <div className={styles.heroBadge}>
            <span>{p.heroBadgeText || "PORTFÖY"}</span>
            <span className={styles.heroBadgeYear}>
              {p.heroBadgeYear || "2024 — 2025"}
            </span>
          </div>
          <span className={styles.heroSub}>
            {p.heroSubtext || "DİJİTAL DENEYİMLER YARATIYORUM"}
          </span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroLine1}>
            {p.heroLine1 || "GERÇEK DEĞER"}
          </span>
          <span className={styles.heroLine2}>
            <span className={styles.heroPill}>KAYHAN AYAS</span>
            <em className={styles.heroEm}>{p.heroLine2 || "BENZERSİZLİKTE"}</em>
          </span>
        </h1>
      </section>

      {/* HAKKIMDA */}
      <section className={styles.about} id="hakkinda">
        <div className={styles.aboutGrid}>
          {/* Sol — profil fotoğrafı */}
          <div className={styles.aboutPhoto}>
            <Image
              src={p.profileImage || "/images/kayhan.png"}
              alt={`${p.name} - Art Direktör, 3D Tasarımcı, Sakarya`}
              fill
              priority
              quality={75}
              loading="eager"
              decoding="async"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className={styles.aboutPhotoImg}
            />
          </div>

          {/* Sağ — bio + istatistikler */}
          <div className={styles.aboutContent}>
            <div className={styles.aboutSectionHead}>
              <span className={styles.sectionLabel}>
                {p.aboutLabel || "Hakkımda"}
              </span>
              <ArrowIcon />
            </div>
            <div className={styles.aboutBio}>
              <p>{bio.trim()}</p>
            </div>
            <div className={styles.aboutTags}>
              <span>{p.aboutTag1 || "WEB TASARIM"}</span>
              <span>{p.aboutTag2 || "3D TASARIM"}</span>
              <span>{p.aboutTag3 || "ART DİREKTÖR"}</span>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <span className={styles.statN}>{p.stat1Value || "5+"}</span>
                <span className={styles.statL}>
                  {p.stat1Label || "Yıl Deneyim"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statN}>{p.stat2Value || "50+"}</span>
                <span className={styles.statL}>
                  {p.stat2Label || "Tamamlanan Proje"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statN}>{p.stat3Value || "TR"}</span>
                <span className={styles.statL}>
                  {p.stat3Label || "Sakarya · İstanbul"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÇALIŞMALAR */}
      <WorkSection
        label={p.workLabel || "Çalışmalar"}
        years={p.workYears || "2021–2025"}
        intro={
          p.workIntro ||
          "Zamanınızın değerli olduğunu biliyorum — tasarım ve geliştirmenin tüm yükünü omuzlayarak sizi serbest bırakırım."
        }
      />

      {/* HİZMETLER */}
      <section className={styles.services} id="hizmetler">
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>
            {s.servicesLabel || "Hizmetler"}
          </span>
          <ArrowIcon />
        </div>
        <p className={styles.servicesIntro}>{s.servicesIntro}</p>
        <div className={styles.sCards}>
          <a
            href={s.webLink}
            className={styles.sCard}
            target="_blank"
            rel="noopener"
          >
            <span className={styles.sCardEye}>
              {s.webEyebrow || "Ürün Vitrini"}
            </span>
            <h3 className={styles.sCardTitle}>{s.webTitle}</h3>
            <p className={styles.sCardDesc}>{s.webDesc}</p>
          </a>
          <div className={styles.sCardQuote}>
            <p>&ldquo;{s.quoteText}&rdquo;</p>
            <a href="#iletisim" className={styles.sCardBtn}>
              {s.quoteBtn || "İletişime Geç"}
            </a>
            <span className={styles.sCardQSub}>
              {s.quoteSub || "Özgün kimlikler yaratıyoruz"}
            </span>
          </div>
          <a
            href={s.design3dLink}
            className={`${styles.sCard} ${styles.sCardDark}`}
            target="_blank"
            rel="noopener"
          >
            <span className={styles.sCardEye}>
              {s.design3dEyebrow || "3D Portföy"}
            </span>
            <h3 className={styles.sCardTitle}>{s.design3dTitle}</h3>
            <p className={styles.sCardDesc}>{s.design3dDesc}</p>
          </a>
        </div>
      </section>

      {/* BÜYÜK SAYI */}
      <div className={styles.bigNum}>
        <span className={styles.bigNumVal}>{p.stat2Value || "50"}+</span>
        <div className={styles.bigNumCaption}>
          <p>Tamamlanan proje sayısı</p>
          <p>ve büyümeye devam ediyor.</p>
        </div>
      </div>

      {/* CALL TO ACTION — Kendi sitenizi oluşturun */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaEyebrow}>
            {p.ctaEyebrow || "Siz de hazır mısınız?"}
          </span>
          <h2 className={styles.ctaTitle}>
            {(p.ctaTitle || "Kendi Sitenizi\nBirlikte Yapalım")
              .split("\n")
              .map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
          </h2>
          <p className={styles.ctaDesc}>
            {p.ctaDesc ||
              "Web siteniz, markanızın dijital yüzüdür. Modern, hızlı ve akılda kalıcı bir site için hemen iletişime geçin."}
          </p>
          <div className={styles.ctaActions}>
            <a
              href={p.ctaButtonLink || `mailto:${p.email}`}
              className={styles.ctaButton}
            >
              {p.ctaButtonText || "Projenizi Başlatalım"}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <span className={styles.ctaNote}>
              {p.ctaNote || "Ücretsiz ön görüşme · 24 saat içinde yanıt"}
            </span>
          </div>
        </div>
        <div className={styles.ctaDeco} aria-hidden="true">
          <span>KA</span>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section className={styles.contact} id="iletisim">
        <div className={styles.contactHeader}>
          <div>
            <span className={styles.contactEye}>
              {p.contactEyebrow || "Başlayalım"}
            </span>
            <h2 className={styles.contactTitle}>
              {p.contactTitle || "Projenizi Konuşalım"}
            </h2>
          </div>
          <a href={`mailto:${p.email}`} className={styles.contactMail}>
            {p.email}
          </a>
        </div>
        <IletisimFormu />
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <a href="/" className={styles.footerLogo}>
          <span className={styles.logoBox}>KA</span>
          <span className={styles.logoSuffix}>YHAN AYAS</span>
        </a>
        <nav className={styles.footerNav}>
          <a href={p.footerNav1Link || "#calisma"}>
            {p.footerNav1 || "Çalışmalar"}
          </a>
          <a href={p.footerNav2Link || "#hakkinda"}>
            {p.footerNav2 || "Hakkımda"}
          </a>
          <a href={p.footerNav3Link || "#iletisim"}>
            {p.footerNav3 || "İletişim"}
          </a>
        </nav>
        <div className={styles.footerSocial}>
          <a
            href={p.behanceUrl || "https://www.behance.net/kayhanayas"}
            target="_blank"
            rel="noopener"
          >
            Behance
          </a>
          <a
            href={p.linkedinUrl || "https://www.linkedin.com/in/kayhanayas"}
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          <a
            href={p.instagramUrl || "https://www.instagram.com/kyhnayas"}
            target="_blank"
            rel="noopener"
          >
            Instagram
          </a>
        </div>
        <div className={styles.footerMeta}>
          <span>{p.email}</span>
          <span>{p.footerTagline || "Art Direktör · Sakarya, Türkiye"}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
