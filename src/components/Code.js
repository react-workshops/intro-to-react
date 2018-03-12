import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/styles/hljs";

const Code = ({ code }) => (
  <SyntaxHighlighter language="javascript" style={docco} highlighter={"hljs"}>
    {code}
  </SyntaxHighlighter>
);

export default Code;
