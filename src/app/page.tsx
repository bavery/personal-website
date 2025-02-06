"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FooterText from "@/ui/footer-text";

function ExternalLinkButton(props : {src: string, alt: string, href: string }) {
  return (
    <a className="flex" href={props.href} target="_new">
      <button type="button">
        <Image
          src =     {props.src}
          alt =     {props.alt}
          width =   {32}
          height =  {32}
        />
      </button>
    </a>
  );
}

function Home() {
  const [animateAvatar, setAnimateAvatar] = useState("");
  const [bouncing, setBouncing] = useState(false);
  const [theme, setTheme] = useState("light")

  useEffect(()=>{
    const ele = document.documentElement;
    if(theme === "light") {
      ele.style.setProperty("--foreground", "#171717");
      ele.style.setProperty("--background", "#efefef");
    } else {
      ele.style.setProperty("--foreground", "#ffffff");
      ele.style.setProperty("--background", "#161616");
    }

  },[theme])

  function handleAvatarClick() {
    const animations = ["custom-animate-bounce", "custom-animate-spin", "custom-animate-rock"]
    if(!animateAvatar) {
      setAnimateAvatar(animations[Math.floor(Math.random() * animations.length)]);
    }

    if(!bouncing) {
      setBouncing(true);
    }
  }

  return (
    <>
      <div className="grid grid-rows-[0px_1fr_20px] md:items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-main)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="relative mx-auto flex flex-col max-w-sm items-center gap-y-4 rounded-xl bg-white text-gray-950 p-6 shadow-lg border border-2 z-10 border-main before:absolute before:bg-main before:h-[50%] before:w-full before:top-0 before:left-0 before:-z-10 before:rounded-t-lg">
            <div className={`mx-auto bg-white p-2 border border-4 rounded-full border-main z-10 ${animateAvatar}`} onClick = { handleAvatarClick } onAnimationEnd={()=>{setAnimateAvatar("")}}>
              <Image
                src =       "/profile.png"
                alt =       "Profile Picture"
                className = "rounded-full"
                width =     {250}
                height =    {250}
                aria-hidden
              />
            </div>

            <div className="mx-auto text-center flex flex-col gap-y-1">
              <div className="text-2xl font-medium text-black">Brandon Avery</div>
              <p>Software Engineer & Web Developer</p>
              <div className="flex mt-2 justify-evenly">
                <ExternalLinkButton src="/icons/linkedin-black.png" alt="LinkedIn Icon" href="https://www.linkedin.com/in/brandonavery-/" />
                <ExternalLinkButton src="/icons/github-mark.png" alt="GitHub Icon" href="https://github.com/bavery" />
              </div>
            </div>

          </div>
            <div className="flex w-full mt-2 justify-evenly">
              <Link className="bg-blue-800 hover:bg-blue-900 py-1 px-3 rounded-full text-white" href="/about">About</Link>
              <Link className="bg-blue-800 hover:bg-blue-900 py-1 px-3 rounded-full text-white" href="/tools">Tools</Link>
            </div>

        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center select-none">
          <FooterText />
        </footer>
      </div>

      <button type="button" className="opacity-0 hover:opacity-100 fixed bottom-5 right-5 z-10 rounded-full bg-slate-600 hover:bg-slate-800 py-1 px-4 text-white" onClick={()=>{setTheme(theme === "light" ? "dark" : "light")}}>Change Theme</button>
    </>
  );
}




export default Home;