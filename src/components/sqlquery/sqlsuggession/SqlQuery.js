import React from "react";
import { useState } from "react";
import "./SqlQuery.css";
import AttributesDatasets from "../../../datasets/AttributesDatasets";
import SqlQueryAssistant from "../sqlassistant/SqlQueryAssistant";

const SqlQuerry = () => {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  const [show, setShow] = useState(false);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.textContent;
    setValue(`${value.substring(0, value.lastIndexOf(" "))} ${selectedValue}`);
    document.getElementById("myInput").focus();
    setArr([]);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input.toUpperCase());

    const lastSpaceIndex = input.lastIndexOf(" ");
    const subAfterSpace = input.substring(lastSpaceIndex + 1).toUpperCase();

    if (
      (lastSpaceIndex !== -1 && subAfterSpace.length === 0) ||
      input.length === 0
    ) {
      // Word completed, clear the array
      setArr([]);
    } else {
      const filter = AttributesDatasets.filter((elem) => elem.startsWith(subAfterSpace));
      setArr(filter);
    }
  };

  return (
    <div className="sqlQuery_container">
      <h1 className="title">SQL Generator ( suggests words for sql query completion)</h1>
      <h1 className="title_2">Click on the suggested query to insert or change the selectedValue</h1>

      <input
        id="myInput"
        type="text"
        list="suggestions"
        value={value}
        onChange={handleChange}
        placeholder="type here..."
        className="inputField"
      />

      {/* Suggestions list */}
      <ul className="suggestionsList">
        {arr.map((elem, index) => (
          <li
            key={index}
            value={elem}
            onClick={handleSelectChange}
            className="suggestionItem"
          >
            {elem}
          </li>
        ))}
      </ul>

      {/* Button to show all attributesDaAttributesDatasets */}
      <div onClick={() => setShow(!show)} className="showAllBtn">
        Show All query Datasets
      </div>

      {/* Show All AttributesDatasets list */}
      {show && (
        <ul className="showAllList">
          {AttributesDatasets.map((elem, index) => (
            <li key={index} value={elem} className="showAllItem">
              {elem}
            </li>
          ))}
        </ul>
      )}

      <SqlQueryAssistant/>
    </div>
  );
};

export default SqlQuerry;
