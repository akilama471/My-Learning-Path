###
On a social network consisting of m users and some friendships between users, two users can communicate with each other if they know a common language.

You are given an integer n, an array languages, and an array friendships where:

There are n languages numbered 1 through n,
languages[i] is the set of languages the i​​​​​​th​​​​ user knows, and
friendships[i] = [u​​​​​​i​​​, v​​​​​​i] denotes a friendship between the users u​​​​​​​​​​​i​​​​​ and vi.
You can choose one language and teach it to some users so that all friends can communicate with each other. Return the minimum number of users you need to teach.

Note that friendships are not transitive, meaning if x is a friend of y and y is a friend of z, this doesn't guarantee that x is a friend of z.
 

Example 1:

Input: n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]
Output: 1
Explanation: You can either teach user 1 the second language or user 2 the first language.
Example 2:

Input: n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]
Output: 2
Explanation: Teach the third language to users 1 and 3, yielding two users to teach.
 

Constraints:

2 <= n <= 500
languages.length == m
1 <= m <= 500
1 <= languages[i].length <= n
1 <= languages[i][j] <= n
1 <= u​​​​​​i < v​​​​​​i <= languages.length
1 <= friendships.length <= 500
All tuples (u​​​​​i, v​​​​​​i) are unique
languages[i] contains only unique values
###

class Solution:
    def minimumTeachings(self, n: int, languages: List[List[int]], friendships: List[List[int]]) -> int:
        m = len(languages)
        
        # Convert languages to sets for easier operations
        lang_sets = [set(langs) for langs in languages]
        
        # Find all users who cannot communicate (have no common language)
        no_comm_users = set()
        
        for u, v in friendships:
            # Convert to 0-indexed
            u_idx, v_idx = u - 1, v - 1
            
            # Check if they have any common language
            if lang_sets[u_idx].isdisjoint(lang_sets[v_idx]):
                no_comm_users.add(u_idx)
                no_comm_users.add(v_idx)
        
        # If everyone can already communicate, no teaching needed
        if not no_comm_users:
            return 0
        
        min_teach = float('inf')
        
        # Try each language from 1 to n
        for lang in range(1, n + 1):
            # Count users who don't know this language among those who need to communicate
            users_to_teach = 0
            
            for user in no_comm_users:
                if lang not in lang_sets[user]:
                    users_to_teach += 1
            
            min_teach = min(min_teach, users_to_teach)
        
        return min_teach