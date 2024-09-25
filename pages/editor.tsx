import {CodeEditor} from "../src/components/codepen";

export default function Editor() {
  return (
    <>
      <article>
        <div className="container">          
          <CodeEditor />
          <div className="pagination">
            <div className="page-navigation">
              <div className="page-item">
                <a className="btn page-link" href="/">
                  <span className="page-previous-icon" aria-hidden="true"></span>
                  <span className="page-next-text">Inicio</span>
                </a>
              </div> 
              <div className="page-item disabled">
                <a className="btn page-link disabled" tabIndex={-1} href="/editor">
                  <span className="page-next-text">Editor</span>
                  <span className="page-next-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
