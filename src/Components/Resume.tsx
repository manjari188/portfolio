import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../assets/Resume.pdf'
import { Button, Container, Row } from "react-bootstrap";
import { useEffect, useState } from 'react';
import '../Resume.css'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { AiOutlineDownload } from 'react-icons/ai';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;




function Resume() {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [scrollPosition, setScrollPosition] = useState();

    useEffect(()=>{
        window.scrollTo(0, scrollPosition);
    },[pageNumber])

    const prevPage = () => {
        setScrollPosition(window.pageYOffset);
        setPageNumber(pageNumber - 1);
    }

    const nextPage = () => {
        setScrollPosition(window.pageYOffset);
        setPageNumber(pageNumber + 1);
    }

    return (
        <>
            <Row className='download-row' style={{ justifyContent: "center", position: "relative"}}>
                <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px", background: "#108e4c" }}
                >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                </Button>
            </Row>

            <Row className="resume">
                <Document file={pdf} className="d-flex justify-content-center">
                    <Page pageNumber={pageNumber} />
                </Document>
                <div className="page-controls">
                    <div className='page-control-container'>
                        <button type="button" onClick={prevPage} disabled={pageNumber === 1}>‹</button>
                        <span>{pageNumber}</span>
                        <button type="button" onClick={nextPage} disabled={pageNumber === 2}>›</button>
                    </div>
                </div>
            </Row>
        </>
    );
}


export default Resume