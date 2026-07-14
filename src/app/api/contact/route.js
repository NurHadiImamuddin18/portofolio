import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, message } = body;

    // Validate required fields
    if (!name || !whatsapp || !message) {
      return NextResponse.json(
        { success: false, error: "Nama, nomor WhatsApp, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const token = process.env.FONNTE_TOKEN;
    const ownerNumber = process.env.OWNER_WA_NUMBER;

    if (!token || !ownerNumber) {
      console.error("Missing FONNTE_TOKEN or OWNER_WA_NUMBER in environment variables");
      return NextResponse.json(
        { success: false, error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Format the message to send to the owner
    const formattedMessage = `📩 *Pesan Baru dari Portfolio*\n\n👤 *Nama:* ${name}\n📧 *Email:* ${email || "-"}\n📱 *WhatsApp:* ${whatsapp}\n\n💬 *Pesan:*\n${message}`;

    // Send message to the OWNER via Fonnte API
    const fonntResponse = await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: new URLSearchParams({
        target: ownerNumber,
        message: formattedMessage,
      }),
    });

    const result = await fonntResponse.json();

    if (result.status === true || result.status === "true") {
      // Sanitize whatsapp number (remove spaces, +, -, etc)
      let sanitizedWhatsapp = whatsapp.replace(/[^0-9]/g, "");
      
      // Convert 62 prefix to 0
      if (sanitizedWhatsapp.startsWith("62")) {
        sanitizedWhatsapp = "0" + sanitizedWhatsapp.substring(2);
      }
      // Also send auto-reply to the visitor
      const autoReply = `Halo *${name}* 👋\n\nTerima kasih telah menghubungi saya melalui website!\n\nPesan Anda sudah saya terima dan akan segera saya balas.\n\nSalam,\n*Nur Hadi Imamuddin*`;

      try {
        const autoReplyRes = await fetch("https://api.fonnte.com/send", {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: new URLSearchParams({
            target: sanitizedWhatsapp,
            message: autoReply,
          }),
        });
        const autoReplyData = await autoReplyRes.json();
        console.log("Fonnte auto-reply response:", autoReplyData);
      } catch (err) {
        console.error("Failed to send auto-reply:", err);
      }

      return NextResponse.json({ success: true, message: "Pesan berhasil dikirim!" });
    } else {
      console.error("Fonnte API error:", result);
      return NextResponse.json(
        { success: false, error: result.reason || "Gagal mengirim pesan." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server." },
      { status: 500 }
    );
  }
}
