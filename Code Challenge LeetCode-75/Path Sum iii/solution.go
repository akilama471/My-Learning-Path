func pathSum(root *TreeNode, targetSum int) int {
    prefix := map[int]int{0: 1} // Base: one way to have sum=0 before starting
    return dfs(root, 0, targetSum, prefix)
}

func dfs(node *TreeNode, currentSum, target int, prefix map[int]int) int {
    if node == nil {
        return 0
    }

    // Update running sum
    currentSum += node.Val

    // Count valid paths ending at this node
    count := prefix[currentSum-target]

    // Add currentSum to prefix map
    prefix[currentSum]++

    // Continue to children
    count += dfs(node.Left, currentSum, target, prefix)
    count += dfs(node.Right, currentSum, target, prefix)

    // Backtrack (remove current prefix sum)
    prefix[currentSum]--

    return count
}
