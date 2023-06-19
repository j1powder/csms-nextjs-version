

import React, { useState, useEffect } from 'react';
import { projectStorage } from '@/firebaseConfig';

const PDFViewer = () => {
  const [pdfUrls, setPdfUrls] = useState([]);

  useEffect(() => {
    const storageRef = projectStorage.ref();
    const pdfRef = storageRef.child('csms-app-576bc.appspot.com'); // Replace 'pdfs' with your storage path

    pdfRef.listAll().then((result) => {
      const urls = [];
      result.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          urls.push(url);
        });
      });
      setPdfUrls(urls);
    }).catch((error) => {
      console.error('Error retrieving PDF files:', error);
    });
  }, []);

 console.log( pdfUrls.map((url) => {
  return url
})
 )
  return (
    <div>
      <h1>PDF Viewer</h1>
      {pdfUrls.map((url) => (
        <iframe key={url} src={url} width="100%" height="600px" />
      ))}
    </div>
  );
};

export default PDFViewer;
