import React from "react";
import JobsCard from "./JobsCard";

const JobsComponent= () =>{
    return(
        <div>
            <JobsCard
            id="101"
            role="Sales Manager"
            company="SRG International"
            exp="5-6"
            salary="Not disclosed"
            location="Faridabad"/>

            <JobsCard
            id="102"
            role="Accounts-Officer"
            company="Kay Products"
            exp="4-9"
            salary="275000-400000"
            location="Banglore"/>
            
            <JobsCard
            id="103"
            role="SAP Consultant"
            company="Bhavana Products"
            exp="10-15"
            salary="1000000-1500000"
            location="Mumbai"/>

            <JobsCard
            id="104"
            role="Accounts-Officer"
            company="AJ Technologies"
            exp="4-5"
            salary="1000000"
            location="Remote"/>

           <JobsCard
            id="105"
            role="Web Developer"
            company="MNC International"
            exp="0-1"
            salary="500000"
            location="Banglore"/>

            <JobsCard
            id="106"
            role="HR"
            company="Kay Products"
            exp="0-2"
            salary="275000-400000"
            location="Remote"/>

           <JobsCard
            id="107"
            role="Assistant Manager"
            company="Indigo Airlines"
            exp="1-6"
            salary="Not disclosed"
            location="Chennai"/>

           <JobsCard
            id="108"
            role="Testing"
            company="DA Manufacturers"
            exp="1-3"
            salary="275000-400000"
            location="Remote"/> 
        </div>
    )
}

export default JobsComponent;