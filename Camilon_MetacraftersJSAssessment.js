/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let totalNFTs = 0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, rarity) {
    const nft = {
        name: name,
        description: description,
        rarity: rarity
    };
    totalNFTs++; 
    return nft;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(nftArray) {
    nftArray.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Rarity: " + nft.rarity);
        console.log("------");
    });
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return totalNFTs;
}

// call your functions below this line
const nft1 = mintNFT("NFT1", "This is the first NFT", "Common");
const nft2 = mintNFT("NFT2", "This is the second NFT", "Rare");
const nft3 = mintNFT("NFT3", "This is the third NFT", "Epic");

const nftArray = [nft1, nft2, nft3];

listNFTs(nftArray);
const totalSupply = getTotalSupply();
console.log("Total NFTs Minted: " + totalSupply);
