import React, { useState } from "react";
import SimpleCodeEditor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import "prism-themes/themes/prism-dracula.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import styles from "./CodeEditor.module.scss";
import { WebIframe } from "../web-iframe";

export const CodeEditor: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [iframeCode, setIframeCode] = useState("");
  const [activeTab, setActiveTab] = useState("html");
  const [isResultExpanded, setIsResultExpanded] = useState(false);

  const handleHtmlChange = (value: string) => {
    setHtmlCode(value);
  };

  const handleCssChange = (value: string) => {
    setCssCode(value);
  };

  const handleIframeChange = (value: string) => {
    setIframeCode(value);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleExpandResult = () => {
    setIsResultExpanded((prevExpanded) => !prevExpanded);
  };

  const renderCodeEditor = (language: string, code: string) => (
    <div className={styles.codeEditorWrapper}>
      <div className={`${styles.preStyle} ${styles.codeEditor}`}>
        <SimpleCodeEditor
          value={code}
          onValueChange={
            language === "html"
              ? handleHtmlChange
              : language === "css"
              ? handleCssChange
              : handleIframeChange
          }
          highlight={(code) =>
            highlight(
              code,
              language === "html" ? languages.html : languages.css
            )
          }
          padding={10}
          placeholder={`Ingrese su código ${language === "html" ? "HTML" : "CSS"} aquí`}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "#1a1830",
            color: "white",
            overflow: "auto",
            minHeight: "70vh",
            height: "100%"
          }}
        />
      </div>
    </div>
  );

  const renderResult = () => (
    <div className={` ${styles.result} ${isResultExpanded ? styles.expanded : ""}`}>
      <button
        type="button"
        className={`btn btn-outline-primary btn-icon ml-2 ${styles.shut}`}
        aria-label="Botón"
        onClick={handleExpandResult}
        title="contraer"
      >
        <span className="material-symbols-rounded">close</span>
      </button>
      <style>{cssCode}</style>
      <div
        className="resultado"
        dangerouslySetInnerHTML={{ __html: htmlCode }}
      ></div>
    </div>
  );

  return (
    <>
      <nav className="tabs-box mt-2 px-0 mb-0">
        <ul className="nav nav-pills tabs m-0 pb-0">
          <li className="nav-item mt-2">
            <button
              className={`nav-link  ${activeTab === "html" ? "active" : ""}`}
              onClick={() => handleTabClick("html")}
            >
              HTML
            </button>
          </li>
          <li className="nav-item mt-2">
            <button
              className={`nav-link  ${activeTab === "css" ? "active" : ""}`}
              onClick={() => handleTabClick("css")}
            >
              CSS
            </button>
          </li>
          <li className="nav-item mt-2">
            <button
              className={`nav-link  ${activeTab === "iframe" ? "active" : ""}`}
              onClick={() => handleTabClick("iframe")}
            >
              Obelisco V2
            </button>
          </li>
        </ul>
      </nav>
      <hr className="mt-0 mb-2" /> 
        <div className="d-flex justify-content-end">
        {!isResultExpanded && (
          <span
            data-direction="top-left"
            data-tooltip='Expandir.'
            tabIndex={0}
          >
            <button
              type="button"
              className={`btn btn-primary btn-sm ml-2 mb-2 ${styles.shut}`}
              aria-label="Botón"
              onClick={handleExpandResult}
              title="expandir"
            >
              <span className="material-symbols-rounded o-icon">open_in_full</span>
            </button>
          </span>
        )}
      </div>
      <div className={`${styles.mainEditor}`}>
        <div className={styles.mainResult}>

          {renderResult()}
        </div>

        <div className={styles.mainEditor}>
          {activeTab === "html" ? (
            renderCodeEditor("html", htmlCode)
          ) : activeTab === "css" ? (
            renderCodeEditor("css", cssCode)
          ) : (
            <WebIframe />
          )}
        </div>

        <div className={`${styles.figure}`}></div>
      </div>
    </>
  );
};
