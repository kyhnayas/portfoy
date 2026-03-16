import { getProjects } from '@/lib/markdown';
import styles from './page.module.css';

// Projeler artik src/content/projects/index.md dosyasindan okunuyor
// Yeni proje eklemek icin o dosyayi duzenle

function ProjectCard({ p, i }: {
  p: { title: string; tags: string; url: string; desktop: string; mobile: string };
  i: number;
}) {
  return (
    <a
      href={p.url}
      className={styles.projectRow}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Sol meta */}
      <div className={styles.projectMeta}>
        <span className={styles.projectNum}>0{i + 1}</span>
        <div>
          <strong className={styles.projectTitle}>{p.title}</strong>
          <em className={styles.projectTags}>{p.tags}</em>
        </div>
        <span className={styles.projectArrow}><ArrowIcon /></span>
      </div>

      {/* Sag mockuplar */}
      <div className={styles.projectMockups}>

        {/* Desktop — 16:9 sabit oran */}
        <div className={styles.desktopMock}>
          <div className={styles.desktopBar}>
            <span /><span /><span />
          </div>
          <div className={styles.desktopScreen}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.desktop}
              alt={`${p.title} masaustu gorunum`}
              className={styles.mockImgDesktop}
            />
          </div>
          <div className={styles.desktopFoot} />
        </div>

        {/* Telefon — 9:19.5 sabit oran */}
        <div className={styles.phoneMock}>
          <div className={styles.phoneCamera} />
          <div className={styles.phoneScreen}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.mobile}
              alt={`${p.title} mobil gorunum`}
              className={styles.mockImgPhone}
            />
          </div>
          <div className={styles.phoneHome} />
        </div>

      </div>
    </a>
  );
}

export default function WorkSection({
  label,
  years,
  intro,
}: {
  label: string;
  years: string;
  intro: string;
}) {
  const projects = getProjects();

  return (
    <section className={styles.work} id="calisma">
      <div className={styles.workTop}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>{label}</span>
          <ArrowIcon />
        </div>
        <span className={styles.workYear}>{years}</span>
      </div>
      <p className={styles.workIntro}>{intro}</p>
      <div className={styles.projectList}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
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
