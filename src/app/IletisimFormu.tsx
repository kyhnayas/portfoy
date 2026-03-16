'use client';

import { useState } from 'react';
import styles from './IletisimFormu.module.css';

type FormDurumu = 'bos' | 'gonderiliyor' | 'basarili' | 'hata';

export default function IletisimFormu() {
  const [durum, setDurum] = useState<FormDurumu>('bos');
  const [hataMesaji, setHataMesaji] = useState('');
  const [form, setForm] = useState({
    adSoyad: '',
    telefon: '',
    email: '',
    konu: '',
    mesaj: '',
  });

  const degistir = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const gonder = async (e: React.FormEvent) => {
    e.preventDefault();
    setDurum('gonderiliyor');
    setHataMesaji('');

    try {
      const yanit = await fetch('/api/iletisim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const veri = await yanit.json();

      if (!yanit.ok) {
        setHataMesaji(veri.hata || 'Bir hata oluştu.');
        setDurum('hata');
        return;
      }

      setDurum('basarili');
      setForm({ adSoyad: '', telefon: '', email: '', konu: '', mesaj: '' });
    } catch {
      setHataMesaji('Bağlantı hatası. Lütfen tekrar deneyin.');
      setDurum('hata');
    }
  };

  if (durum === 'basarili') {
    return (
      <div className={styles.basarili}>
        <div className={styles.basariliIcon}>✓</div>
        <h3 className={styles.basariliBaslik}>Mesajınız İletildi</h3>
        <p className={styles.basariliAciklama}>
          En kısa sürede, genellikle 2 saat içinde geri dönüş yapıyorum.
        </p>
        <button
          className={styles.tekrarBtn}
          onClick={() => setDurum('bos')}
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={gonder} noValidate>
      {/* Satır 1: Ad Soyad + Telefon */}
      <div className={styles.satir}>
        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="adSoyad">
            Ad Soyad <span className={styles.zorunlu}>*</span>
          </label>
          <input
            id="adSoyad"
            name="adSoyad"
            type="text"
            className={styles.girdi}
            placeholder="Kayhan Ayas"
            value={form.adSoyad}
            onChange={degistir}
            required
            autoComplete="name"
          />
        </div>
        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="telefon">
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            className={styles.girdi}
            placeholder="+90 5XX XXX XX XX"
            value={form.telefon}
            onChange={degistir}
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Satır 2: E-posta + Konu */}
      <div className={styles.satir}>
        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="email">
            E-posta <span className={styles.zorunlu}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.girdi}
            placeholder="ornek@mail.com"
            value={form.email}
            onChange={degistir}
            required
            autoComplete="email"
          />
        </div>
        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="konu">
            Konu <span className={styles.zorunlu}>*</span>
          </label>
          <select
            id="konu"
            name="konu"
            className={`${styles.girdi} ${styles.secim}`}
            value={form.konu}
            onChange={degistir}
            required
          >
            <option value="">Konu seçin…</option>
            <option value="Web Sitesi Projesi">Web Sitesi Projesi</option>
            <option value="3D Tasarım & Görselleştirme">3D Tasarım & Görselleştirme</option>
            <option value="Art Direktörlük">Art Direktörlük</option>
            <option value="Fiyat Teklifi">Fiyat Teklifi</option>
            <option value="İş Birliği">İş Birliği</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>
      </div>

      {/* Mesaj */}
      <div className={styles.alan}>
        <label className={styles.etiket} htmlFor="mesaj">
          Mesaj <span className={styles.zorunlu}>*</span>
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          className={`${styles.girdi} ${styles.metin}`}
          placeholder="Projenizden, bütçenizden ve zaman çizelgenizden bahsedin…"
          value={form.mesaj}
          onChange={degistir}
          required
          rows={5}
        />
      </div>

      {/* Hata mesajı */}
      {durum === 'hata' && (
        <p className={styles.hata}>{hataMesaji}</p>
      )}

      {/* Gönder butonu */}
      <div className={styles.altSatir}>
        <span className={styles.zorunluNot}>
          <span className={styles.zorunlu}>*</span> Zorunlu alanlar
        </span>
        <button
          type="submit"
          className={styles.gonderBtn}
          disabled={durum === 'gonderiliyor'}
        >
          {durum === 'gonderiliyor' ? (
            <>
              <span className={styles.spinner} />
              Gönderiliyor…
            </>
          ) : (
            <>
              Mesaj Gönder
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
