import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-error-types-notes',
  templateUrl: './notes.component.html'
})
export class ErrorTypesNotesComponent implements OnInit {

  syntaxErrorCode = `# SyntaxError - Invalid Python syntax
print("Hello World"  # Missing closing parenthesis
if True  # Missing colon
    print("Missing colon")

# Correct syntax
print("Hello World")
if True:
    print("Correct syntax")`;

  syntaxErrorOutput = `SyntaxError: unexpected EOF while parsing
SyntaxError: invalid syntax`;

  nameErrorCode = `# NameError - Using undefined variable
print(undefined_variable)  # Variable not defined
print(my_name)  # Variable not defined

# Correct usage
my_name = "Rohit"
print(my_name)  # Now it's defined`;

  nameErrorOutput = `NameError: name 'undefined_variable' is not defined
NameError: name 'my_name' is not defined
Rohit`;

  typeErrorCode = `# TypeError - Wrong data type operations
result = "5" + 10  # Can't add string and integer
len(42)  # len() expects sequence, not integer
"hello"[1.5]  # Index must be integer

# Correct usage
result = int("5") + 10  # Convert string to int
print(result)  # 15
print(len("hello"))  # 5
print("hello"[1])  # 'e'`;

  typeErrorOutput = `TypeError: can only concatenate str (not "int") to str
TypeError: object of type 'int' has no len()
TypeError: string indices must be integers
15
5
e`;

  valueErrorCode = `# ValueError - Correct type but invalid value
number = int("hello")  # Can't convert "hello" to int
import math
math.sqrt(-1)  # Can't take square root of negative

# Correct usage
number = int("123")  # Valid string number
print(number)  # 123
print(math.sqrt(9))  # 3.0`;

  valueErrorOutput = `ValueError: invalid literal for int() with base 10: 'hello'
ValueError: math domain error
123
3.0`;

  indexErrorCode = `# IndexError - Index out of range
my_list = [1, 2, 3]
print(my_list[5])  # Index 5 doesn't exist
print(my_list[-4])  # Negative index too large

# Correct usage
print(my_list[2])  # Valid index
print(my_list[-1])  # Valid negative index`;

  indexErrorOutput = `IndexError: list index out of range
IndexError: list index out of range
3
3`;

  keyErrorCode = `# KeyError - Dictionary key doesn't exist
person = {"name": "Alice", "age": 25}
print(person["height"])  # Key doesn't exist

# Correct usage
print(person["name"])  # Key exists
print(person.get("height", "Not found"))  # Safe access`;

  keyErrorOutput = `KeyError: 'height'
Alice
Not found`;

  attributeErrorCode = `# AttributeError - Object doesn't have attribute
my_string = "hello"
my_string.append("world")  # Strings don't have append method

my_list = [1, 2, 3]
my_list.upper()  # Lists don't have upper method

# Correct usage
my_list.append(4)  # Lists have append method
print(my_string.upper())  # Strings have upper method`;

  attributeErrorOutput = `AttributeError: 'str' object has no attribute 'append'
AttributeError: 'list' object has no attribute 'upper'
[1, 2, 3, 4]
HELLO`;

  zeroDivisionErrorCode = `# ZeroDivisionError - Division by zero
result = 10 / 0  # Cannot divide by zero
result = 10 % 0  # Cannot modulo by zero

# Correct usage with error handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
    result = 0

print(f"Result: {result}")`;

  zeroDivisionErrorOutput = `ZeroDivisionError: division by zero
ZeroDivisionError: integer division or modulo by zero
Cannot divide by zero!
Result: 0`;

  fileNotFoundErrorCode = `# FileNotFoundError - File doesn't exist
with open("nonexistent.txt", "r") as file:
    content = file.read()

# Correct usage with error handling
try:
    with open("nonexistent.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found!")
    content = "Default content"

print(content)`;

  fileNotFoundErrorOutput = `FileNotFoundError: [Errno 2] No such file or directory: 'nonexistent.txt'
File not found!
Default content`;

  indentationErrorCode = `# IndentationError - Incorrect indentation
if True:
print("This should be indented")  # Missing indentation

def my_function():
    print("Correct indentation")
  print("Wrong indentation")  # Inconsistent indentation

# Correct indentation
if True:
    print("Properly indented")

def my_function():
    print("Consistent indentation")
    print("All lines aligned")`;

  indentationErrorOutput = `IndentationError: expected an indented block
IndentationError: unindent does not match any outer indentation level
Properly indented
Consistent indentation
All lines aligned`;

  errorHandlingCode = `# Proper error handling with try-except
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    except TypeError:
        print("Error: Please provide numbers only")
        return None

# Test the function
print(safe_divide(10, 2))    # 5.0
print(safe_divide(10, 0))    # None (with error message)
print(safe_divide("10", 2))  # None (with error message)

# Multiple exception handling
def process_data(data, index):
    try:
        return data[index].upper()
    except IndexError:
        return "Index out of range"
    except AttributeError:
        return "Item is not a string"
    except Exception as e:
        return f"Unexpected error: {e}"

# Test cases
my_data = ["hello", "world", 123, None]
print(process_data(my_data, 0))  # HELLO
print(process_data(my_data, 5))  # Index out of range
print(process_data(my_data, 2))  # Item is not a string`;

  errorHandlingOutput = `5.0
Error: Cannot divide by zero
None
Error: Please provide numbers only
None
HELLO
Index out of range
Item is not a string`;

  practiceCode = `# Practice: Fix these error-prone code snippets

# 1. Fix the syntax error
def greet_user(name)  # Missing colon
    print(f"Hello, {name}")

# 2. Fix the name error
print(user_age)  # Variable not defined

# 3. Fix the type error
result = "Age: " + 25  # Can't concatenate string and int

# 4. Fix the index error
numbers = [1, 2, 3, 4, 5]
print(numbers[10])  # Index out of range

# 5. Add proper error handling
def divide_numbers(x, y):
    return x / y  # No error handling

# SOLUTIONS:
def greet_user(name):  # Added colon
    print(f"Hello, {name}")

user_age = 25  # Define the variable
print(user_age)

result = "Age: " + str(25)  # Convert int to string
print(result)

numbers = [1, 2, 3, 4, 5]
if len(numbers) > 10:
    print(numbers[10])
else:
    print("Index out of range")

def divide_numbers(x, y):
    try:
        return x / y
    except ZeroDivisionError:
        return "Cannot divide by zero"
    except TypeError:
        return "Please provide numbers only"`;

  practiceOutput = `Hello, Rohit
25
Age: 25
Index out of range
5.0
Cannot divide by zero
Please provide numbers only`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Error Types - My Notes');
  }
}