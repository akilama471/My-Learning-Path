class Man:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} කියලා මනුෂ්‍යයෙක් කථා කරයි.")

# Student class එක Man class එකෙන් උරුම කරයි (inheritance)
class Student(Man):
    def study(self):
        print(f"{self.name} පාඩම් කරනවා.")

# object එකක් සාදමු
student1 = Student("නිපුන්")
student1.speak()     # උරුම වුණ ක්‍රියාව
student1.study()

student2 = Student("ජයනි")
student2.speak()     # උරුම වුණ ක්‍රියාව
student2.study()     # තමන්ගෙම ක්‍රියාව
