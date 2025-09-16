/*
We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
*/

func asteroidCollision(asteroids []int) []int {
    stack := []int{}

    for _, ast := range asteroids {
        destroyed := false

        // While there is a possible collision (right-moving asteroid on stack, left-moving current asteroid)
        for len(stack) > 0 && stack[len(stack)-1] > 0 && ast < 0 {
            top := stack[len(stack)-1]

            if top < -ast {
                // Top asteroid is smaller -> pop it and check next one
                stack = stack[:len(stack)-1]
                continue
            } else if top == -ast {
                // Both are equal -> pop top, destroy current
                stack = stack[:len(stack)-1]
            }
            // In both equal or larger cases, current asteroid is destroyed
            destroyed = true
            break
        }

        if !destroyed {
            stack = append(stack, ast)
        }
    }

    return stack
}
