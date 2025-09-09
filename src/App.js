import React, { useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './App.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
//import 'react-pdf/dist/Page/TextLayer.css';
import samplePDF from './sample.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  const documentRef = useRef()

  return (
    <div className='container'>
      <Document 
        onLoadSuccess={(e) => { 
          documentRef.current = e._transport;
        }} 
        file={samplePDF}
      >
        <Page scale={1.5} renderAnnotationLayer={true} renderForms={true} pageNumber={1} />
      </Document>
      <button 
        className='save-button'
        onClick={async () => {
          const data = await documentRef.current.saveDocument();
          const blob = new Blob([data], { type: 'application/pdf' });
    
          const link = document.createElement('a');      
          const url = URL.createObjectURL(blob);
          link.href = url;
          link.download = 'document.pdf';
          
          link.click();
    
          URL.revokeObjectURL(url);
        }}>
          {'Save file'}
      </button>
    </div>
  );
}

export default App;
