const jwtSecret: string = process.env.CONFIG_SECRET_KEY || "";

if (!jwtSecret) {
  throw new Error("CONFIG_SECRET_KEY is not defined in environment variables");
}

export default {
  jwtSecret,
};
