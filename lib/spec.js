var expect = chai.expect;

describe('knapsack problem', function(){
  context('.generateRandomSolution', function(){
    it('can generate a random solution', function(){
      var solution = generateRandomSolution();
      expect(solution).to.be.an('array');
    });
    it('is a random solution', function(){
      var solution1 = generateRandomSolution();
      var solution2 = generateRandomSolution();
      expect(solution1).not.to.deep.equal(solution2);
    });
    it('does not exceed max weight', function(){
      var solution = generateRandomSolution();
      var weight = weigh(solution);
      expect(weight <= knapsack.maxWeight).to.be.true;
    });
  });
  context('.generateNeighboringSolution', function(){
    var solution = [ // allowed multiple of each
        {name:'apple',    weight:3, value:20},
        {name:'blanket',  weight:4, value:40},
        {name:'lantern',  weight:5, value:10}
      ];
    it('returns a soution that is different from the input solution', function(){
      var neighbor = generateNeighboringSolution(solution);
      expect(neighbor).not.to.deep.equal(solution);
    });
    it('does not exceed max weight', function(){
      var neighbor = generateNeighboringSolution(solution);
      var weight = weigh(neighbor);
      expect(weight <= knapsack.maxWeight).to.be.true;
    });
  });
  context('.calculateCost', function(){
    it('calculates the cost of a solution', function(){
      var solution = [
        {name:'apple',    weight:3, value:20},
        {name:'blanket',  weight:4, value:40},
        {name:'lantern',  weight:5, value:10}
      ];
      expect(calculateCost(solution)).to.equal(70);
    });
  });
  context('.acceptance_probability', function(){
    it('increases as temperature decreases and jump badness increases', function(){
      var tmax = acceptance_probability(0, 1, 1.0);
      var t50pct = acceptance_probability(0, 1, 0.5);
      expect(t50pct).to.be.above(tmax*2);
    });
  });
  context('.simulateAnnealing', function(){
    it('returns a good solution', function(){
      var randomSolution = [ 
        {name:'apple',    weight:3, value:20},
        {name:'blanket',  weight:4, value:40},
        {name:'lantern',  weight:5, value:10}
      ];
      var goodSolution = simulateAnnealing();
      // console.log(goodSolution);
      expect(calculateCost(goodSolution)).to.be.above(calculateCost(randomSolution));
    });
    xit('does not get stuck at local maxima');
    xit('is optimized for this particular problem');
  });
});

// var spy = sinon.spy(Sender.prototype, 'receiveMessage', function(){
// alice.sendMessage(plaintext, bob);
// expect(spy.called).to.be.true;
// expect(spy.args[0][0]).to.equal('wagvap$iawweca', function(){
// Sender.prototype.receiveMessage.restore();
