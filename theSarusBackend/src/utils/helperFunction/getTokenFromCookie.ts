import { Request } from "express";

type TokenResult = string | { status: "Failed"; message: string };

const getTokenFromCookie = (req: Request): TokenResult => {
	const token = req.cookies?.access_token;
	if (!token) {
		return {
			status: "Failed",
			message: "There is no token attached to the cookie",
		};
	}
	return token;
};

export default getTokenFromCookie;

