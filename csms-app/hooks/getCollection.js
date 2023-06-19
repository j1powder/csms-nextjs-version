import {projectFirestore} from '../firebaseConfig';

const getCollection = async (collection) => {
    try {
      const snapshot = await projectFirestore.collection(collection).get();
      const data = snapshot.docs.map((doc) => doc.data());
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  
  const addDocument = async (collection) => {
  try {
    const collectionRef = projectFirestore.collection(collection);

    // Create a new document with an auto-generated ID
    const newDocumentRef = await collectionRef.add({
      companyName: 'value1',
      legalName: 'value2',
      dba:'',
      physicalAddress:'',
      city: '',
      State: '',
      zipCode: '',
      companyPhone: '',
      companyEmail: '',
      taxid:'',
      workTypeIndustry: '',
      NAICSCode: '',
      YearsInBusiness: '',
      NumberOfEmployees: '',
      MainSafetyContact: '',
      PersonToContactForJobBids: '',
      JobBidContactPhone: '',
      JobBidContactEmail: '',
      AccountsPayableContactName: '',
      AccountsPayableContactPhone: '',
      AccountsPayableContactEmail: ''
      // ... add more fields as needed
    });

    console.log('Document added with ID: ', newDocumentRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

  export default getCollection;