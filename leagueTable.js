class LeagueTable {
    constructor(players){
        this.standings = [];
        players.forEach((element, index) => {
            this.standings[element] = {
                "index": index,
                "gamesPlayed": 0,
                "goals": 0
            }
        });
        this.players = players;
    }

    recordResult(player, goals){
        this.standings[player].gamesPlayed++;
        this.standings[player].goals += goals;
    }

    playerRank(rank) {
        var newStandings = this.standings;
        var orderStandings = [];
        Object.keys(newStandings).forEach(k => {
            var maxGoals = 0;
            var maxScorer = "";
            Object.keys(newStandings).forEach(key => {
                if(newStandings[key].goals > maxGoals){
                    maxGoals = newStandings[key].goals;
                    maxScorer = key;
                }else if(newStandings[key].goals == maxGoals){
                    var maxScorerGames = (newStandings[maxScorer]) ? newStandings[maxScorer].gamesPlayed : newStandings[key].gamesPlayed+1;
                    if(newStandings[key].gamesPlayed < maxScorerGames){
                        maxScorer = key;
                    }else if(newStandings[key].gamesPlayed == maxScorerGames){
                        var maxScorerIndex = (newStandings[maxScorer]) ? newStandings[maxScorer].index : newStandings[key].index+1;
                        if(newStandings[key].index < maxScorerIndex){
                            maxScorer = key;
                        }
                    }
                }
            });
            orderStandings.push(maxScorer);
            delete newStandings[maxScorer];
        });
        return orderStandings[rank-1];
    }
}

exports.LeagueTable = LeagueTable;