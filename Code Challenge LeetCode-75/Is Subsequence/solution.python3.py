class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        # If s is empty, it's always a subsequence
        if not s:
            return True
        
        # Initialize pointer for s
        i = 0
        
        # Iterate through t with pointer j
        for j in range(len(t)):
            # If characters match, move s pointer forward
            if i < len(s) and s[i] == t[j]:
                i += 1
        
        # Return true if all characters in s were found in order
        return i == len(s)