func uniqueOccurrences(arr []int) bool {
    count := make(map[int]int)
    for _, num := range arr {
        count[num]++
    }
    seen := make(map[int]bool)
    for _, freq := range count {
        if seen[freq] {
            return false
        }
        seen[freq] = true
    }
    return true
}
