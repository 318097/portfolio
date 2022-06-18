const SECTIONS = [
  { label: "About", value: "about" },
  { label: "Work", value: "timeline" },
  { label: "Side Projects", value: "side-projects" },
  { label: "Tech", value: "tech" },
  { label: "Blog", value: "articles" },
  { label: "Contact", value: "contact" },
];

const sectionValues = SECTIONS.map(({ value }) => value);

const THEMES = [
  "NEO",
  "DARK-NIGHT",
  // "PARTICLES",
  "CUSTOM-PARTICLES",
  "STACKED",
];

export { SECTIONS, THEMES, sectionValues };
