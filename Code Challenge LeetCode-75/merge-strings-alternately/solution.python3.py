class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []
        i = 0
        
        # Merge characters alternately while both strings have characters
        while i < len(word1) and i < len(word2):
            result.append(word1[i])  # Add from word1 first
            result.append(word2[i])  # Then add from word2
            i += 1
        
        # Append remaining characters from word1 (if any)
        while i < len(word1):
            result.append(word1[i])
            i += 1
        
        # Append remaining characters from word2 (if any)
        while i < len(word2):
            result.append(word2[i])
            i += 1
        
        return ''.join(result)