
    const btn = document.querySelector('.cta');
    const copyEmail = () => {
      const Email = 'ernestfakokunde9@gmail.com';
      navigator.clipboard.writeText(Email).then(() => {
        btn.textContent = "wait a second";
        setTimeout(() => {
          btn.textContent = "send a mail";
        }, 3000);
      }).catch(err => {
        console.log('Failed to copy Email');
      });
    };
    btn.addEventListener("click", copyEmail);

    const cbtn = document.querySelector('.ctb');
    const copyEmail2 = () => {
      const Email = "ernestfakokunde9@gmail.com";
      navigator.clipboard.writeText(Email).then(() => {
        cbtn.textContent = "wait a second";
        setTimeout(() => {
          cbtn.textContent = "send an email";
        }, 3000);
      }).catch(err => {
        console.log('Failed to copy Email');
      });
    };

    cbtn.addEventListener("click", copyEmail2);
  
  const typingText = document.querySelector('.typing-text');
  const message =
  `<h3 class = "txt">Welcome to My Portfolio</h1>

  <p> i'm Ernest Fakokunde, 
  <span class="dev">A full stack Developer</span> With a
   passion for clean design and
   Performance.
   <br>
   i specialize in <span class="frames"> HTML,CSS, Javascript</span>
   and other <span class="frames">frameworks</span> . 
   I have a solid stand in javascript.
    <br>
   i'm Also an Expert in Bulding
   designs from scratch.
   i build intiutive and mobile 
   friendly designs.
   <br><br>
   Nice To meet you </p>`;

   let index = 0;

   function typeloop(){
    typingText.innerHTML = message.substring(0,index)
    index ++;
    if( index > message.length){
      index = 0;
      setTimeout(typeloop,2000)
    }else{
      setTimeout(typeloop,30)
    }
   }
   typeloop();

   const headtext = document.querySelector('.head-text');

   let headText = " Codes";
   let Headindex = 0

   function headtypeloop(){
    headtext.innerHTML = headText.substring(0,Headindex);
     Headindex ++;
    if(Headindex > headText.length){
      Headindex = 0;
      setTimeout(headtypeloop,800)
    }else{
      setTimeout(headtypeloop, 500)
    }
   }

   headtypeloop();

   //Fuction to get user input and send to database or local database
   //Note not real url is used to store the user info for now
   // This is just a simulation of how it works
   const spinner = document.querySelector(".spinner")
   const form = document.getElementById('ctn-form');
    let output = document.querySelector(".outputpage");

   form.addEventListener("submit", async (event)=>{
    event.preventDefault();
//now lets get all user inputs from the form
    const name = document.querySelector(".inputname").value;
    const email = document.querySelector(".inputemail").value;
    const message = document.querySelector(".inputmsg").value;

    //We have to create an object like json format to convert it
    //and be able to send to the server or database
    //Note no real api is used
    //just for simulation

    let myform = {
      name : name,
      email: email,
      message: message
    }

    let url = "https://jsonplaceholder.typicode.com/posts"
    //note for simulation only

    //we have to use the try and catch to look for errors and resolve
    if(name === "" || email === "" || message===""){
      alert("Error : Must fill all fields");
      return;
    }
    //show the spinner while the request is being processed
    spinner.style.display = "flex";
    output.style.display = "block";
    output.innerHTML= "";
    output.appendChild(spinner);
    try{
      let response = await fetch(url,{
        method: "POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(myform)
      });

      let finalPost = await response.json()
      console.log(finalPost)

     spinner.style.display = "none";
      //now we can show the output to the user
      output.innerHTML = `
      <div class="check"> <svg class="check" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18333C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> </div>
      <p class="fn-msg">Hello Your request has been received succesfully.</p>`;
      console.log("Success: ", finalPost);
      // Hide the form and show only the output
      form.style.display = "none";
      output.style.display = "block";
    } catch(error){
      console.log("Error: ",error );
      spinner.style.display= "none";
      output.innerHTML = `<p>Failed to Send Check your internet Connection and try again</p>`
    }
    form.reset();
   });

  