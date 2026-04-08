import Intro from "@/components/intro";
import Text from "@/components/text";

export default function Home() {
  return (
   <main className="relative min-h-dvh overflow-hidden bg-zinc-900">
    <Intro />
    <Text variant="logo"> Next Timeline </Text>
    <Text variant="hero"> The Future of Web Animation </Text>
   </main>
  );
}
