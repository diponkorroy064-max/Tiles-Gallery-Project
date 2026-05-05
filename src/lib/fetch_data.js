export const allTilesData = async () => {
    const res = await fetch('/allTilesData/allTiles.json');
    const tilesData = await res.json();
    return tilesData;
}

// export const tileDetailsData = async () => {
//     const res = await fetch(`http://localhost:3000/allTilesData/allTiles.json/${}`);
//     const tilesData = await res.json();
//     return tilesData;
// }
