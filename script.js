
var typed = new Typed('#element', {
  strings:[
      "Quick Learner","Proactive","Punctual Person"
  ],
  typeSpeed:100,
  backSpeed:100,
  loop:true
})

const menuButton = document.querySelector('.menubutton');
const sidebar = document.getElementById('mysidebar');

let isopen  = false;
menuButton.addEventListener('click',()=>{

  isopen = !isopen;
  if(isopen==true){
      sidebar.style.opacity="1";
      sidebar.style.height="270px";
  sidebar.style.display = "flex";
  sidebar.style.flexDirection = "column";
  sidebar.style.justifyContent="center";
  sidebar.style.alignItems="center";
  sidebar.classList.toggle('visible')
  }
  else{
      sidebar.style.opacity="0";
      sidebar.style.height="0";
  }
 
  
})

const openPdfButton = document.getElementById('btn-box');
        
// Add a click event listener to the button
openPdfButton.addEventListener('click', function() {
    // Replace 'your_pdf_file.pdf' with the path to your PDF file
    const pdfUrl = 'RESUME(1).pdf';

    // Open the PDF in a new tab or window
    window.open(pdfUrl, '_blank');
});
