function filterDest(type) {
    if (type === "all") {
        displayData(allData);
    } else {
        const filtered = allData.filter(d => d.type === type);
        displayData(filtered);
    }
}




