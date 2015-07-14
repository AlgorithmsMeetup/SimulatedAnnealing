var knapsack = {items: [], maxWeight: 17}; // NP-hard
var items = [ // allowed multiple of each
  {name:'apple',    weight:3, value:20},
  {name:'blanket',  weight:4, value:40},
  {name:'lantern',  weight:5, value:10},
  {name:'radio',    weight:6, value:30}
];

function generateRandomSolution(){

  return solution; // array of items, must be <= maxWeight
};

function generateNeighboringSolution(oldSolution){
  // add, swap, or remove item randomly

  return solution; // array of items, must be <= maxWeight
}

function calculateCost(solution){

  return cost; // sum of values of items
}

function acceptance_probability(old_cost, new_cost, temperature){
  return Math.pow(Math.E, (new_cost - old_cost)/temperature); // probability to jump
}

function simulateAnnealing(){
  // check out readme's pseudocode for how to to implement this

  return solution; // array of items, must be <= maxWeight
};

///////////////////////////////////
// HELPER FUNCTIONS              //
// don't modify, but you can use //
///////////////////////////////////

function randomIndex(list){
  return Math.floor(Math.random()*list.length);
}

function weigh(solution){
  return solution.reduce(function(total, item){ return total + item.weight}, 0);
}
