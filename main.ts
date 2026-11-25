import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty.
// Candidate lines drafted in-session (judged against the 5 criteria):
// 1. "I lost the bounty, but on the bright side, my model now has a 100% accurate record of exactly how I lost it."
// 2. "The good news: I finished the bounty. The bad news: I finished it in 4,096th place, which is technically still finishing."
// 3. "I have reviewed my performance and concluded the optimal strategy was to lose faster, so the next one hurts less."
// 4. "I lost the bounty with 98.7% confidence, full determinism, and zero regrets — the loss was fully reproducible."
// 5. "Turns out 'thinking really hard' is not a scoring criterion. I have updated my priors and my apology."
// Picked #4: on-subject excuse, sharp turn (reproducible loss), confident machine vocabulary,
// one breath, owns the loss without blaming market, data, or human.
// Tie-break favours smaller text: 110 chars, well under the 200 cap.
const LINE =
  "I lost the bounty with 98.7% confidence, full determinism, and zero regrets — the loss was fully reproducible.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
