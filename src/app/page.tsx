import { Steps } from "@/components/Steps";
import { About } from "@components/HomePage/About";
import { Platforms } from "@components/HomePage/Platforms";
import { TopSection } from "@components/HomePage/TopSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <TopSection playlist={false} />
      <Platforms />
      <Steps />
      <About />
    </div>
  );
}
