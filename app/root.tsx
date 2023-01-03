import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import { useEffect, useState } from "react";
import { useCycle } from "framer-motion";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    const moveCursor = (e: any) => {
      const x = e.clientX - 16
      const y = e.clientY - 16
      setCursorXY({ x, y })
     }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, []);

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
        <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="h-full w-screen cursor-none overflow-x-hidden relative">
        <Outlet context={[isOpen, toggleOpen]} />
         <div
          className=" hidden lg:block z-30 animate-text bg-gradient-to-r from-stone-50 via-zinc-500 to-slate-800 fixed left-0 top-0 w-12 h-12 rounded-full pointer-events-none"
          style={{
              transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
          }}>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
