const Redis = require("ioredis");

export default function ClientConnection() {
    const serviceUri = `rediss://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;
    const redis = new Redis(serviceUri);
    redis.on("connect", () => {
        console.log("Redis Client Connected");
    });
    redis.on("error", (err) => {
        console.log("Redis Client Error", err);
    });
    return redis;
}