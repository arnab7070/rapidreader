import { NextResponse } from 'next/server'
import OpenAI from 'openai';
export async function POST(req, res) {
    const body = await req.json();
    const openaiServer = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    try {
        const chatCompletion = await openaiServer.chat.completions.create({
            messages: [{ role: 'user', content: `Can you recommend 10 books related to ${body.question} to read except this book? Provide me in json format.` }],
            model: 'gpt-3.5-turbo-1106',
            response_format: { type: "json_object" }
        });
        return NextResponse.json({ result: chatCompletion.choices[0].message.content, question:body.question, success: true });
    } catch (error) {
        console.error('Error fetching OpenAI completion:', error);
    }
    return NextResponse.json({ message: "Server is up and running", method: "POST" })
}