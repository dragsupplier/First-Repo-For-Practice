#!/usr/bin/env python3
"""
Simple Hello World Program
This is your first Python script!
"""

# This function prints a greeting message
def greet(name):
    """Print a personalized greeting."""
    print(f"Hello, {name}! Welcome to your first GitHub repository!")

# This is the main part of the program that runs when you execute the script
if __name__ == "__main__":
    # Ask the user for their name
    user_name = input("What is your name? ")
    
    # Call the greet function with the user's name
    greet(user_name)
    
    # Print some encouraging words
    print("\n🎉 Congratulations on creating your first repository!")
    print("Keep learning and coding! 💻")
