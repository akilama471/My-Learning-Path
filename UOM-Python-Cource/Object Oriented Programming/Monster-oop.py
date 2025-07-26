#Monster is class
class Monster:

	#Class attributes
	color = "black"

	#Constructor
	def __init__(self,age,name):
		#Instance Attributes
		self.age = age
		self.name = name

		#Private attribute by convention
		self._is_innocent = None

	#Instance method
	def steal(self,warrior):
		warrior.lose_stick()