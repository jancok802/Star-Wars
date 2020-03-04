function fetchFilm1(){
    axios.get("https://swapi.co/api/films/1").then(response => {
        var obj = response.data;
        //console.log(response.status);
        var container = document.getElementById("container");
        var divFilm = document.createElement("div");
        divFilm.id = "film1";
        divFilm.className = "film";
        container.append(divFilm);

        var imgFilm = document.createElement("img");
        imgFilm.id = "imgFilm";
        imgFilm.src = "./slike/a new hope.jpg";
        divFilm.append(imgFilm);

        var divFilmData = document.createElement("div");
        divFilmData.className = "film-data";
        divFilm.append(divFilmData);
        var naslov = document.createElement("h3");
        naslov.innerHTML = obj.title;
        divFilmData.append(naslov);
        var opisFilma = document.createElement("a");
        opisFilma.innerHTML = "Show more!";
        divFilmData.append(opisFilma);
        opisFilma.setAttribute("onclick", "newhopeAnimacija()");
    });
}
function fetchFilm2(){
    axios.get("https://swapi.co/api/films/2").then(response => {
        var obj = response.data;
        //console.log(obj.title);
        var container = document.getElementById("container");
        var divFilm = document.createElement("div");
        divFilm.id = "film2";
        divFilm.className = "film";
        container.append(divFilm);

        var imgFilm = document.createElement("img");
        imgFilm.id = "imgFilm";
        imgFilm.src = "./slike/the empire strikes back.jpeg";
        divFilm.append(imgFilm);

        var divFilmData = document.createElement("div");
        divFilmData.className = "film-data";
        divFilm.append(divFilmData);
        var naslov = document.createElement("h3");
        naslov.innerHTML = obj.title;
        divFilmData.append(naslov);
        var opisFilma = document.createElement("a");
        opisFilma.innerHTML = "Show more!";
        divFilmData.append(opisFilma);
        opisFilma.setAttribute("onclick", "empireAnimacija()");
    });
}
function fetchFilm3(){
    axios.get("https://swapi.co/api/films/3").then(response => {
        var obj = response.data;
        //console.log(obj);
        var container = document.getElementById("container");
        var divFilm = document.createElement("div");
        divFilm.id = "film3";
        divFilm.className = "film";
        container.append(divFilm);

        var imgFilm = document.createElement("img");
        imgFilm.id = "imgFilm";
        imgFilm.src = "./slike/return of the jedi.jpg";
        divFilm.append(imgFilm);

        var divFilmData = document.createElement("div");
        divFilmData.className = "film-data";
        divFilm.append(divFilmData);
        var naslov = document.createElement("h3");
        naslov.innerHTML = obj.title;
        divFilmData.append(naslov);
        var opisFilma = document.createElement("a");
        opisFilma.innerHTML = "Show more!";
        divFilmData.append(opisFilma);
        opisFilma.setAttribute("onclick", "returnofjediAnimacija()");

    });
}

document.body.onload = function(){
    fetchFilm1();
    fetchFilm2();
    fetchFilm3();
}

function newhopeAnimacija(){
    var fadeToRemove = document.getElementsByClassName("fade");
    var sectionToRemove = document.getElementsByClassName("star-wars");
    var parent = document.getElementById("animacija");
    if(fadeToRemove.length == 1){
        parent.removeChild(fadeToRemove[0]);
        parent.removeChild(sectionToRemove[0]);
    }
    document.getElementById("pop-up").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("animacija").style.display = "inline";
    var logo = document.getElementById("logo");
    logo.style.display = "none";
    document.getElementById("btn").style.display = "inline";
    axios.get("https://swapi.co/api/films/1").then(response => {
        var obj = response.data;

        var divAnimacija = document.getElementById("animacija");
        var divFade = document.createElement("div");
        divFade.className = "fade";
        divAnimacija.appendChild(divFade);
        

        var section = document.createElement("section");
        section.className = "star-wars";
        divAnimacija.append(section);
        

        var divCrawl = document.createElement("div");
        divCrawl.className = "crawl";
        section.appendChild(divCrawl);

        var divTitle = document.createElement("div");
        divTitle.classname = "title";
        divCrawl.appendChild(divTitle);

        var epizoda = document.createElement("p");
        divTitle.appendChild(epizoda);
        epizoda.innerHTML = "Episode " + obj.episode_id;//TOTO MOZE AJ BEZ PODATKOV

        var naslov = document.createElement("h1");
        divTitle.appendChild(naslov);
        naslov.innerHTML = obj.title;

        var tekst = document.createElement("p");
        divCrawl.appendChild(tekst);
        tekst.innerHTML = obj.opening_crawl;        
    });
}

function empireAnimacija(){
    var fadeToRemove = document.getElementsByClassName("fade");
    var sectionToRemove = document.getElementsByClassName("star-wars");
    var parent = document.getElementById("animacija");
    if(fadeToRemove.length == 1){
        parent.removeChild(fadeToRemove[0]);
         parent.removeChild(sectionToRemove[0]);
    }
    document.getElementById("pop-up").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("animacija").style.display = "inline";
    var logo = document.getElementById("logo");
    logo.style.display = "none";
    document.getElementById("btn").style.display = "inline";
    axios.get("https://swapi.co/api/films/2").then(response => {
        var obj = response.data;

        var divAnimacija = document.getElementById("animacija");
        var divFade = document.createElement("div");
        divFade.className = "fade";
        divAnimacija.appendChild(divFade);
        

        var section = document.createElement("section");
        section.className = "star-wars";
        divAnimacija.append(section);
        

        var divCrawl = document.createElement("div");
        divCrawl.className = "crawl";
        section.appendChild(divCrawl);

        var divTitle = document.createElement("div");
        divTitle.classname = "title";
        divCrawl.appendChild(divTitle);

        var epizoda = document.createElement("p");
        divTitle.appendChild(epizoda);
        epizoda.innerHTML = "Episode " + obj.episode_id;//TOTO MOZE AJ BEZ PODATKOV

        var naslov = document.createElement("h1");
        divTitle.appendChild(naslov);
        naslov.innerHTML = obj.title;

        var tekst = document.createElement("p");
        divCrawl.appendChild(tekst);
        tekst.innerHTML = obj.opening_crawl;
    });
}

function returnofjediAnimacija(){
    var fadeToRemove = document.getElementsByClassName("fade");
    var sectionToRemove = document.getElementsByClassName("star-wars");
    var parent = document.getElementById("animacija");
    if(fadeToRemove.length == 1){
        parent.removeChild(fadeToRemove[0]);
        parent.removeChild(sectionToRemove[0]);
    }
    document.getElementById("pop-up").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("animacija").style.display = "inline";
    var logo = document.getElementById("logo");
    logo.style.display = "none";
    document.getElementById("btn").style.display = "inline";
    axios.get("https://swapi.co/api/films/3").then(response => {
        var obj = response.data;

        var divAnimacija = document.getElementById("animacija");
        var divFade = document.createElement("div");
        divFade.className = "fade";
        divAnimacija.appendChild(divFade);
        

        var section = document.createElement("section");
        section.className = "star-wars";
        divAnimacija.append(section);
        

        var divCrawl = document.createElement("div");
        divCrawl.className = "crawl";
        section.appendChild(divCrawl);

        var divTitle = document.createElement("div");
        divTitle.classname = "title";
        divCrawl.appendChild(divTitle);

        var epizoda = document.createElement("p");
        divTitle.appendChild(epizoda);
        epizoda.innerHTML = "Episode " + obj.episode_id;//TOTO MOZE AJ BEZ PODATKOV

        var naslov = document.createElement("h1");
        divTitle.appendChild(naslov);
        naslov.innerHTML = obj.title;

        var tekst = document.createElement("p");
        divCrawl.appendChild(tekst);
        tekst.innerHTML = obj.opening_crawl;
    });
}

function getBack(){
    var dugme = document.getElementById("btn");
    dugme.style.display = "none";
    var animacija = document.getElementById("animacija");
    animacija.style.display = "none";
    var container = document.getElementById("container");
    container.style.display = "flex";
    document.getElementById("logo").style.display = "inline";
    document.getElementById("pop-up").style.display = "inline";
}
