import path from "path";
import fs from "fs";

export const allTilesData = async () => {
    // const res = await fetch('/allTilesData/allTiles.json');
    // const tilesData = await res.json();
    // return tilesData;

    const filePath = path.join(process.cwd(), "public", "allTiles.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents); return data;
}

// export const tileDetailsData = async () => {
//     const res = await fetch(`http://localhost:3000/allTilesData/allTiles.json/${}`);
//     const tilesData = await res.json();
//     return tilesData;
// }
