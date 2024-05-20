 let searchForm = document.getElementById("search-form");
 let searchBox = document.getElementById("search-box");
 let searchRes = document.getElementById("search-res");
 let searchMore = document.getElementById("show-more");

 let keyword = "";
 let page = 1;
 const accessKey ="4UJGCig6o7ag384hJAk6MlPymoVQtMP8IKrwXr4Mdwc";

 async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchRes.innerHTML = "";  
    }
        const results = data.results;
        results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchRes.appendChild(imageLink);
    });
    searchMore.style.display= "block";
    }

    searchForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        page = 1;
        searchImages();

    });

    searchMore.addEventListener("click", ()=>{
        page++;
        searchImages();
    }); 
 