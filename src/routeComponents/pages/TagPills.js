//dependencies
import React, { useState, useEffect } from "react";

//styled components
import { LabelH3 } from "./notestyles/page";
import {
  TagPillsContainer,
  TagSearch,
  TagButton,
} from "./notestyles/tagstyles";
import { InputForm } from "./notestyles/events";

function TagPills(props) {
  const [tagInput, setTagInput] = useState("");

  useEffect(() => [props]);

  function handleClick(event) {
    event.preventDefault();
    props.setTags([...props.tags, tagInput]);
    props.setPage({ ...props.page, tags: props.tags });
    setTagInput("");
  }

  function handleChange(event) {
    setTagInput(event.currentTarget.value.toLowerCase());
  }

  return (
    <>
      <TagPillsContainer style={{ marginTop: "2rem" }}>
        {props.tags.map((tag, idx) => (
          <TagSearch key={idx}>{tag}</TagSearch>
        ))}
      </TagPillsContainer>
      <TagPillsContainer>
        <LabelH3 htmlFor="tagInput">Add a Tag:</LabelH3>
        <InputForm
          type="text"
          name="tagInput"
          id="tagInput"
          value={tagInput}
          onChange={handleChange}
          placeholder="add a tag"
        />
        <TagButton type="submit" onClick={handleClick}>
          Add
        </TagButton>
      </TagPillsContainer>
    </>
  );
}

export default TagPills;
