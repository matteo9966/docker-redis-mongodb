import RedisStore from "connect-redis";
import session from "express-session";
import { createClient } from "redis";
import { config } from "../../config/config.js";
let redisClient = createClient({
  url: `redis://${config.REDIS_URL}:${config.REDIS_PORT}`,
});

redisClient.connect().catch(console.error);

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});

export { redisStore };

// Initialize sesssion storage.
export function addRedisMiddleWare(/**@type {Express}*/ app) {
  app.use(
    session({
      store: redisStore,
      resave: false, // required: force lightweight session keep alive (touch)
      saveUninitialized: false, // recommended: only save session when data exists
      secret: config.SESSION_SECRET,
      cookie: {
        secure: false,
        resave: false,
        httpOnly: true,
        maxAge: 6000 * 1000,
      },
    })
  );
}
