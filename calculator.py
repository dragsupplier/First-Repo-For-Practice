#!/usr/bin/env python3
"""
Simple Calculator Program
This program demonstrates basic programming concepts:
- Functions
- User input
- Conditional statements
- Basic arithmetic operations
"""

def add(x, y):
    """Add two numbers."""
    return x + y

def subtract(x, y):
    """Subtract two numbers."""
    return x - y

def multiply(x, y):
    """Multiply two numbers."""
    return x * y

def divide(x, y):
    """Divide two numbers."""
    if y == 0:
        return "Error: Cannot divide by zero!"
    return x / y

def calculator():
    """Main calculator function."""
    print("=" * 40)
    print("    Simple Calculator")
    print("=" * 40)
    print("\nSelect operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    
    # Get user choice
    choice = input("\nEnter choice (1/2/3/4): ")
    
    # Check if choice is valid
    if choice not in ['1', '2', '3', '4']:
        print("Invalid input! Please select 1, 2, 3, or 4.")
        return
    
    # Get numbers from user
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Invalid input! Please enter valid numbers.")
        return
    
    # Perform calculation based on choice
    if choice == '1':
        result = add(num1, num2)
        operation = "+"
    elif choice == '2':
        result = subtract(num1, num2)
        operation = "-"
    elif choice == '3':
        result = multiply(num1, num2)
        operation = "*"
    else:
        result = divide(num1, num2)
        operation = "/"
    
    # Display result
    print(f"\n{num1} {operation} {num2} = {result}")

if __name__ == "__main__":
    calculator()
