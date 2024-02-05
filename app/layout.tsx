import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import "./index.css";

export const metadata: Metadata = {
    title: "Home Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className={"page-container"}>
                    <div className={"nav-section"}>
                        <p>
                            <span id={"anchor-label"}>Anchor Elements</span>: <span id={"anchor-description"}>These links are made with the HTML anchor element</span>
                        </p>
                        <nav aria-labelledby={"anchor-label"} aria-describedby={"anchor-description"}>
                            <a className={"nav-link"} href={"/"}>Home</a>
                            <a className={"nav-link"} href={"/about"}>About Us</a>
                            <a className={"nav-link"} href={"/contact"}>Contact Us</a>
                        </nav>
                    </div>
                    <div className={"nav-section"}>
                        <p>
                            <span id={"link-label"}>Link Components</span>: <span id={"link-description"}>These links are made with the NextJS Link Component</span>
                        </p>
                        <nav aria-labelledby={"link-label"} aria-describedby={"link-description"}>
                            <Link className={"nav-link"} href={"/"}>Home</Link>
                            <Link className={"nav-link"} href={"/about"}>About Us</Link>
                            <Link className={"nav-link"} href={"/contact"}>Contact Us</Link>
                        </nav>
                    </div>
                    {children}
                    <p className={"issue-summary"}>
                        If you click the achor element links above with TalkBack turned on in Firefox, it may start to
                        read the document title. Whether it does or not, it will soon stop whatever it&apos;s announcing
                        to read the&nbsp;
                        <a href={"https://unicode-explorer.com/c/FFFC"}>
                            Unicode Object Replacement Character
                        </a>
                        &nbsp;(the letters &quot;OBJ&quot; outlined by a dashed square)
                    </p>
                    <p className={"issue-summary"}>
                        However, if you click one of the Link components above with TalkBack turned on in Firefox, it
                        will correctly announce the document title because Next adds it to the &nbsp;
                        <a href={"https://nextjs.org/docs/architecture/accessibility#route-announcements"}>Next Route
                            Announcer</a>.
                        You can see the route announcer in the browser inspector at the bottom of the document body.
                        It&apos;s an assertive live region with id &quot;__next-route-announcer__&quot; that gets visually hidden with CSS.
                    </p>
                </div>
            </body>
        </html>
    );
}
