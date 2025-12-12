/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */

func longestZigZag(root *TreeNode) int {
    maxLen := 0
    dfs(root, &maxLen)
    return maxLen
}

// dfs returns two ints:
//   goLeft  = longest ZigZag starting at node if the first step is to the LEFT
//   goRight = longest ZigZag starting at node if the first step is to the RIGHT
func dfs(node *TreeNode, maxLen *int) (goLeft, goRight int) {
    if node == nil {
        return 0, 0
    }

    // We only need the right-value from left child and the left-value from right child.
    // Use blank identifier for the unused return values to avoid "declared and not used".
    _, leftRight := dfs(node.Left, maxLen)
    rightLeft, _ := dfs(node.Right, maxLen)

    if node.Left != nil {
        goLeft = 1 + leftRight
    } else {
        goLeft = 0
    }

    if node.Right != nil {
        goRight = 1 + rightLeft
    } else {
        goRight = 0
    }

    if goLeft > *maxLen {
        *maxLen = goLeft
    }
    if goRight > *maxLen {
        *maxLen = goRight
    }

    return goLeft, goRight
}
