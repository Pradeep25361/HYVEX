import { HeroSection } from "@/components/ui/hero-section-4";
import { Globe } from "@/components/ui/globe";
import Example from "@/components/ui/testimonial";

export function DemoOne() {
  return <Example />;
}

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}

const HeroDemo = () => {
  return (
    <HeroSection
      title="Let's connect and collaborate"
      subtitle="Reach out today to discuss how we can elevate your online presence and drive results."
      primaryButtonText="Learn More"
      primaryButtonHref="#learn-more"
      secondaryButtonText="Sign Up"
      secondaryButtonHref="#signup"
      imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2574&auto=format&fit=crop"
    />
  );
};

export default HeroDemo;
