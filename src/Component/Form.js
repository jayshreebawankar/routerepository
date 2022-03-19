import './Form.css'    

const Form =()=>{

    function setError(){
        let dataName = document.getElementById(id)
        document.getElementsByClassName('formError')[0].innerHTML = error; 
    }

    const validateForm=()=>{
        let returnVal = true;

        let dataName = document.forms['myForm']['fname'].value;
        console.log(dataName);

        // if(dataName.length < 3){
        //     setError('dataName', 'Please fill up your name')
        //     return false;
        // }
        // return returnVal;
    } 
      
    return(      
        <div className="regForm">

        <form name="myForm" action="./object.html"  method="POST" onSubmit="return validateForm()">
            <h3 > Registration Form</h3>
            <div className="formDesign" id="fname">
                Name : <input type="text" name="fname" required/> <span className="formError"></span>
            </div>
            
            <div className="formDesign" id="email"> 
                Email : <input type="email" name="email" /> <span className="formError"></span>
            </div>
             
            <div className="formDesign" id="phone">
                Phone : <input type="phone" name="phone" required/> <span className="formError"></span>
            </div>

            <div className="formDesign" id="pass">
                Password : <input type="password" name="password" required/> <span className="formError"></span>
            </div>
            
            <div className="formDesign" id="cpass">
                Confirm Password : <input type="password" name="cpassword" required/> <span className="formError"></span>
            </div>

            <div>
                <button className = "btnSub">Submit</button>
            </div>
        </form>
        </div>
    )  
}
export default Form;