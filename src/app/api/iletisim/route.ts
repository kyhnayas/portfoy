import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { adSoyad, telefon, email, konu, mesaj } = body;

    // Zorunlu alan kontrolü
    if (!adSoyad || !email || !konu || !mesaj) {
      return NextResponse.json(
        { hata: 'Ad soyad, e-posta, konu ve mesaj alanları zorunludur.' },
        { status: 400 }
      );
    }

    // E-posta format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { hata: 'Geçerli bir e-posta adresi girin.' },
        { status: 400 }
      );
    }

    // SMTP transporter — .env.local değerlerini kullanır
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"kayhanayas.com" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: `"${adSoyad}" <${email}>`,
      subject: `[kayhanayas.com] ${konu}`,
      text: [
        `Ad Soyad : ${adSoyad}`,
        `Telefon  : ${telefon || 'Belirtilmedi'}`,
        `E-posta  : ${email}`,
        `Konu     : ${konu}`,
        ``,
        `Mesaj:`,
        mesaj,
        ``,
        `---`,
        `Bu mesaj kayhanayas.com iletişim formu üzerinden gönderilmiştir.`,
      ].join('\n'),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f7;border:1px solid #e0ddd8;">
          <h2 style="margin:0 0 24px;font-size:1.1rem;color:#0e0e0d;border-bottom:1px solid #e0ddd8;padding-bottom:16px;">
            Yeni İletişim Formu Mesajı
          </h2>
          <table style="width:100%;border-collapse:collapse;font-size:0.88rem;color:#444;">
            <tr><td style="padding:8px 0;color:#999;width:110px;">Ad Soyad</td><td style="padding:8px 0;font-weight:600;color:#0e0e0d;">${adSoyad}</td></tr>
            <tr><td style="padding:8px 0;color:#999;">Telefon</td><td style="padding:8px 0;">${telefon || 'Belirtilmedi'}</td></tr>
            <tr><td style="padding:8px 0;color:#999;">E-posta</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#e63020;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#999;">Konu</td><td style="padding:8px 0;">${konu}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#fff;border:1px solid #e0ddd8;border-radius:2px;">
            <p style="margin:0 0 8px;font-size:0.75rem;color:#999;text-transform:uppercase;letter-spacing:0.08em;">Mesaj</p>
            <p style="margin:0;line-height:1.7;color:#0e0e0d;white-space:pre-wrap;">${mesaj.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
          <p style="margin:24px 0 0;font-size:0.72rem;color:#aaa;">
            kayhanayas.com iletişim formu · ${new Date().toLocaleString('tr-TR')}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ basarili: true });
  } catch (hata) {
    console.error('Mail gönderme hatası:', hata);
    return NextResponse.json(
      { hata: 'Mail gönderilemedi. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
