// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.get("/api", (req, res) => {
  res.json({ message: "running..." });
});

app.get("/", (req, res) => {
  res.json({ message: "NFT Thingo running :P" });
});


app.get("/0", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/Qmbhr6i2KBPReiG7HqFMXsiRvFMoESPfcxt7padn3mb7bR", id: "0", name: "Cabinet #1"});
});
app.get("/1", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmNPmHAnuW7xGqLtBW9679c1B1yuGMyc4yXTjG1unry2dV", id: "1", name: "Cabinet #2" });
});
app.get("/2", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmZRBxgm3TSB8vGWwVkhLLvEGavwUKsd1mrGWuYyyc9m6u", id: "2", name: "Cabinet #3" });
});
app.get("/3", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmZ8U7rnN73LgSE13Wxh7CNcsYH69yiagbN32eo3pH5VmQ", id: "3", name: "Cabinet #4" });
});
app.get("/4", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmdvXHJrdSTA9wN1PkLwAJPkQr6GMKcsLMTDZDSc9Z48m8", id: "4", name: "Cabinet #5" });
});
app.get("/5", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmZRwm6HCAMrUyN4audMmL8FuqqiBpWGy82sRb9vzdr6kt", id: "5", name: "Cabinet #6" });
});
app.get("/6", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmaXPSZ2NbVaWNC2uML3eMsvrHaYoLS7zSkS2ufLhpS9C8", id: "6", name: "Cabinet #7" });
});
app.get("/7", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmUY9umUUBqVbPJxrUt7ZYmaCkpBfGGbCpaksowvHrZxcU", id: "7", name: "Cabinet #8" });
});
app.get("/8", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmPHmhTqxZozTdZUKQ8cD4UErRVyH49LjJnUoHogCv9UWK", id: "8", name: "Cabinet #9" });
});
app.get("/9", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmUn4rQNgmB5tiktG4KhWDqTxXvoS8XSEKkJPKhRf9mAUH", id: "9", name: "Cabinet #10" });
});
app.get("/10", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmQf3QYj3ah3TBRoxnoW9NRZHhhcGnGeX1oDzbxxyz33tg", id: "10", name: "Cabinet #11" });
});
app.get("/11", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmZFQgcRDofEdqxzVtfbmCouXWtkfZp9PCG22ctGJ5F8kN", id: "11", name: "Cabinet #12" });
});
app.get("/12", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmPxunJTEYGzNo5bd6KddSNAX1QBPgzFnkKyhsmzxmBNuq", id: "12", name: "Cabinet #13" });
});
app.get("/13", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmcvWWLgTetMezb3HJUo8X9GJ6SzC8MnVjTqDgrZStg4pV", id: "13", name: "Cabinet #14" });
});
app.get("/14", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmU7dv3RBvkckNX3VxdjFXiPmNPzLjXXUrUABeS5k1k4cm", id: "14", name: "Cabinet #15" });
});
app.get("/15", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmWHyGLGvFdjueH6FBUhtPCoSMdxaTEw84VE1YVeqb7cZs", id: "15", name: "Cabinet #16" });
});
app.get("/16", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmS8rrQfySHTvseuphxYMTtHdTyKXjwk37dcDj3mZhbF7D", id: "16", name: "Cabinet #17" });
});
app.get("/17", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmfJxqFMAAvJVx7emRrBqBvTTFMREynHh3NpV3SYRoomgw", id: "17", name: "Cabinet #18" });
});
app.get("/18", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmZpHcA7UBCAiY3v4G1rGsb1kGYFRT7p4ULozZiVZLaHNz", id: "18", name: "Cabinet #19" });
});
app.get("/19", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmZKf6iaQzmCmemKBSA2F9KV8pPJiEHjtEAyWagUCm54e7", id: "19", name: "Cabinet #20" });
});
app.get("/20", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmVWCFX2YTB2DgW5onSDF5hSy1CKDEs7F843tn34u4xbLo", id: "20", name: "Cabinet #21" });
});
app.get("/21", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmbFKLmQevpyqeoZ5ezrPEecEcaM8xvy6ZNwWcgB9RYvs7", id: "21", name: "Cabinet #22" });
});
app.get("/22", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmbGs6MYyfCYcuvPGzSSsjW8g4BT9jxpAg3ZA6wknFLpaa", id: "22", name: "Cabinet #23" });
});
app.get("/23", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmYYkkmSVWbhjWz3yxVYkYBQfNE4N14nM7gnQxaaGzqWom", id: "23", name: "Cabinet #24" });
});
app.get("/24", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmR44s6yZ9GWunPXTXDgpLuqJUkbZ752bJgZErxvGRNEQa", id: "24", name: "Cabinet #25" });
});
app.get("/25", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmTxg25HGYzKEcY2Hd4BSN86bSro5rhjkiyN58QFEtRHUu", id: "25", name: "Cabinet #26" });
});
app.get("/26", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/Qmd3R6n92Diw9wmpd82BANa7YMa9TLiW4KDVCWZoe6yVYY", id: "26", name: "Cabinet #27" });
});
app.get("/27", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmRYMsyb7uMY6PonQGrkBMeGwZ7GuuFp53PasWJuKpD9aL", id: "27", name: "Cabinet #28" });
});
app.get("/28", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmQTptEVxNSqpmYFwKnR9gHLwG6qqzpj5kN2szBB51rsn6", id: "28", name: "Cabinet #29" });
});
app.get("/29", (req, res) => {
  res.json({ image: "https://ipfs.sy.finance/ipfs/QmUhugabfXjjrmM3qfREB61dUKW2ngZtbDiujDMXdG2yVt", id: "29", name: "Cabinet #30" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
