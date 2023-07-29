import React ,{useContext} from 'react' ;
import CreateContext from '../Context/CreateContext';
 import { useNavigate } from 'react-router';
import "../index.css" ;


const Signup = () => {

    let {userId,setUserId} = useContext(CreateContext) ;

     let navigate = useNavigate() ;
let userdata = {} ;
    async function signIn(){
        let email = document.getElementById('email') ;
        let password = document.getElementById("password") ;

        if(email.value==="" || password.value ===""){
            alert("fill all details") ;
        }

        let evalue = email.value ;
        let pvalue = password.value ;
        console.log(evalue+"   "+pvalue) ;
        try{
            await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                username:evalue,
                password:pvalue,
                })
                })
                .then(res => {
                    return res.json()})
                .then(data =>{
                    var userId = data.id ;
                    
                     setUserId(userId) ;
                     navigate("profile") ;
                    // console.log(userId) ;
                    // console.log(data) ;
                });
                
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <div className='signup-container'>

        <div className='card'>
            <p>Welcome</p>
            <h2>Sign in into your account</h2>
            <label > Enter email</label>
            
            <input type='text' placeholder='Enter your name'  id='email'/>
            
            <label  >Enter password</label>
            
            <input type='password' placeholder='Enter your password' id='password'/>
            <button  onClick={ signIn }>continue</button>
            <a href=''>forget your password</a>
        </div>

        <div className='footter'>
            <span>Dont have account <a href=''>signIn</a></span>
        </div>
    </div>
  )
}

export default Signup