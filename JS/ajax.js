let allData = [];

fetch("data/destinations.json")
  .then(res => res.json())
  .then(data => {
      allData = data;
      displayData(data);
  });

function displayData(list) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    list.forEach(item => {
        gallery.innerHTML += `
        <a href="${item.link}" class="card">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.text}</p>
        </a>
        `;
    });
}



