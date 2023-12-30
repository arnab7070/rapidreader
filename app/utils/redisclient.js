import { createClient } from 'redis';

export default async function ClientConnection() {
    const Client = createClient({
        username: process.env.REDIS_USERNAME,
        password: process.env.REDIS_PASSWORD,
        socket: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT
        }
    });
    Client.on('error', err => console.log('Redis Client Error', err));
    await Client.connect();
    console.log("Redis Client Connected");
    return Client;
}