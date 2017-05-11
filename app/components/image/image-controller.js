function ImageController() {
    //Your ImageService is a global constructor function what can you do here if you new it up?
    var img = new ImageService()
    img.getImage(draw)
    function draw(image){
        console.log(image)
        document.getElementById("body").style.backgroundImage = `url(${image.url})`
    }
}

