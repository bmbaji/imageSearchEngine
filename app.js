const accessKey = "1J9Jc5QWJwbc1o1KJ_uCCUkqiT5mjJhcwDeAS2_dbts"

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")


let keyword = "";
let page = 1

async function searchImages(){
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url)

    const data = await response.json()

    if (page === 1){
        searchResult.innerHTML = ""
    }

    const results = data.results;
    

    results.map((result)=> {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    if (keyword !== ""){
        showMoreBtn.style.display = "block"
    } else{
        alert("You have not searched for anything!")
    }

    
}

searchForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    page = 1
    searchImages()
})

showMoreBtn.addEventListener("click", () => {
    page++
    searchImages()
})

// access key = 1J9Jc5QWJwbc1o1KJ_uCCUkqiT5mjJhcwDeAS2_dbts
// webiste for the api = https://unsplash.com/oauth/applications/460407