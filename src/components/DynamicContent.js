import { EXAMPLES } from "../data";

export default function DynamicContent({ info }) {
  console.log(EXAMPLES[info]);
  return (
    <div id="tab-content">
      <h3>{EXAMPLES[info].title}</h3>
      <p>{EXAMPLES[info].description}</p>
      <pre>
        <code>{EXAMPLES[info].code}</code>
      </pre>
    </div>
  );
}
