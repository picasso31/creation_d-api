console.log("script");
const keySecret = "$2a$10$phmXr/DpLREFdOZFAeAzZeem1T9LYP5th3ekMgUtBsG2Tp8kjVRX6";
const apiUrl="https://api.jsonbin.io/v3";
const binToRead = "654dee7b54105e766fcdf812";


// Méthode avec fetch

let contenBin;

await contenBin();
async function getcontenBin () {
    const res = await fetch('${apiUrl}/b/${binToRead}');
    contenBin = await res.json();
}