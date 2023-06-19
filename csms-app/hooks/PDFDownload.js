import React from 'react';
import { projectStorage } from '@/firebaseConfig';
import axios from 'axios';

const DownloadPDF = () => {
  const handleDownload = async () => {
    try {
      const storageRef = firebase.storage().ref();
      const pdfRef = storageRef.child('path/to/pdf/document.pdf'); // Replace with your storage path

      const downloadURL = await pdfRef.getDownloadURL();

      const response = await axios({
        url: downloadURL,
        method: 'GET',
        responseType: 'blob', // Important to set the response type to 'blob'
      });

      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob([response.data]));
      downloadLink.setAttribute('download', 'document.pdf');
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
 
 
  return (
    <div>
      <h1>Download PDF</h1>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadPDF;
