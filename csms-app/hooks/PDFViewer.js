

import React, { useState, useEffect } from 'react';

// i'm initializing firebase with firebase.initializeApp(firebaseConfig)
import { projectStorage } from '@/firebaseConfig'; // projectStorage is = firebase.storage();


const PDFViewer = () => {
  const [pdfUrls, setPdfUrls] = useState();
  
  useEffect( () =>  {
    const getPdfs = async() =>{
      const storageRef = projectStorage.ref();
      const pdfRef = storageRef.child('/');
      const urls = [];
      const result = await pdfRef.listAll();
      for (const itemRef of result.items) {
        const url = await itemRef.getDownloadURL();
        urls.push(url);
    }
  setPdfUrls(urls)
    }
getPdfs();
},[])

 if(pdfUrls){
  console.log(pdfUrls)
} 
/*  console.log( pdfUrls.map((url) => {
  return url
})
 ) */
  return (
    <div>
      <h1>PDF Viewer</h1>
      <br/>
      <ul>
      {pdfUrls && pdfUrls.map((item)=>{
       return <li><a href={item}>document</a></li>

      }) 
         
         
          }
      </ul>

    </div>
  );
};

export default PDFViewer;
