const poleraidFoto = document.getElementById("poleraid-foto");
//console.log(poleraidFoto)


axios.get("https://lanciweb.github.io/demo/api/pictures/").then(function (resp) {
    const fotoArray = resp.data;
    console.log(fotoArray);


    fotoArray.forEach(function (curFoto) {
        //console.log(curFoto);
        const colElem = document.createElement("div");
        colElem.classList.add("col");
        colElem.innerHTML = `
        <div class="card">
            <img class="spillo" src ="img/pin.svg" alt="" />
            <img class = "foto" src ="${curFoto.url}" alt="primavera" />
            <p>${curFoto.date}</p>
            <h3>${curFoto.title}</h3>
        </div>
    `
    poleraidFoto.append(colElem);
    });
});