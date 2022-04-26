fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const postArr = data.slice(0, 5)
        let html = ""
        for(let post of postArr){
            html += "<h3>" + post.title + "</h3><p>" + post.body + "</p>"
        }
        document.getElementById("blog-list").innerHTML= html
    })

document.getElementById("new-post").addEventListener("submit", function(e){
    e.preventDefault
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }
})