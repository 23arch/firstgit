import random
lower = "abcdefghjklmnopqrstuvwxyz"
upper = "ABCDEFGHJKLMNOPQRSTUVWXYZ"
NUMBER = "0123456789"
Symbol = "[]{}#()*;._-"

all =lower + upper + NUMBER + Symbol
length = 12
password = "".join(random.sample(all,length))
print("generated Password :", password) 