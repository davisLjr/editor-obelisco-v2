import React from "react";

export const WebIframe = () => {
  return (
    <>
      <iframe
        src="https://gcba.github.io/Obelisco-V2/"
        loading="lazy"
        style={{border: "none", width: "100%"}}
        height="500"
        allow="clipboard-write"
        title="pagina de obelisco v2" 
      ></iframe>
    </>
  );
};
