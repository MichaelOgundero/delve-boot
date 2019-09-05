async function delve(){

    const api_key = "623eeab48528051330ddc3ca73959483";
    const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;
    const response = await fetch(api_url);
    const json = await response.json();
    //console.log(json);

    

    const imgSize = "original";

    const firstImage = document.getElementById("firstImage");
    firstImage.src = `https://image.tmdb.org/t/p/${imgSize}/${json.results[0].backdrop_path}`;
    const firstTitle = document.getElementById("firstTitle");
    firstTitle.textContent = `${json.results[0].title}`;
    const firstDescription = document.getElementById("firstDescription");
    firstDescription.textContent = `${json.results[0].overview}`;

    const secondImage = document.getElementById("secondImage");
    secondImage.src = `https://image.tmdb.org/t/p/${imgSize}/${json.results[1].backdrop_path}`;
    const secondTitle = document.getElementById("secondTitle");
    secondTitle.textContent = `${json.results[1].title}`;
    const secondDescription = document.getElementById("secondDescription");
    secondDescription.textContent = `${json.results[1].overview}`;

    const thirdImage = document.getElementById("thirdImage");
    thirdImage.src = `https://image.tmdb.org/t/p/${imgSize}/${json.results[2].backdrop_path}`;
    const thirdTitle = document.getElementById("thirdTitle");
    thirdTitle.textContent = `${json.results[2].title}`;
    const thirdDescription = document.getElementById("thirdDescription");
    thirdDescription.textContent = `${json.results[2].overview}`;

    const fourthImage = document.getElementById("fourthImage");
    fourthImage.src = `https://image.tmdb.org/t/p/${imgSize}/${json.results[3].backdrop_path}`;
    const fourthTitle = document.getElementById("fourthTitle");
    fourthTitle.textContent = `${json.results[3].title}`;
    const fourthDescription = document.getElementById("fourthDescription");
    fourthDescription.textContent = `${json.results[3].overview}`;

    const fifthImage = document.getElementById("fifthImage");
    fifthImage.src = `https://image.tmdb.org/t/p/${imgSize}/${json.results[4].backdrop_path}`;
    const fifthTitle = document.getElementById("fifthTitle");
    fifthTitle.textContent = `${json.results[4].title}`;
    const fifthDescription = document.getElementById("fifthDescription");
    fifthDescription.textContent =  `${json.results[4].overview}`;


    //new and upcoming
    const imgSizeNewUpcoming = "original"
    const nowPlaying_api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1&region=US`;
    const nowPlaying_response = await fetch(nowPlaying_api_url);
    const nowPlaying_json = await nowPlaying_response.json();
    //console.log(nowPlaying_json);
    const firstRow1 = document.getElementById("1,1");
    firstRow1.src = `https://image.tmdb.org/t/p/${imgSizeNewUpcoming}/${nowPlaying_json.results[0].poster_path}`;
    const firstRow1Title = document.getElementById("1,1Title");
    firstRow1Title.textContent = nowPlaying_json.results[0].title;

    const firstRow2 = document.getElementById("1,2");
    firstRow2.src = `https://image.tmdb.org/t/p/${imgSizeNewUpcoming}/${nowPlaying_json.results[1].poster_path}`;
    const firstRow2Title = document.getElementById("1,2Title");
    firstRow2Title.textContent = nowPlaying_json.results[1].title;

    const firstRow3 = document.getElementById("1,3");
    firstRow3.src = `https://image.tmdb.org/t/p/${imgSizeNewUpcoming}/${nowPlaying_json.results[2].poster_path}`;
    const firstRow3Title = document.getElementById("1,3Title");
    firstRow3Title.textContent = nowPlaying_json.results[2].title;

    const firstRow4 = document.getElementById("1,4");
    firstRow4.src =`https://image.tmdb.org/t/p/${imgSizeNewUpcoming}/${nowPlaying_json.results[3].poster_path}`;
    const firstRow4Title = document.getElementById("1,4Title");
    firstRow4Title.textContent = nowPlaying_json.results[3].title;


    const upComing_api_url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1&region=US`;
    const upComing_response = await fetch(upComing_api_url);
    const upComing_json = await upComing_response.json();
    //console.log(upComing_json);
    const secondRow1 = document.getElementById("2,1");
    secondRow1.src = `https://image.tmdb.org/t/p/${imgSizeNewUpcoming}/${upComing_json.results[0].poster_path}`;
    const secondRow1Title = document.getElementById("2,1Title");
    secondRow1Title.textContent = upComing_json.results[0].title;

    const secondRow2 = document.getElementById("2,2");
    secondRow2.src = `https://image.tmdb.org/t/p/${imgSizeNewUpcoming}/${upComing_json.results[1].poster_path}`;
    const secondRow2Title = document.getElementById("2,2Title");
    secondRow2Title.textContent = upComing_json.results[1].title;

    const secondRow3 = document.getElementById("2,3");
    secondRow3.src = `https://image.tmdb.org/t/p/${imgSizeNewUpcoming}/${upComing_json.results[2].poster_path}`;
    const secondRow3Title = document.getElementById("2,3Title");
    secondRow3Title.textContent = upComing_json.results[2].title;

    const secondRow4 = document.getElementById("2,4");
    secondRow4.src = `https://image.tmdb.org/t/p/${imgSizeNewUpcoming}/${upComing_json.results[3].poster_path}`;
    const secondRow4Title = document.getElementById("2,4Title");
    secondRow4Title.textContent = upComing_json.results[3].title;

    //movie of the day

    //get movie id 
    const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
    const trendingResponse = await fetch(trendingMovieUrl);
    const trendingJson = await trendingResponse.json();
    const trendingID = trendingJson.results[8].id;
    console.log(trendingJson);

    //get movie details
    const trendingMoviePosterSize = "original";
    const trendingMovieInfoUrl = `https://api.themoviedb.org/3/movie/${trendingID}?api_key=${api_key}`;
    const trendingMovieInfoResponse = await fetch(trendingMovieInfoUrl);
    const trendingMovieInfoJson = await trendingMovieInfoResponse.json();

    const trendingMoviePoster = document.getElementById("movieofDayPoster");
    trendingMoviePoster.src = `https://image.tmdb.org/t/p/${trendingMoviePosterSize}/${trendingMovieInfoJson.poster_path}`;
    const trendingMovieTitle = document.getElementById("Title");
    trendingMovieTitle.textContent = trendingMovieInfoJson.title;
    const trendingMovieGenre = document.getElementById("Genre");
    trendingMovieGenre.textContent = `${trendingMovieInfoJson.genres[0].name}, ${trendingMovieInfoJson.genres[1].name}, ${trendingMovieInfoJson.genres[2].name}`
    const trendingMovieSynopsis = document.getElementById("Synopsis");
    trendingMovieSynopsis.textContent = trendingMovieInfoJson.overview;

    //get movie credits
    const trendingMovieCreditsUrl = `https://api.themoviedb.org/3/movie/${trendingID}/credits?api_key=${api_key}`;
    const trendingMovieCreditsResponse = await fetch(trendingMovieCreditsUrl);
    const trendingMovieCreditsJson = await trendingMovieCreditsResponse.json();

    const trendingMovieDirector = document.getElementById("Director");
    trendingMovieCreditsJson.crew.forEach(element => {
        if(element.job === "Director"){
            trendingMovieDirector.textContent = element.name;
        }
    });

    const trendingMovieCast = document.getElementById("Cast");
    trendingMovieCast.textContent = `${trendingMovieCreditsJson.cast[0].name}, ${trendingMovieCreditsJson.cast[1].name}, ${trendingMovieCreditsJson.cast[2].name}, ${trendingMovieCreditsJson.cast[3].name}...`;

    //get trending movies

    const trending1 = document.getElementById("trending1");
    trending1.src = `https://image.tmdb.org/t/p/original/${trendingJson.results[0].poster_path}`;
    const trendingTitle1 = document.getElementById("trendingTitle1");
    trendingTitle1.textContent = trendingJson.results[0].title;

    const trending2 = document.getElementById("trending2");
    trending2.src = `https://image.tmdb.org/t/p/original/${trendingJson.results[1].poster_path}`;
    const trendingTitle2 = document.getElementById("trendingTitle2");
    trendingTitle2.textContent = trendingJson.results[1].title;

    const trending3 = document.getElementById("trending3");
    trending3.src = `https://image.tmdb.org/t/p/original/${trendingJson.results[2].poster_path}`;
    const trendingTitle3 = document.getElementById("trendingTitle3");
    trendingTitle3.textContent = trendingJson.results[2].title;

    const trending4 = document.getElementById("trending4");
    trending4.src = `https://image.tmdb.org/t/p/original/${trendingJson.results[3].poster_path}`;
    const trendingTitle4 = document.getElementById("trendingTitle4");
    trendingTitle4.textContent = trendingJson.results[3].title;

    const trending5 = document.getElementById("trending5");
    trending5.src = `https://image.tmdb.org/t/p/original/${trendingJson.results[4].poster_path}`;
    const trendingTitle5 = document.getElementById("trendingTitle5");
    trendingTitle5.textContent = trendingJson.results[4].title;
    

}

delve();