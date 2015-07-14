# SimulatedAnnealing
An optimization algorithm modeled on temperature physics! ([Thanks to Katrina Geltman!](http://katrinaeg.com/simulated-annealing.html))

###Info
Simulated Annealing is a way to generate a 'pretty good' solution to NP problems, such as the knapsack problem or traveling salesman. Its primary advantage over other methods such as hill climbers and genetic algorithms is that a simulated annealing algorithm is relatively less likely to get stuck at local maxima. It does this by *sometimes* allowing moves to solutions that are actually worse than the current solutions. 

The likelihood of this algorithm accepting a bad solution is high at the beginning and decreases over time—this is where the comparison to annealing comes in. Think of excited atoms bouncing around as in a gas. They can spread out and explore a lot of the solution space. But as their internal energy decreases, these atoms congeal around a good (if not best) solution. This analogy gives the simulated annealing algorithm its name.

![Simulated Annealing gif from Wikipedia](https://upload.wikimedia.org/wikipedia/commons/d/d5/Hill_Climbing_with_Simulated_Annealing.gif) [from wiki](https://en.wikipedia.org/wiki/Simulated_annealing)

"Simulated annealing searching for a maximum. The objective here is to get to the highest point, however, it is not enough to use a simple hill climb algorithm, as there are many local maxima. By cooling the temperature slowly the global maximum is found."

###Steps
1. First, generate a random solution
2. Calculate its cost using some cost function you've defined
3. Generate a random neighboring solution
4. Calculate the new solution's cost
5. Compare them: If cnew < cold: move to the new solution; If cnew > cold: maybe* move to the new solution
6. Repeat steps 3-5 above until an acceptable solution is found or you reach some maximum number of iterations.

*![e ^ ((new_cost - old_cost) / temperature)](http://www.sciweavers.org/upload/Tex2Img_1436840461/eqn.png)

###Pseudocode
```python

def anneal(solution):
    old_cost = cost(solution)
    T = 1.0
    T_min = 0.00001
    alpha = 0.9
    while T > T_min:
        i = 1
        while i <= 100:
            new_solution = neighbor(solution)
            new_cost = cost(new_solution)
            ap = acceptance_probability(old_cost, new_cost, T)
            if ap > random():
                solution = new_solution
                old_cost = new_cost
            i += 1
        T = T*alpha
    return solution
```
