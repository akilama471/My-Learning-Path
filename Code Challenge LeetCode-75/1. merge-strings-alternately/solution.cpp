#include <string>
#include <iostream>
#include <cassert>
using namespace std;

class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string result = "";
        int i = 0;
        
        // Merge characters alternately while both strings have characters
        while (i < word1.length() && i < word2.length()) {
            result += word1[i];  // Add from word1 first
            result += word2[i];  // Then add from word2
            i++;
        }
        
        // Append remaining characters from word1 (if any)
        while (i < word1.length()) {
            result += word1[i];
            i++;
        }
        
        // Append remaining characters from word2 (if any)
        while (i < word2.length()) {
            result += word2[i];
            i++;
        }
        
        return result;
    }
};