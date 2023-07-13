import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const options = [
  { value: "a", label: "A" },
  { value: "b", label: "B" },
  { value: "c", label: "C" },
  // 他のオプションを追加する場合は、ここにオブジェクトを追加してください
];

const componentMap = new Map([
  ["a", ComponentA],
  ["b", ComponentB],
  ["c", ComponentC],
  // 他のオプションに対応するコンポーネントを追加する場合は、ここに追加してください
]);

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleDataFromChild = (data: any) => {
    setDataFromChild(data);
    console.log(data);
  };

  const renderComponent = () => {
    const Component = componentMap.get(selectedOption);
    return Component ? (
      <Component sendDataToParent={handleDataFromChild} />
    ) : null;
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">選択してください</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {renderComponent()}

      {dataFromChild && <p>子コンポーネントからのデータ: {dataFromChild}</p>}
    </div>
  );
}

export default App;
