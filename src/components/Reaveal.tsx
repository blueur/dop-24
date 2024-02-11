import React from "react";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import Markdown from "reveal.js/plugin/markdown/markdown";

export default class Reaveal extends React.Component {
  private id: string;
  constructor(props: { id: string }) {
    super(props);
    this.id = props.id;
  }
  componentDidMount() {
    import("reveal.js").then((reveal) => {
      new reveal.default({
        autoAnimateDuration: 0.25,
        embedded: true,
        hash: true,
        plugins: [Markdown],
        slideNumber: true,
        transition: "fade",
        transitionSpeed: "fast",
      }).initialize();
    });
  }
  render() {
    return (
      <div>
        <div className="reveal">
          <div className="slides">
            <section data-auto-animate data-markdown={`/slide/${this.id}.md`} />
          </div>
        </div>
        Appuyez sur <kbd>F</kbd> pour passer en plein écran ou <kbd>O</kbd> pour
        afficher la vue d'ensemble.
        <br />
        <a href={`/slide/?id=${this.id}&print-pdf`} target="_blank">
          Version imprimable
        </a>
      </div>
    );
  }
}
