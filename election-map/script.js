var newCandidate = function(name, partyColor) {

    var candidate = {};
    candidate.name = name;
    candidate.electionResults = null;
    candidate.totalVotes = 0;
    candidate.partyColor = partyColor;
    candidate.totalAllTheVotes = function() {
        this.totalVotes = 0;
        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
    };
    return candidate;
};

var elaine = newCandidate("Electable Elaine", [132, 17, 11]);
var alisha = newCandidate("Awesome Alisha", [245, 141, 136]);

elaine.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
alisha.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

elaine.electionResults[9] = 1;
alisha.electionResults[9] = 28;

elaine.electionResults[4] = 17;
alisha.electionResults[4] = 38;

elaine.electionResults[43] = 11;
alisha.electionResults[43] = 27;

elaine.totalAllTheVotes();
alisha.totalAllTheVotes();

var winner = "???";

if (elaine.totalVotes > alisha.totalVotes) {
    winner = elaine.name;
} else if (alisha.totalVotes > elaine.totalVotes) {
    winner = alisha.name;
} else {
    winner = "DRAW";
}

var setStateResults = function(state) {

    theStates[state].winner = null;
    if (elaine.electionResults[state] > alisha.electionResults[state]) {
        theStates[state].winner = elaine;
    } else if (elaine.electionResults[state] < alisha.electionResults[state]) {
        theStates[state].winner = alisha;
    }
    var stateWinner = theStates[state].winner;
    if (stateWinner != null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }

    var stateTable = document.getElementById("stateResults");
    var header = stateTable.children[0].children[0];
    var body = stateTable.children[1];
    var stateName = header.children[0];
    var stateAbbr = header.children[1];
    var name1 = body.children[0].children[0];
    var name2 = body.children[1].children[0];
    var results1 = body.children[0].children[1];
    var results2 = body.children[1].children[1];
    var winnerName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    stateAbbr.innerText = theStates[state].nameAbbrev;

    name1.innerText = elaine.name;
    name2.innerText = alisha.name;

    results1.innerText = elaine.electionResults[state];
    results2.innerText = alisha.electionResults[state];

    if (theStates[state].winner === null) {
        winnerName.innerText = "Draw";
    } else {
        winnerName.innerText = theStates[state].winner.name;
    }

};

var countryTable = document.getElementById("countryResults");
var row = countryTable.children[0].children[0];

row.children[0].innerText = elaine.name;
row.children[1].innerText = elaine.totalVotes;
row.children[2].innerText = alisha.name;
row.children[3].innerText = alisha.totalVotes;
row.children[5].innerText = winner;
