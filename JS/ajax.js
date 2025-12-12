let allData = [];

fetch("data/destinations.json")
    .then(res => res.json())
    .then(data => {
        allData = data;
        displayData(data);
    });

function displayData(arr) {
    let gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    arr.forEach(item => {
        gallery.innerHTML += `
            <div class="card">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>${item.text}</p>
            </div>
        `;
    });
}


