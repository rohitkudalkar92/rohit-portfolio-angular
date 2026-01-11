# Python Error Types - Practice Exercises

# 1. SyntaxError Examples
print("Hello World")  # Correct
# print("Hello World"  # SyntaxError: Missing closing parenthesis

if True:  # Correct
    print("Proper syntax")
# if True  # SyntaxError: Missing colon

# 2. NameError Examples
name = "Rohit"
print(name)  # Correct
# print(undefined_name)  # NameError: name 'undefined_name' is not defined

# 3. TypeError Examples
result = int("5") + 10  # Correct: Convert string to int first
print(result)  # 15
# result = "5" + 10  # TypeError: can only concatenate str (not "int") to str

# 4. ValueError Examples
number = int("123")  # Correct: Valid string number
print(number)  # 123
# number = int("hello")  # ValueError: invalid literal for int()

# 5. IndexError Examples
my_list = [1, 2, 3, 4, 5]
print(my_list[2])  # Correct: Index 2 exists
# print(my_list[10])  # IndexError: list index out of range

# 6. KeyError Examples
person = {"name": "Alice", "age": 25}
print(person["name"])  # Correct: Key exists
print(person.get("height", "Not found"))  # Safe access
# print(person["height"])  # KeyError: 'height'

# 7. AttributeError Examples
my_list = [1, 2, 3]
my_list.append(4)  # Correct: Lists have append method
print(my_list)

my_string = "hello"
print(my_string.upper())  # Correct: Strings have upper method
# my_string.append("world")  # AttributeError: 'str' object has no attribute 'append'

# 8. ZeroDivisionError Examples
try:
    result = 10 / 2  # Safe division
    print(f"Result: {result}")
    
    result = 10 / 0  # This will cause ZeroDivisionError
except ZeroDivisionError:
    print("Cannot divide by zero!")

# 9. Error Handling Practice
def safe_calculator(operation, a, b):
    """
    Safe calculator with proper error handling
    """
    try:
        if operation == "add":
            return a + b
        elif operation == "subtract":
            return a - b
        elif operation == "multiply":
            return a * b
        elif operation == "divide":
            if b == 0:
                raise ZeroDivisionError("Cannot divide by zero")
            return a / b
        else:
            raise ValueError("Invalid operation")
    except TypeError:
        return "Error: Please provide numbers only"
    except Exception as e:
        return f"Error: {e}"

# Test the safe calculator
print(safe_calculator("add", 10, 5))      # 15
print(safe_calculator("divide", 10, 2))   # 5.0
print(safe_calculator("divide", 10, 0))   # Error message
print(safe_calculator("invalid", 10, 5))  # Error message

# 10. Practice Exercise: Fix the errors
def practice_fixes():
    """
    Practice fixing common Python errors
    """
    
    # Fix 1: SyntaxError - Add missing colon
    if True:  # Fixed: Added colon
        print("Fixed syntax error")
    
    # Fix 2: NameError - Define variable first
    user_name = "Developer"  # Fixed: Defined variable
    print(f"Hello, {user_name}")
    
    # Fix 3: TypeError - Convert types properly
    age = 25
    message = "Age: " + str(age)  # Fixed: Convert int to string
    print(message)
    
    # Fix 4: IndexError - Check bounds
    numbers = [1, 2, 3]
    if len(numbers) > 5:  # Fixed: Check if index exists
        print(numbers[5])
    else:
        print("Index out of range")
    
    # Fix 5: Add error handling
    try:
        result = 10 / 0
    except ZeroDivisionError:  # Fixed: Added error handling
        print("Cannot divide by zero")
        result = 0
    
    print("All errors fixed!")

# Run the practice
practice_fixes()

print("\n" + "="*50)
print("Python Error Types Practice Complete!")
print("Remember: Read error messages carefully - they tell you exactly what's wrong!")
print("="*50)