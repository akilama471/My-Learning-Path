
class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function uniqueOccurrences($arr) {
        $count = array_count_values($arr);
        return count($count) === count(array_unique($count));
    }
}