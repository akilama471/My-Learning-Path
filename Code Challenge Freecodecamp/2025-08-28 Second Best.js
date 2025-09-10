/*
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.

1. getLaptopCost([1500, 2000, 1800, 1400], 1900) should return 1800
2. getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800
3. getLaptopCost([2099, 1599, 1899, 1499], 2200) should return 1899
4. getLaptopCost([2099, 1599, 1899, 1499], 1000) should return 0
5. getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400

*/

function getLaptopCost(laptops, budget) {
    // Remove duplicates and sort in descending order
    const uniqueLaptops = [...new Set(laptops)].sort((a, b) => b - a);
    
    // If no laptops exist, return 0
    if (uniqueLaptops.length === 0) return 0;
    
    // Check if second most expensive is within budget
    if (uniqueLaptops.length >= 2 && uniqueLaptops[1] <= budget) {
        return uniqueLaptops[1];
    }
    
    // Otherwise, find the most expensive laptop within budget
    const affordableLaptops = uniqueLaptops.filter(price => price <= budget);
    
    // If no laptops are within budget, return 0
    if (affordableLaptops.length === 0) return 0;
    
    // Return the most expensive affordable laptop
    return affordableLaptops[0];
}