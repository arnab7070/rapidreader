import { NextResponse } from 'next/server'
import OpenAI from 'openai';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const schema = {
    description: "Summary of a book",
    type: SchemaType.OBJECT,
    properties: {
        summary: {
            type: SchemaType.STRING,
            description: "A concise summary of the book in 150-200 words",
            nullable: false,
        },
    },
    required: ["summary"],
};

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
    },
});

async function generateSummary(question) {
    const prompt = `Please provide a summary of the book ${question} in 150-200 words.`;
    const result = await model.generateContent(prompt);
    const response = result.response.text(); // Get the response as a JSON string
    const parsedResponse = JSON.parse(response); // Parse the JSON
    return parsedResponse.summary; // Extract and return the summary
}

export async function POST(req, res) {
    const body = await req.json();
    // const openaiServer = new OpenAI({
    //     apiKey: process.env.OPENAI_API_KEY,
    // });
    try {
        // const chatCompletion = await openaiServer.chat.completions.create({
        //     messages: [{ role: 'user', content: `Please provide a summary of the book ${body.question} in 150-200 words.` }],
        //     model: 'gpt-3.5-turbo-0301',
        // });
        const summary = await generateSummary(body.question);
        // return NextResponse.json({ result: chatCompletion.choices[0].message.content, question: body.question, success: true });
        return NextResponse.json({ result: summary, question: body.question, success: true });
    } catch (error) {
        console.error('Error occured in gemini api:', error);
    }
    return NextResponse.json({ message: "Server is up and running", method: "POST" })
}