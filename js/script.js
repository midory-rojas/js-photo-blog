const poleraidFoto = document.getElementById("poleraid-foto");
//console.log(poleraidFoto)


axios.get("https://lanciweb.github.io/demo/api/pictures/").then(function (resp) {
    const fotoArray = resp.data;
    //console.log(fotoArray);


    fotoArray.forEach(function (curFoto) {
        const colElem = document.createElement("div");
        colElem.classList.add("col");
        colElem.innerHTML = `
        <div class="card">
            <img class="spillo" src ="img/pin.svg" alt="" />
            <img class = "foto" src ="./img/primavera img.jpg" alt="primavera" />
            <p class="leyenda">Accusamus Beatae Ad Facilis Cum Similique Qui Sunt</p>
        </div>
    `
    poleraidFoto.append(colElem);
    });
});