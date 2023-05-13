let left_btn=document.getElementsByClassName('bi-chevron-left')[0];
let right_btn=document.getElementsByClassName('bi-chevron-right')[0];
let cards=document.getElementsByClassName('cards')[0];
let search=document.getElementsByClassName('search')[0];
let search_input= document.getElementById('search_input');

left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -= 140; /*-ve sign means scroll left and 140 is in px*/


})
right_btn.addEventListener('click', ()=>{
    cards.scrollLeft += 140; /*+ve sign means scrollaage ke taraf jayega and 140 is in px*/


})
let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
     .then((data) => {
        data.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, genre, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML =   `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                        <img src="${bposter}" alt=""> </img>
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                            </div>
                        </div>

                    </div>
                    `
                    cards.appendChild(card);/*it will help o take yhis all in document of cards in html for representing*/
                    


            
        });
        document.getElementById('title').innerText = data[0].name;/*it will help to get the name of first index card that will appear then it will automatically genrate its name */
        document.getElementById('gen').innerText = data[0].genre;
        document.getElementById('date').innerText = data[0].date;
        document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i>${data[0].imdb}`;
        console.log(data[0].name);
        //search data load
        data.forEach((element, i) => {
            let { name, imdb, date, sposter, genre, url } = element;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML =   `
            <img src="${sposter}" alt="" >
                         <div class="cont">
                                <h3>${name} </h3>
                                <p>${genre}, ${date}, <span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</p>
                         </div>
            `
           
                       search.appendChild(card);
        });
        
         //search filter
         search_input.addEventListener('keyup',()=>{//mwans koi bhi key daale iske andr to uske sath kya hone chahiye yeh batyega keyup
            let filter = search_input.value.toUpperCase();
            let a = search.getElementsByTagName('a')//by tage ame means 'a' which have a class="card";
            for(let index = 0; index<a.length; index++){//a becomes an array bcz there are many cards in it example eesho, top gun, jurassic world, eternals, etc
                let b = a[index].getElementsByClassName('cont')[0];//html code 38
                let TextValue = b.textContent || b.innerText;
                if(TextValue.toUpperCase().indexOf(filter)>-1){//doubt
                    a[index].style.display = "flex";//means dekha dega jo match kega;
                    search.style.visibility = "visible";
                    search.style.opacity = 1;
                }
                else{
                    a[index].style.display = "none";
                }
                if(search_input.value == 0){//means agr ek bhi ket press nah ho to yeh apne aap off ho jane ka key hai
                    search.style.visibilty = "hidden";
                    search.style.opacity = 0;
                }

                
            }
         })
         let video = document.getElementsByTagName('video')[0];
         let play = document.getElementById('play');
         play.addEventListener('click', ()=>{
            if(video.paused){
                video.play();
                play.innerHTML = `play<i class="bi bi-pause-fill"></i>`;
             }
             else{
                video.pause();
                play.innerHTML = `Watch<i class="bi bi-play-fill"></i>`;
                
             }
            


         })
         // if we click in series then from cards the series should appear and when we click in movies the movies then movie will appear
         let series = document.getElementById('series');
         let movies = document.getElementById('movie');
         series.addEventListener('click', () =>{//doubt about click
            cards.innerHTML = '';

            let series_arr = data.filter(ele => {
                return ele.type === "series";
            });
            series_arr.forEach((ele, i) => {
                let { name, imdb, date, sposter, bposter, genre, url} = ele;
                let card = document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML =   `
                <img src="${sposter}" alt="${name}" class="poster">
                <div class="rest_card">
                            <img src="${bposter}" alt=""> </img>
                            <div class="cont">
                                <h4>${name}</h4>
                                <div class="sub">
                                    <p>${genre}, ${date}</p>
                                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                                </div>
                            </div>
    
                        </div>
                        `
                        cards.appendChild(card);
            });

         })
         movies.addEventListener('click', () =>{//doubt about click
            cards.innerHTML = '';

            let movies_arr = data.filter(ele => {
                return ele.type === "movie";
            });
            movies_arr.forEach((ele, i) => {
                let { name, imdb, date, sposter, bposter, genre, url} = ele;
                let card = document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML =   `
                <img src="${sposter}" alt="${name}" class="poster">
                <div class="rest_card">
                            <img src="${bposter}" alt=""> </img>
                            <div class="cont">
                                <h4>${name}</h4>
                                <div class="sub">
                                    <p>${genre}, ${date}</p>
                                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                                </div>
                            </div>
    
                        </div>
                        `
                        cards.appendChild(card);
            });

         })
        
        


    });
   


    
     


