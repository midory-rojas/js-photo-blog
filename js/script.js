// Chiamata l'API con Axios
axios
.get("https://lanciweb.github.io/demo/api/pictures/")
.then(function (resp) {
    const fotoArray = resp.data;
    //console.log(fotoArray);
    printFoto(fotoArray);

});

// Funzione per stampare le foto

function printFoto(array) {
    const poleraidFoto = document.getElementById("poleraid-foto");
    //console.log(poleraidFoto)
    array.forEach(function (curFoto) {
        //console.log(curFoto);
        const fotoElem = createOgniFoto(curFoto);
        poleraidFoto.append(fotoElem);
        });
}

// Funzione per creare ogni singola foto

function createOgniFoto (foto) {
    const colElem = document.createElement("div");
        colElem.classList.add("col");
        colElem.addEventListener("click", function() {
            // alert(foto.url);
            const modalOverlay = document.querySelector(".modal-overlay");
            // console.log(modalOverlay);
            const modalBoxImg = document.querySelector(".modal-box img");
            const image = colElem.querySelector('.card').dataset.img;
        
            modalBoxImg.src = image;
            modalOverlay.classList.remove("d-none");

            });
        colElem.innerHTML = `
        <div class="card" data-img="${foto.url}">
            <img class="spillo" src ="img/pin.svg" alt="" />
            <img class = "foto" src ="${foto.url}" alt="primavera" />
            <p>${foto.date}</p>
            <h3>${foto.title}</h3>
        </div>
    `;
    return colElem;
}

const closeBtn = document.querySelector(".modal-box button");
const modalOverlay = document.querySelector(".modal-overlay");

closeBtn.addEventListener ("click", function () {
    modalOverlay.classList.add("d-none");
});
