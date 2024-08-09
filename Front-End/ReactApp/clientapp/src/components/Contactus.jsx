import axios from "axios";
import { useState } from "react";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contactus =() =>{
    const MySwal = withReactContent(Swal)
    const URL="http://localhost:3001/addContact"
    const [contact,setContact]=useState({name:"",email:"",phone:"",query:""})
    const handleChange=(e)=>{
        setContact((currVal)=>{
          return {...currVal,[e.target.name]:e.target.value}
        })
      }
    
    
        const handelForm=async (e)=>{
          e.preventDefault()
          setContact({name:"",email:"",phone:"",query:""})
     
          try{
            const res= await axios.post(URL,contact)
            console.log(res.data);

            Swal.fire({
                title: "Contacts Us",
                text: res.data,
                icon: "question"
              });
          
              
          }catch(err){
              console.log("error"+err.message)
          }
      
        }
    return(
        <>
        <section className="vh-100" style={{ backgroundColor: "#7E8F74",backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            
            <div className="container" >
            <div className="row" >
                
                
                <div className="col-md-8 col-sm-12" style={{ marginTop: "25px", marginLeft:"200px" }} >
                    <div className="card" >
                        <div className="card-body" >
                            <div className="mb-3">
                            <h1 style={{textAlign:"center", marginTop: "5px"}}>Contact Us</h1><br/>
                                <label for="exampleFormControlInput1" className="form-label" style={{color:"blue"}}>Name</label>
                                <input type="text" className="form-control" value={contact.name} onChange={handleChange} name="name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label" style={{color:"blue"}}>Email address</label>
                                <input type="email" className="form-control"  placeholder="name@example.com" value={contact.email} name="email" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label" style={{color:"blue"}}>Query</label>
                                <textarea className="form-control"  rows="3" value={contact.query} name="query" onChange={handleChange}></textarea>
                            </div>
                            <div className="form-outline mb-3">
                            <label className="form-label" for="typeNumber" style={{color:"blue"}}>Number input</label>
                                <input type="number" id="typeNumber" className="form-control"value={contact.phone} name="phone" onChange={handleChange} />
                                
                            </div>
                            <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto" style={{ textAlign: 'center' }}>
                                <button type="submit" className="btn btn-primary mb-3" onClick={handelForm} >Submit</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
           
                
                    
            
        </>
    )
}
export default Contactus