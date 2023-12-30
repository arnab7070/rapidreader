import { NextResponse } from "next/server";
import ClientConnection from "../../utils/redisclient";
const Client = await ClientConnection();

export async function POST(req, res) {
    try {
        const { url } = await req.json();
        const cachedData = await Client.get(url);
        if (cachedData) {
            return NextResponse.json({ "cacheData": JSON.parse(cachedData) });
        }
        return NextResponse.json({ "cacheData": null });
    } catch (error) {
        return NextResponse.json({ "error": error });
    }
}


export async function PUT(req, res) {
    const { url, data } = await req.json();
    await Client.set(url, JSON.stringify(data));
    Client.expire(url, 3600 * 24); // Cache it for 1 Day
    return NextResponse.json({ "result": "Data has been cached successfully" });
}
