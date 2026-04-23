import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";

export default function Portfolio() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Scroll-reveal on sections
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section:not(#hero)"),
    );
    sections.forEach((s) => s.classList.add("reveal-init"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    // 3D perspective tilt on cards (fine-pointer devices only)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const cardListeners: Array<{
      el: HTMLElement;
      onMove: (e: MouseEvent) => void;
      onLeave: () => void;
    }> = [];

    if (hasFinePointer) {
      const cards = Array.from(
        document.querySelectorAll<HTMLElement>(".hover-elevate"),
      );
      cards.forEach((card) => {
        card.style.transformStyle = "preserve-3d";
        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          const rotY = px * 6;
          const rotX = -py * 6;
          card.style.transform = `perspective(1200px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-3px)`;
          card.style.transition = "transform 0.08s linear, box-shadow 0.35s ease";
        };
        const onLeave = () => {
          card.style.transform = "";
          card.style.transition = "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease";
        };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cardListeners.push({ el: card, onMove, onLeave });
      });
    }

    return () => {
      observer.disconnect();
      cardListeners.forEach((l) => {
        l.el.removeEventListener("mousemove", l.onMove);
        l.el.removeEventListener("mouseleave", l.onLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Anshad P P. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
