import { TerminalJourney } from "@/components/TerminalJourney";
import "@/components/terminal-journey.css";
import { CustomCursor } from "@/components/CustomCursor";

export default function Portfolio() {
  return (
    <main className="cmd-portfolio">
      <CustomCursor />
      <TerminalJourney />
    </main>
  );
}
