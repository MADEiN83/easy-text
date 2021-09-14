import React from "react";

const FAKE_TEXT = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi doloribus
illum nulla a totam laboriosam vel cumque officiis ipsa iure ad, odi
laudantium impedit voluptates reprehenderit quia corporis tempore
blanditiis.





Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi doloribus
illum nulla a totam laboriosam vel cumque officiis ipsa iure ad, odi
laudantium impedit voluptates reprehenderit quia corporis tempore
blanditiis.`;

const TextEditor: React.FC = () => {
  return <textarea className="text-editor">{FAKE_TEXT}</textarea>;
};

export default TextEditor;
