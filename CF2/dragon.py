'''
The player is in a world of caves and dragons. If they enter a cave they will encounter one of two dragons: one that is hungry 
and will eat the player, the other is friendly and will help the player. They don't know which is which, but they have to choose.
'''

import random # allows us to get random numbers
import time # allows us to add pauses

# play by finding the folder in terminal and then entering 'python dragon.py'

def displayIntro():
    print('''You are in a land full of dragons. In front of you, you see
two caves. In one cave, the dragon is friendly and will share
his treature with you. The other dragon is greedy and hungry,
and will eat you on sight.''') # multi-line print
    print() # just for spacing

def chooseCave():
    cave = ''
    while cave != '1' and cave != '2':
        print('Which cave will you go into?')
        cave = input('Please enter 1 or 2: ')
    return cave

def caveChecker(chosenCave):
    print('You approach the cave...')
    #time.sleep(2) #waits for 2 seconds before continue

    #just weird spacing stuff, fancier way of doing the commented out sleep above ^
    time.sleep(1)
    print('...')
    time.sleep(1)
    print('...')
    time.sleep(1)

    friendlyCave = random.randint(1,2) # chooses randomly if the friendly cave is 1 or 2
    if chosenCave == str(friendlyCave): # if they chose the friendly cave
        print('Good job you got some treasure and a kick ass dragon friend')
    else: # if they chose the EVIL cave
        print('You got eated :(')
    print()

displayIntro()

playAgain = 'yes'

while playAgain.lower() == 'yes': # adding .lower() makes it so it isn't case sensitive
    cave = chooseCave()
    caveChecker(cave)
    
    time.sleep(1)
    print('Would you like to play again?')
    playAgain = input("Yes or no: ")
    print()

print('Okay goodbye :)')