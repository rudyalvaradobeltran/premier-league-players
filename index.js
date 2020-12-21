const express = require("express");
const { LeagueTable } = require("./leagueTable");
const app = express();

var leagueTable = new LeagueTable(["DeBruyne", "Salah", "Vardy", "Son", "Rashford"]);
leagueTable.recordResult("Vardy", 3);
leagueTable.recordResult("DeBruyne", 1);
leagueTable.recordResult("DeBruyne", 2);
leagueTable.recordResult("Salah", 3);
leagueTable.recordResult("Son", 2);
leagueTable.recordResult("Rashford", 1);
console.log(leagueTable.playerRank(1));

app.get('/', (req, res) => {
    res.json({ test: "Test message" });
});

app.listen(3010, () => console.log('Server on port 3010'));