function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Candidate(Name, Age, Party) {
    this.Name = Name
    this.Age = Age;
    this.Party = Party;
}
var Candidate1 = new Candidate("John", 58, "Republican");
var Candidate2 = new Candidate("Sam", 61, "Democrat")
var Candidate3 = new Candidate("Jake", 53, "Democrat")

function Statement(i) {
    var state = i.Name + " is " + i.Age + " years old and is a " + i.Party;
    return state;
}

function myFunction() {
    document.getElementById('New_and_This').innerHTML = Statement(Candidate1) + "<br>" + Statement(Candidate2) + "<br>" + Statement(Candidate3);
}

function VoteCount() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 45389;
        function Plus_one() {Starting_point += 1}
        Plus_one();
        return Starting_point;
    }
}