class Person:
    def __init__(self, title="default_title"):
        self._name = None
        self.title = title
    def talk(self, words):
        print("talk 1")
    def talk(self, words):
        print("talk 2")

class Employee(Person):
    def __init__(self,id,title):
        super().__init__(title)
        self.id = id