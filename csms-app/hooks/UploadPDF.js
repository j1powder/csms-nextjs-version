import React, { useState } from 'react';
import { projectStorage } from '@/firebaseConfig';
import classes from './UploadPDF.module.css'
import Card from 'react-bootstrap/Card'

const UploadPDF = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

let company;
if(props.users && props.currUser){
props.users.map((user)=>{
if(user.email === props.currUser.email){
company = user.companyName
}
})
}




  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
if(selectedFile){

  //console.log(selectedFile);
}

  const handleUpload = () => {
    if (selectedFile) {
      const storageRef = projectStorage.ref(`/${company}`);
      const fileRef = storageRef.child(selectedFile.name);
      fileRef.put(selectedFile)
        .then((snapshot) => {
          console.log('File uploaded successfully:', snapshot);
          setSelectedFile(null);
          console.log(snapshot._delegate.metadata.name)
          
          const newFilePath = projectStorage.ref().child(`/${company}/Benzene Final Exam.pdf`)
          const newFileName = `Insurance Document_2_14_2023.pdf`;
          newFilePath.updateMetadata({name: newFileName }).then(function(metadata){
            console.log('file name changed', snapshot);
          }).catch(function(error) {
            console.error('Error updating file name:', error);
          })
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
