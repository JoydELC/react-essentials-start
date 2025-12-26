import { useState } from "react";
import DynamicContent from "./DynamicContent";
import Section from "./Section";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(parameter) {
    setSelectedTopic(parameter);
    console.log(selectedTopic);
  }
  return (
    <>
      <Section title="Examples" id="examples">
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            Component
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {!selectedTopic ? (
          <p>Select a button</p>
        ) : (
          <DynamicContent info={selectedTopic} />
        )}
      </Section>
    </>
  );
}
