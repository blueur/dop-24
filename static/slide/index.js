import Reveal from "https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.esm.js";
import Markdown from "https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/markdown/markdown.esm.js";

const urlParams = new URLSearchParams(window.location.search);
const id = (urlParams.get("id") ?? "").replace(/[^a-z]/g, "");

if (id) {
  const section = document.querySelector("section");
  section.setAttribute("data-markdown", `./${id}.md`);

  new Reveal({
    autoAnimateDuration: 0.25,
    hash: true,
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: false,
    plugins: [Markdown],
    slideNumber: true,
    transitionSpeed: "fast",
  }).initialize();
}
