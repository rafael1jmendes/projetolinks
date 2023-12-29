function toggleMode(){
   const html = document.documentElement
   html.classList.toggle('light')
   
   //pegar a tag img
   const img = document.querySelector('#profile img')
   
   
   //substituir a image
   if(html.classList.contains ('light')){
      
      // se tiver light mode adc image light
      img.setAttribute('src', './links/assets/avatar-light.png')
 } else { 
    //se tiver dark manter image normal
img.setAttribute('src', "./links/assets/avatar.png")

 }
}