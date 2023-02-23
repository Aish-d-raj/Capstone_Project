import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate} from 'react-router-dom';


const JobsCard= (props) => {
  
  const navigate = useNavigate()
  
   const goToApply= () =>{
     navigate('/id',{state:{props}})
   }
  
  return (
    <div>
    <Card>
      <Card.Body> 
        <h8><strong>JOB ID:{props.id}</strong></h8>
            <Card.Title>{props.role}</Card.Title>
        <Card.Text>
          <p>{props.company}</p>
          <Icon.Briefcase/>{props.exp} yrs
          <span style={{marginRight:'25px'}}/>
          <Icon.CurrencyRupee/>{props.salary}
          <span style={{marginRight:'25px'}}/>
          <Icon.GeoAlt/>{props.location}
          {/* <span style={{marginLeft:'700px'}}/> */}
          {/* <Link to="/id"> */}
          <span style={{display:'flex',justifyContent:'flex-end'}}>
                        <button className='btn btn-primary' onClick={goToApply}>Apply</button>
                        </span>
                        {/* </Link> */}
                        
        </Card.Text>
      </Card.Body>
      
    </Card>
   <br/>
   
    </div>
  );
}

export default JobsCard;