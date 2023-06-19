import React, { useState } from 'react';
import { projectStorage } from '@/firebaseConfig';
import classes from './UploadPDF.module.css'
import Card from 'react-bootstrap/Card'

const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const storageRef = projectStorage.ref();
      const fileRef = storageRef.child(selectedFile.name);
      fileRef.put(selectedFile)
        .then((snapshot) => {
          console.log('File uploaded successfully:', snapshot);
          setSelectedFile(null);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };

  return (
    <Card><Card.Body>
    <div>
      <input type="file" onChange={handleFileChange} /><br/><br/>
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
    </Card.Body></Card>
  );
};

export default UploadPDF;
