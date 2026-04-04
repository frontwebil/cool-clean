import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, comment } = await req.json();

    const botToken = process.env.API_KEY_BOT;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Bot token or chat id not found" },
        { status: 500 },
      );
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const htmlSend = `
<b>Нова заявка з сайту:</b>
<b>👤 Ім’я:</b> ${name}
<b>📞 Телефон:</b> ${phone}
${comment && comment.length > 0 ? `<b>Коментар:</b> ${comment}` : ""}
    `.trim();

    const response = await axios.post(url, {
      chat_id: chatId,
      text: htmlSend,
      parse_mode: "HTML",
    });

    return NextResponse.json(
      { success: true, data: response.data },
      { status: 200 },
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          success: false,
          error: error.response?.data || error.message,
        },
        { status: error.response?.status || 500 },
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Unexpected error",
      },
      { status: 500 },
    );
  }
}
