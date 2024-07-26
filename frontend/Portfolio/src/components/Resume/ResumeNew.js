import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const getPageScale = () => {
    if (width > 1200) return 1.7;
    if (width > 786) return 1.3;
    return 0.6;
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div className="pdf-container d-flex flex-column align-items-center">
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex flex-column align-items-center"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={getPageScale()}
                  className="pdf-page"
                />
              ))}
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>

      <style jsx>{`
        .pdf-container {
          overflow: auto;
          max-height: 100vh;
        }

        .pdf-page {
          margin-bottom: 20px; /* Adjust as needed for spacing between pages */
        }

        @media (max-width: 786px) {
          .pdf-page {
            max-width: 100vw; /* Adjust to fit within the viewport width */
          }
        }

        @media (max-width: 576px) {
          .pdf-page {
            max-width: 100vw; /* Adjust to fit within the viewport width */
          }
        }
      `}</style>
    </div>
  );
}

export default ResumeNew;
