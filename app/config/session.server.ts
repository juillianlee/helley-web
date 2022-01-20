import { createCookieSessionStorage } from "remix";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "helley:token",
      expires: new Date(Date.now()  + 3600000*24*14),
      httpOnly: true,
      maxAge: 86400 * 14,
      path: "/",
      sameSite: "lax",
      secrets: ["secret"],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
