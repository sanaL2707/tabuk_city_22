function filterDest(type) {
    if (type === "all") {
        displayData(allData);
    } else {
        let filtered = allData.filter(i => i.type === type);
        displayData(filtered);
    }
}



