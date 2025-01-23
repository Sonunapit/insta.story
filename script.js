var arr = [
    {dp:"https://th.bing.com/th/id/OIP.BscbAsqE55SVFwYKJrZVBgHaLH?rs=1&pid=ImgDetMain",story:"https://www.filmibeat.com/fanimg/artist/38633/kalyani-priyadarshan-photos-images-2023060683656700.jpg"},
    {dp:"https://th.bing.com/th/id/OIP.RbJyFUpodJO9xPSLxrmU8gHaLH?rs=1&pid=ImgDetMain",story:"https://th.bing.com/th/id/OIP.DtboCdSaM5rfAhcJlAJQxgHaLH?rs=1&pid=ImgDetMain"},
    {dp:"https://th.bing.com/th/id/OIP.u_yDOkWp0GwuwrtRu_cazwHaJN?rs=1&pid=ImgDetMain",story:"https://www.kerala9.com/wp-content/gallery/nithya-menen/actress-nithya-menon-bridal-photos-003.jpg"},
    {dp:"https://www.oneindia.com/ph-big/2022/09/south-actress-nivetha-thomas-s-new-makeover-goes-viral_166315725960.jpg",story:"https://th.bing.com/th/id/OIP.9SMH6nQPT9EupXXERe2DAAHaLF?rs=1&pid=ImgDetMain"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">

            </div> `
});

storiyan.innerHTML = clutter;
storiyan.addEventListener("click",function(dets) {
   document.querySelector("#full-screen").style.display = "block"
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(function(){
       document.querySelector("#full-screen").style.display = "none"
   },5000)
});

