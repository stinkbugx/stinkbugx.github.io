# import statement
import pygame, sys
from pygame.locals import *

# initialize, set up pygame
pygame.init()

# set up the window
    # window is 500px wide and 400px tall
windowSurface = pygame.display.set_mode((500, 400), 0, 32)
pygame.display.set_caption('My FIRST pygame') # the text at the top of the window

# set up the colors
    # RGB represented as tuples
BLACK = (0,0,0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

# set up the fonts
basicFont = pygame.font.SysFont(None, 48)

# set up text
    # arguments: (what it says, if we want it to be anti-aliased, render color, background color)
text = basicFont.render("Hai x3", True, WHITE, BLUE)
textRect = text.get_rect()
textRect.centerx = windowSurface.get_rect().centerx
textRect.centery = windowSurface.get_rect().centery

# draw a white bg on the surface of the window
windowSurface.fill(WHITE)

# draw a green polygon
    # arguments: (surface it is drawn on, color, coords for points connected (can be more or less points))
pygame.draw.polygon(windowSurface, GREEN, ((146, 0), (291, 106), (236, 277), (56, 277), (0, 106)))

# draw some blue lines
    # arguments: (surface it is drawn on, color, start point, end point, line thickness)
pygame.draw.line(windowSurface, BLUE, (60, 60), (120, 60), 4)
pygame.draw.line(windowSurface, BLUE, (120, 60), (60, 120), 4)
pygame.draw.line(windowSurface, BLUE, (60, 120), (120, 120), 4)
pygame.draw.line(windowSurface, BLUE, (60, 60), (120, 120), 4)

# draw a circle
    # arguments: (surface it is drawn on, color, center coords, radius, line width (0 means filled in))
pygame.draw.circle(windowSurface, BLUE, (300, 50), 20, 0)

# draw an ellipse
    # arguments: (surface it is drawn on, color, (coords for top left corner x, coords y, width and height), line width (0 means filled in))
pygame.draw.ellipse(windowSurface, RED, (300, 250, 40, 80), 1)

# draw the text background rectangle onto surface
    # arguments: (surface it is drawn on, color, (top left coord x, top left coord y, width, height))
    # this moves the previously made textRect up and to the left, and then adds the to width and height
pygame.draw.rect(windowSurface, RED, (textRect.left - 20, textRect.top - 20, textRect.width + 40, textRect.height + 40))

# get a pixel array of the surface
# pixArray = pygame.PixelArray(windowSurface)
# pixArray[480][380] = BLACK

# draw text onto the surface
    # a blit puts something onto a screen, copies the pixel from one surface to another
    # previously (set up text) we formatted the text, now we are putting it on the screen
windowSurface.blit(text, textRect)

# draw the window onto the screen
    # needs to be the last thing before the game loop
pygame.display.update()

# run the game loop
while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()