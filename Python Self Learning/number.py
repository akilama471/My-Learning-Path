
#There are three numeric types in Python:
#   int
#   float
#   complex

#Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.
a = 1
b = 35656222554887711
c = -3255522

#Float, or "floating point number" is a number, positive or negative, containing one or more decimals.
d = 1.10
e = 1.0
f = -35.59

#Float can also be scientific numbers with an "e" to indicate the power of 10.
g = 35e3
h = 12E4
i = -87.7e100

#Complex numbers are written with a "j" as the imaginary part:
j = 3+5j
k = 5j
l = -5j

#convert from one type to another with the int(), float(), and complex() methods:

#convert from int to float:
x = float(c)

#convert from float to int:
y = int(b)

#convert from int to complex:
z = complex(a)

#Random Number
import random
print(random.randrange(1, 10))

#Int casting
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3

#Float casting
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2