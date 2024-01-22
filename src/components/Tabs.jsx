import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCopy } from "react-icons/fa";

const Tabs = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const selectTab = (tab) => {
    setSelectedTab(tab);
  };

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  return (
    <>
      <div className="tabs-container">
        <div className="tabs-list">
          {data.files.map((file) => {
            return (
              <div
                className={selectedTab === file.fileID ? "tab active-tab" : "tab"}
                key={Math.round(Math.random() * 999999)}
                onClick={() => selectTab(file.fileID)}
              >
                {file.filename}
              </div>
            );
          })}
        </div>
        <div className="content-container">
          {data.files.map((file) => {
            return (
              <div
                className={selectedTab === file.fileID ? "content active-content" : "content"}
                key={Math.round(Math.random() * 999999)}
              >
                <SyntaxHighlighter
                  language="javascript"
                  style={atomOneDark}
                  lineProps={{
                    style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
                  }}
                  wrapLongLines={true}
                  wrapLines={true}
                  customStyle={{
                    overflowX: "hidden",
                    padding: "10px",
                    marginTop: "15px",
                    marginBottom: "15px",
                    height: "100%",
                    width: "auto",
                  }}
                >
                  {file.content}
                </SyntaxHighlighter>
                <div className="copy-btn">
                  <FaCopy className="copy-icon" onClick={() => copyTextToClipboard(file.content)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tabs;
