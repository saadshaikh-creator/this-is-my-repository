// function displayText() {
//     var inputText = document.getElementById("userInput").value;
//     let password = document.getElementById("pass").value;
//     let conpassword = document.getElementById("conpass").value;
    
//     if(password !== "" && conpassword !== "")
//     {
//         if(password == conpassword)
//         {
//             if(inputText.includes("@gmail.com"))
//                 {
//                     alert("login successfull");
//                     window.location.assign('myfile.html');
//                     alert("Login Successfully");
//                     // document.getElementById("outputpass").innerText="Password: " +password;
//                     // document.getElementById("output").innerText = "email: " + inputText;
//                     // document.getElementById("LoginInfo").innerText = "email: " + inputText;
//                     localStorage.setItem('textvalue',inputText);
//                     return false;
//                 }
//                 else
//                 {
//                     alert("invalid Email address:");
//                 }
                     
//         }
//        else
//        {
//         alert("ERROR: password and confirmpassword must be same. ");

//        }
        
//     }
//     else
//     {
//         alert("ERROR: password fields  connot be empty.");
//     }
// }
// function gotosigning()
// {
//     window.location.assign('Sign-in.html');

// }

const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})


           

           
        
    