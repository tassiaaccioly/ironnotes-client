//dependencies
import React, { useState, useEffect } from "react";

//styled components
import { LabelH3 } from "./notestyles/page";
import {
  TagPillsContainer,
  TagSearch,
  TagButton,
  TagDiv,
  DeleteTag,
} from "./notestyles/tagstyles";
import { InputForm } from "./notestyles/events";

//images
import CloseBtn from "../../assets/icons/close.svg";

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

  function handleTagClick(event) {
    const tag = event.target.name;
    const newTags = [...props.tags].filter((elem) => elem !== tag);
    props.setTags([...newTags]);
  }

  return (
    <>
      <TagPillsContainer style={{ marginTop: "2rem" }}>
        {props.tags.map((tag, idx) => (
          <TagDiv key={idx} style={{ margin: "0 .5rem" }}>
            <TagSearch>{tag}</TagSearch>
            <img
              onClick={handleTagClick}
              name={tag}
              width="13px"
              src={CloseBtn}
              alt="Close"
            />
          </TagDiv>
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
