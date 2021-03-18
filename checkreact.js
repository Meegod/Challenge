import React,{useState} from 'react';

//JSX

//Explanation of react state
//State is  a short term memory and its component
//Specific ...
//Usestate helps to set the short term  memory

function App(){
	const[todos,setTodos]=useState(['Take dog for walks','Take the rubbish out']);

	return( 
<div className="App">
<h1>Hello clever Programmer </h1>
</div>



		);

}
export default App;
const jobs=[
{id:1, isActive:true},
{id:2, isActive:true},
{id:2, isActive:false},

];

const activejobs=jobs.filter(job=>job.isActive);