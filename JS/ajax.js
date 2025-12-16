let allData = [];
/*يجيب بيانات من جسون*/
fetch("data/destinations.json")
  .then(res => res.json())
  .then(data => {
      /*يحفظها في الداتا عشان نستخدمها بعدين*/
      allData = data;
      displayData(data);
  });
/*يعرض بيانات جسون*/
function displayData(list) {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;

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
