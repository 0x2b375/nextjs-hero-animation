/* eslint-disable @next/next/no-img-element */
"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const IMAGES = [
  "https://i.pinimg.com/736x/48/68/19/4868191990a108b9a40f4687dc429b65.jpg",
  "https://i.pinimg.com/1200x/20/3d/75/203d75f5e995d44139bb1f7d72dec6a7.jpg",
  "https://i.pinimg.com/1200x/8a/1c/20/8a1c20db423f85de20c1269b348713b3.jpg",
  "https://i.pinimg.com/1200x/eb/7f/ee/eb7feeb90d93dcda95620c1f7e413af7.jpg",
  "/hero1.jpg"
]

const Intro = () => {

  const refs = useRef<(HTMLImageElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const imgs = refs.current.filter(Boolean);
    if (!imgs.length) return;

    const timeline = gsap.timeline();

    timeline.to(imgs, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.1,
      delay: 0.35,
      stagger: {
        each: 0.3,
        ease: "power1.out"
      },
    });

    timeline.to(containerRef.current, {
      width: "100%",
      height: "100dvh",
      maxWidth: "none",
      aspectRatio: "unset",
      margin: "0",
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      timeline.kill();
    }
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div ref={containerRef} className="relative aspect-video w-[min(88vw, 28rem)] overflow-hidden md:w-[42vw]">
        {IMAGES.map((image, index) => (
          <img 
          key={index} 
          ref={(el) => {
            refs.current[index] = el
          }}
          src={image}
          alt="" 
          className="absolute inset-0 size-full object-cover"
          style={{ zIndex: index, clipPath: "inset(0% 0% 100% 0%)" }}
          />
        ))}
      </div>
    </div>
  )
}

export default Intro;
