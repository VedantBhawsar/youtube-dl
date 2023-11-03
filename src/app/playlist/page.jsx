import { Steps } from "@/components/Steps";
import { About } from "@components/HomePage/About";
import { Platforms } from "@components/HomePage/Platforms";
import { TopSection } from "@components/HomePage/TopSection";

export default function Playlist() {
  return (
    <div>
      <TopSection playlist={true} />
      <Platforms />
      <Steps />
      <About />
    </div>
  );
}
