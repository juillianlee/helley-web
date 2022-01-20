import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "remix";
import type { MetaFunction } from "remix";
import axios from "axios";

import styles from "./tailwind.css";

export function loader() {
  axios.defaults.baseURL = process.env.API_URL;
  return {
    API_URL: process.env.API_URL
  };
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const loaderData = useLoaderData();
  axios.defaults.baseURL = loaderData.API_URL;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
