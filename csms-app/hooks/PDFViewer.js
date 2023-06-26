

import React, { useState, useEffect } from 'react';

// i'm initializing firebase with firebase.initializeApp(firebaseConfig)
import { projectStorage } from '@/firebaseConfig'; // projectStorage is = firebase.storage();


const PDFViewer = (props) => {
  const [pdfUrls, setPdfUrls] = useState();
  
  let company;
if(props.users && props.currUser){
props.users.map((user)=>{
if(user.email === props.currUser.email){
company = user.companyName
}
})
}




  useEffect( () =>  {
    const getPdfs = async() =>{
      const storageRef = projectStorage.ref();
      const pdfRef = storageRef.child(`/${company}`);
      const urls = [];
      const result = await pdfRef.listAll();
      for (const itemRef of result.items) {
        const url = await itemRef.getDownloadURL();
        console.log(result.items)
        urls.push(url);
    }
  setPdfUrls(urls)
    }
getPdfs();
},[])

 if(pdfUrls){
  console.log(pdfUrls)
} 






  return (
    <div>
      <h1>PDF Viewer</h1>
      <br/>
      <ul>
      {pdfUrls && pdfUrls.map((item)=>{
       return <li><a href={item} target="_blank">document</a></li>

      }) 
         
         
          }
      </ul>

    </div>
  );
};

export default PDFViewer;
