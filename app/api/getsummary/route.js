import { NextResponse } from 'next/server'
import OpenAI from 'openai';
export async function POST(req, res) {
    const body = await req.json();
    const openaiServer = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    try {
        const chatCompletion = await openaiServer.chat.completions.create({
            messages: [{ role: 'user', content: `Please provide a summary of the book ${body.question} in 150-200 words.` }],
            model: 'gpt-3.5-turbo-0613',
        });
        return NextResponse.json({ result: chatCompletion.choices[0].message.content, question:body.question, success: true });
    } catch (error) {
        console.error('Error fetching OpenAI completion:', error);
    }
    return NextResponse.json({ message: "Server is up and running", method: "POST" })
}