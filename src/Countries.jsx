import React,{useEffect,useState} from 'react';
import MaterialTable from 'material-table';
import './country.css';

function Countries() {
    const [countries, setcountries] = useState([]); 

    useEffect(()=>{
        countryDetails(); //piece of code that runs everytime u load a page;
    },[]);

    const countryDetails = async () =>{ 
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data =await response.json();
    setcountries(data);
    console.log(data);
    
  }
    let info=[]
    countries.forEach(country=> info.push({name:country.name,capital:country.capital,
        flag:<img src={country.flag} height={30} width={50}/>,lang:country.languages[0].name,curr:country.currencies[0].name}));

    const column =[
        {title:'Name',
        field :'name',width:10},
        {title:'Capital',
        field :'capital'},
        {title:'Flag',
        field :'flag'},
        {title:'Language',
        field :'lang'},
        {title:'Currency',
        field :'curr'},
    ] 
        
    
    return (
        <div className='details'>
            <MaterialTable title="List of Countries" 
             data={info} columns={column}>
                
            </MaterialTable>
            
        </div>
    )
}

export default Countries
