//`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=ndtv&type=video&key=AIzaSyC7WrwNeC5bsLjybGzPY3zxCkDbbBBmql8`

  
async function check(){

    let res =  await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=ndtv&type=video&key=AIzaSyC7WrwNeC5bsLjybGzPY3zxCkDbbBBmql8`)
    
    let data = await res.json()
    
    console.log(data)   
    append(data.items)
}
check()

function append (data){
    data.map(function({id:{videoId},snippet:{description,thumbnails}}){
        let box = document.createElement("div")

        let image = document.createElement("img")
        image.src = thumbnails.default.url

        let title = document.createElement("p")
        title.innerText = description

        box.append(image,title)

    

        document.getElementById("cont").append(box)

    })
}
