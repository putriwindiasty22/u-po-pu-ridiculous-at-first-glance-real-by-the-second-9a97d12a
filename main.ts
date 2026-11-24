import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 200 characters: a bizarre startup idea that sounds
// absurd at first glance but holds together as a real business.
const sentence =
  "We sell funerals for dead houseplants — tiny coffins, eulogies, the works — because guilty millennials pay $29 for closure instead of buying another fern to kill.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
