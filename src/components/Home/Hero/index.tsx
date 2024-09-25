import Link from "next/link";
import React from "react";

export const Hero = () => {
  const getIframeSource = () => {
    const randomNum = Math.random();

    let iframeIndex: number;
    switch (true) {
      case randomNum < 0.9:
        iframeIndex = 0;
        break;
      case randomNum < 0.95:
        iframeIndex = 1;
        break;
      default:
        iframeIndex = 2;
        break;
    }

    const iframeSources = [
      "https://lottie.host/embed/0f675d9f-283f-4b85-bc53-4a90e4283ce5/0675iU7U0U.json",
      "https://lottie.host/embed/790e60d5-6e87-434e-ba05-c89d1d767365/bTDy8tkASe.json",
      "https://lottie.host/embed/18f89c7b-8d1f-4626-8fa9-57068c2847be/7sqnS787Hq.json",
    ];

    return iframeSources[iframeIndex];
  };

  const iframeSrc = getIframeSource();

  return (
    <>
      <div className="row box-home">
        <div className="col col-lg-7">
          <div className="">
            <h1>Editor Obelisco V2 online.</h1>
            <p>
              En este sitio web podrás explorar e interactuar con los
              componentes de Obelisco V2 en tiempo real, permitiéndote probar su
              funcionalidad y copiar el código para su uso en tus proyectos.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <Link href="/editor" className="btn btn-secondary btn-lg btn-icon">
              Comenzar
              <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        </div>
        <div className="d-none d-lg-flex col-lg-5 justify-content-end">
          <iframe src={iframeSrc} width={450} height={350} title="imagen ilustrativa para la web. solo decorativa." ></iframe>
        </div>
      </div>
    </>
  );
};
