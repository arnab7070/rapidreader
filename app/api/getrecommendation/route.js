import { NextResponse } from 'next/server'
import OpenAI from 'openai';
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function recommendBooks(bookName) {
    const prompt = `Can you recommend 10 books related to ${bookName} to read except this book? Provide me in json format containing books array with only title of the books. Don't include \`\`\`json\`\`\` in first`;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    // console.log(text)
    return text;
}

export async function POST(req, res) {
    const body = await req.json();
    // const openaiServer = new OpenAI({
    //     apiKey: process.env.OPENAI_API_KEY,
    // });
    try {
        // const chatCompletion = await openaiServer.chat.completions.create({
        //     messages: [{ role: 'user', content: `Can you recommend 10 books related to ${body.question} to read except this book? Provide me in json format containing books array with only title of the books.` }],
        //     model: 'gpt-3.5-turbo-1106',
        //     response_format: { type: "json_object" }
        // });
        const chatCompletion = await recommendBooks(body.question);
        // return NextResponse.json({ result: JSON.parse(chatCompletion.choices[0].message.content), question: body.question, success: true });
        return NextResponse.json({ result: JSON.parse(chatCompletion), question: body.question, success: true });
    } catch (error) {
        console.error('Error fetching chat completion:', error);
    }
    return NextResponse.json({ message: "Server is up and running", method: "POST" })
}