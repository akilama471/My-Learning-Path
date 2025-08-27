class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        # Helper function to check if a substring divides a string
        def divides(string, substring):
            return string == substring * (len(string) // len(substring))
        
        # Find the greatest common divisor (GCD) of lengths of str1 and str2
        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a
        
        # Find the GCD of lengths of str1 and str2
        length_gcd = gcd(len(str1), len(str2))
        
        # Get the candidate string
        candidate = str1[:length_gcd]
        
        # Check if the candidate string divides both str1 and str2
        if divides(str1, candidate) and divides(str2, candidate):
            return candidate
        else:
            return ""