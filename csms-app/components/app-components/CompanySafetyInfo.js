import {useState, useEffect} from 'react'; 
import getCollection from "@/hooks/getCollection"


const CompanySafetyInfo = (props) => {
const [collectionData, setCollectionData] = useState();
    useEffect(() => {
        const fetchCollection = async () => {
          try {
            const data = await getCollection('Companies');
            setCollectionData(data);
          } catch (error) {
            console.error('Error fetching collection:', error.message);
          }
        };
    
        fetchCollection();
      }, []);


    return <>
    
{ collectionData && props.currUser && <>  
    {collectionData.map((entry)=>{
        if(entry.id === props.currUser.uid){
            return <>
            <p>Company Name: {entry.companyName} </p>
            <p>Address: {entry.physicalAddress}</p>
            <p>City: {entry.city}</p>
            <p>State: {entry.State}</p>
            <p>Zip: {entry.zipCode} </p>
            <p>Tax ID: {entry.taxid}</p>
            <p>Industry: {entry.workTypeIndustry}</p>
            <p>NAICS Code: {entry.NAICSCode} </p>
            <p>Main Safety Contact: {entry.MainSafetyContact} </p>
            <p>Job Bid Contact Person: {entry.PersonToContactForJobBids}</p>
            <p>Accounts Payable Person: {entry.AccountsPayableContactName}</p> 
            
            
            </>
        }

    }) }         

            
            </>  }

    
    </>
}

export default CompanySafetyInfo;