const SECTIONS = [
  { label: "About", value: "about" },
  { label: "Timeline", value: "timeline" },
  { label: "Tech", value: "tech" },
  { label: "Side Projects", value: "side_projects" },
  { label: "Blogs", value: "articles" },
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
