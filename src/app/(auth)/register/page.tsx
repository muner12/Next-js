"use client"
export default function Register(){
  
    const submitHandler=(e:any)=>{
        const email=e.target[0].value;
        const password=e.target[1].value;
        console.log(email,password);
        
            e.preventDefault();
    }
    return (<div>


      
    </div>)
}