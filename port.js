
    const btn = document.querySelector('.cta');
    const copyEmail = () => {
      const Email = 'ernestfakokunde9@gmail.com';
      navigator.clipboard.writeText(Email).then(() => {
        btn.textContent = "Copied";
        setTimeout(() => {
          btn.textContent = "Copy Email";
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
        cbtn.textContent = "Copied";
        setTimeout(() => {
          cbtn.textContent = "Copy Email";
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
      setTimeout(headtypeloop,1000)
    }else{
      setTimeout(headtypeloop, 200)
    }
   }

   headtypeloop();

  