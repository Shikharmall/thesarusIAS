import bcrypt from "bcrypt";

const saltRounds = Number(process.env.SALT_ROUNDS) || 10;

const securePasswordGenerate = async (password: string): Promise<string> => {
    try {
        return await bcrypt.hash(password, saltRounds);
    } catch (error: any) {
        console.error(error?.message || error);
        throw new Error("Failed to hash password");
    }
};

const matchPassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error: any) {
        console.error(error?.message || error);
        return false; // fail-safe
    }
};

export { securePasswordGenerate, matchPassword };

