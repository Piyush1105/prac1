import React from "react";
import "./APIspace.css";
import "./editor";
//import "./src-min/ace.js";
//import "./src-min/mode-javascript.js";

function APIspace() {
  return (
    <>
      <div className="occupy">
        <div className="editor">
          <div className="editor__wrapper">
            <div className="editor__body">
              <div id="editorCode" className="editor__code"></div>
            </div>
            <div className="editor__footer">
              <div className="editor__footer--left">
                <button className="editor__btn editor__run">Run </button>
                <button className="editor__btn editor__reset">Reset </button>
              </div>
              <div className="editor__footer--right">
                <div className="editor__console">
                  <ul className="editor__console-logs"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default APIspace;
