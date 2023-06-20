// Complete the below function. Print the names of the candidates elibile to vote
// - Use Array methods
// - Do not use loops

// Example of inputArray
/*
	[
		{
			name:"Ravi",
			age:28
		},
		{
			name:"Teja",
			age:28
		}
	]
*/
function findVoteEligibleCandidates(populationList) {

	let voteEligible = populationList.filter((candidate)=> candidate.age >=18).map((candidate)=> candidate.name);
	// here the filter function creates an array with the condition mentioned in it as age>=18
	// and map will filter the array with only the names
	voteEligible.forEach(name => console.log(name));
	// forEach method is used to iterate over the array without a loop
}


const populationList = [
	{
		name:"Ravi",
		age:28
	},
	{
		name:"Teja",
		age:28
	},
	{
		name:"Dileep",
		age:21
	},
	{
		name:"Chandra",
		age:17
	}

]

findVoteEligibleCandidates(populationList)