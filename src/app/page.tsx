import Intro, { INTRO_END_DELAY_SEC } from "@/components/intro";
import Text from "@/components/text";

export default function Home() {
  return (
   <main className="relative min-h-dvh overflow-hidden bg-zinc-900">
    <Intro />
    <Text variant="logo" delay={0.6}> Next Timeline </Text>
    <Text variant="hero" delay={INTRO_END_DELAY_SEC}> The Future of Web Animation </Text>
   </main>
  );
}
