# kayhanayas.com — Portföy Sitesi

Next.js 14 ile geliştirilmiş kişisel portföy. Tüm içerikler **Markdown (MD) dosyaları** ile yönetilir — kod bilmeden düzenlenebilir.

---

## Hızlı Başlangıç

```bash
cd C:\Projeler\kayhanayas
npm install
npm run dev
```

Tarayıcıda → `http://localhost:3000`

---

## İçerik Düzenleme (MD Dosyaları)

Tüm site içerikleri `src/content/` klasöründe. Dosyaları herhangi bir metin editörüyle açıp düzenleyebilirsin. Kaydettiğinde site otomatik güncellenir (dev modunda).

### 1. Profil & Kişisel Bilgiler
**Dosya:** `src/content/profile/index.md`

```
name           → Adın soyadın
title          → Unvan (nav altında görünür)
location       → Konum (nav sağında görünür)
email          → E-posta adresi (iletişim butonunda kullanılır)
profileImage   → Profil fotoğrafı yolu → public/images/ klasörüne koy
```

**Biyografi metni** → dosyanın `---` altındaki kısım:
```md
---
...
---

Buraya istediğin biyografi metnini yaz.
```

**Navigasyon linkleri:**
```
navHakkinda    → "Hakkımda" nav linki metni
navCalisma     → "Çalışmalar" nav linki metni
navIletisim    → "İletişim" nav linki metni
```

**Hero bölümü:**
```
heroBadgeText  → Sol üst rozet yazısı (örn: "PORTFÖY")
heroBadgeYear  → Rozet yıl aralığı (örn: "2024 — 2025")
heroSubtext    → Sağ üst küçük yazı
heroLine1      → Büyük başlığın 1. satırı (örn: "GERÇEK DEĞER")
heroLine2      → Büyük başlığın 2. satırı / italik kısım
```

**Hakkımda bölümü:**
```
aboutLabel     → Bölüm başlığı
aboutTag1/2/3  → Yetenek etiketleri

stat1Value/Label → 1. istatistik (örn: "5+" / "Yıl Deneyim")
stat2Value/Label → 2. istatistik (örn: "50+" / "Tamamlanan Proje")
stat3Value/Label → 3. istatistik (örn: "TR" / "Sakarya · İstanbul")
```

**Call to Action bölümü:**
```
ctaEyebrow     → Küçük üst yazı (örn: "Siz de hazır mısınız?")
ctaTitle       → Ana başlık (\n ile satır kır)
ctaDesc        → Açıklama metni
ctaButtonText  → Buton yazısı
ctaButtonLink  → Buton linki (mailto: veya URL)
ctaNote        → Butonun altındaki küçük not
```

**İletişim & Footer:**
```
contactEyebrow → "Başlayalım" gibi küçük üst yazı
contactTitle   → İletişim bölümü başlığı
footerTagline  → Footer alt yazısı
footerNav1/2/3 + footerNav1/2/3Link → Footer nav linkleri
behanceUrl / linkedinUrl / instagramUrl → Sosyal medya linkleri
```

---

### 2. Hizmetler Kartları
**Dosya:** `src/content/services/index.md`

```
servicesLabel  → Bölüm başlığı
servicesIntro  → Bölüm açıklama metni
quoteText      → Orta karttaki alıntı metni
quoteSub       → Alıntı alt yazısı
quoteBtn       → Orta kart butonu

webTitle       → Web hizmet kartı başlığı
webEyebrow     → Küçük üst etiket
webDesc        → Açıklama
webLink        → Kart linki (URL)

design3dTitle  → 3D hizmet kartı başlığı
design3dEyebrow → Küçük üst etiket
design3dDesc   → Açıklama
design3dLink   → Kart linki (URL)
```

---

### 3. Çalışmalar / Projeler
**Dosya:** `src/content/projects/index.md`

Yeni proje eklemek için `projects:` listesine yeni bir blok ekle:

```yaml
projects:
  - title: "Proje Adı"
    tags: "Teknoloji · Kategori"
    url: "https://proje-url.com"
    desktop: "/images/projects/proje-desktop.jpg"
    mobile: "/images/projects/proje-mobile.jpg"
    order: 3   # Sıralama numarası — küçük sayı önce gelir
```

**Proje görselleri:**
- `public/images/projects/` klasörüne koy
- **Desktop:** `1920×1080` px (16:9 oran) tam sayfa ekran görüntüsü
- **Mobil:** `390×844` px dikey ekran görüntüsü
- **Dosya adı:** `projeadi-desktop.jpg` ve `projeadi-mobile.jpg`

**Ekran görüntüsü nasıl alınır:**
1. Chrome DevTools → `F12`
2. Toolbar'dan ekran boyutunu ayarla
3. `Ctrl+Shift+P` → "Capture full size screenshot"

---

## Profil Fotoğrafı Ekleme

1. Fotoğrafını `public/images/` klasörüne koy (örn: `kayhan.png`)
2. `src/content/profile/index.md` içinde `profileImage` alanını güncelle:
   ```
   profileImage: "/images/kayhan.png"
   ```
3. **Önerilen boyut:** 340×460 px (dikey, 3:4 oran)

---

## Subdomain Yapısı

| URL | Açıklama |
|---|---|
| `kayhanayas.com` | Ana portföy (bu site) |
| `sites.kayhanayas.com` | Web tasarım satış sayfası |
| `design3d.kayhanayas.com` | 3D tasarım portföyü |

---

## Yayına Alma (Vercel)

```bash
# 1. GitHub'a push et
git add .
git commit -m "güncelleme"
git push

# 2. Vercel otomatik deploy eder
```

**Domain ayarları (Vercel Dashboard → Settings → Domains):**
- `kayhanayas.com` → Ana domain
- `sites.kayhanayas.com` → CNAME ekle
- `design3d.kayhanayas.com` → CNAME ekle

**DNS ayarları (domain sağlayıcında):**
```
@     → A → 76.76.21.21 (Vercel IP)
www   → CNAME → cname.vercel-dns.com
sites → CNAME → cname.vercel-dns.com
design3d → CNAME → cname.vercel-dns.com
```

---

## SEO

- `src/content/profile/index.md` → `seoTitle`, `seoDescription`, `seoKeywords`
- `src/app/layout.tsx` → Otomatik meta tag üretimi
- `src/app/sitemap.ts` → `kayhanayas.com/sitemap.xml`
- Google Search Console'da `sitemap.xml` adresini kaydet

---

## Proje Yapısı

```
kayhanayas/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Ana sayfa bileşeni
│   │   ├── page.module.css       ← Tüm stiller
│   │   ├── WorkSection.tsx       ← Çalışmalar bölümü
│   │   ├── layout.tsx            ← SEO meta tagları
│   │   ├── globals.css           ← Global stiller & CSS değişkenleri
│   │   ├── sitemap.ts            ← Otomatik sitemap
│   │   ├── robots.ts             ← robots.txt
│   │   ├── sites/page.tsx        ← sites.kayhanayas.com
│   │   └── design3d/page.tsx     ← design3d.kayhanayas.com
│   ├── content/                  ← ✏️ BURADAN DÜZENLEYEBİLİRSİN
│   │   ├── profile/index.md      ← Profil, hero, CTA, footer metinleri
│   │   ├── services/index.md     ← Hizmet kartları
│   │   └── projects/index.md     ← Çalışmalar listesi
│   └── lib/
│       └── markdown.ts           ← MD okuma fonksiyonları
├── public/
│   └── images/
│       ├── kayhan.png            ← Profil fotoğrafı
│       └── projects/             ← Proje ekran görüntüleri
└── next.config.js                ← Subdomain yönlendirme
```

---

## Renk & Tipografi Değiştirme

`src/app/globals.css` içindeki CSS değişkenleri:

```css
--bg           → Arka plan rengi (#f2f0eb — krem)
--text         → Ana yazı rengi (#0e0e0d — siyah)
--accent       → Vurgu rengi (#e63020 — kırmızı)
--accent-2     → İkincil vurgu (#c8a96e — altın)
--border       → Kenarlık rengi

--font-display → Başlık fontu (Bebas Neue)
--font-serif   → Serif font (DM Serif Display)
--font-body    → Gövde fontu (Inter)
--font-mono    → Monospace font (Space Mono)
```

---

## Sık Sorulan Sorular

**S: Yeni bir çalışma ekledim ama görünmüyor.**
C: `src/content/projects/index.md` dosyasında `order` numarasının doğru olduğundan ve proje görselinin `public/images/projects/` klasöründe olduğundan emin ol.

**S: Profil fotoğrafı görünmüyor.**
C: `profileImage` değerinin başında `/` olduğundan emin ol: `"/images/kayhan.png"` ✓

**S: Türkçe karakterler bozuk görünüyor.**
C: Dosyaları UTF-8 encoding ile kaydet (VS Code'da sağ alt köşede encoding'i kontrol et).

**S: `npm run dev` çalışmıyor.**
C: Node.js sürümünü kontrol et: `node --version` → 18+ olmalı.
