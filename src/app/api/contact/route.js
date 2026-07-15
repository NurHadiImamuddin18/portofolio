import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER; 
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables");
      return NextResponse.json(
        { success: false, error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // 1. Send the primary email to Nur Hadi
    const mailToOwner = {
      from: `"${name} (Portfolio)" <${emailUser}>`,
      replyTo: email,
      to: 'nurhadiimamuddin@gmail.com', // Sending to the personal email
      subject: `Pesan Baru dari Portfolio: ${name}`,
      text: `Pesan Baru dari Portfolio\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
      html: `
        <h3>Pesan Baru dari Portfolio</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailToOwner);

    // 2. Send the auto-reply to the visitor
    const autoReply = {
      from: `"Nur Hadi Imamuddin" <${emailUser}>`,
      to: email,
      subject: "Terima kasih telah menghubungi saya!",
      text: `Halo ${name},\n\nTerima kasih telah menghubungi saya melalui website!\n\nPesan Anda sudah saya terima dan akan segera saya balas.\n\nSalam,\nNur Hadi Imamuddin`,
      html: `
        <p>Halo <strong>${name}</strong> 👋,</p>
        <p>Terima kasih telah menghubungi saya melalui website!</p>
        <p>Pesan Anda sudah saya terima dan akan segera saya balas.</p>
        <br/>
        <p>Salam,</p>
        <p><strong>Nur Hadi Imamuddin</strong></p>
      `
    };

    try {
      await transporter.sendMail(autoReply);
    } catch (err) {
      console.error("Failed to send auto-reply:", err);
    }

    return NextResponse.json({ success: true, message: "Pesan berhasil dikirim!" });

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan saat mengirim pesan." },
      { status: 500 }
    );
  }
}
