function changeFontColor(color){
  document.getElementById('text').style.color =color
}

function  changeBgImage(link){
  document.getElementById('text').style.backgroundImage = `url(${link})`
}

function  changeBgColor(color){
  document.getElementById('text').style.backgroundImage = null
  document.getElementById('text').style.backgroundColor = color
}

function  changeFontFamily(name){
  document.getElementById('text').style.fontFamily = name
}

function downloadImage(){
  const image=document.getElementById('text-editor')
  html2canvas(image)
  .then(canvas=>{
       const link=document.createElement('a')
       link.download="crafter.png"
       link.href=canvas.toDataURL("image/png")
       link.click()
  })
  .catch()
}




    

      