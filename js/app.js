const container = document.querySelector(".container");
const webs = [
  {
    name: "Imagen 1",
    image: "images/coffee1.jpg"
  },
  {
    name: "Imagen 2",
    image: "images/coffee2.jpg"
  },
  {
    name: "Imagen 3",
    image: "images/coffee3.jpg"
  },
  {
    name: "Imagen 4",
    image: "images/coffee4.jpg"
  },
  {
    name: "Iamgen 5",
    image: "images/coffee5.jpg"
  },
  {
    name: "Imagen 6",
    image: "images/coffee6.jpg"
  },
  {
    name: "Imagen 7",
    image: "images/coffee7.jpg"
  },
  {
    name: "Imagen 8",
    image: "images/coffee8.jpg"
  },
  {
    name: "Imagen 9",
    image: "images/coffee9.jpg"
  }
];
const showWeb = () => {
  let output = "";
  webs.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Boton</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showWeb);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registrado"))
      .catch(err => console.log("service worker no registrado", err));
  });
}
