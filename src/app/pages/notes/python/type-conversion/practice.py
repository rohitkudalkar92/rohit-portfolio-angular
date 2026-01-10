# Type Conversion Practice
# Practice converting between different data types

# Basic Conversions
print("=== Basic Type Conversions ===")

# String to Number
age_str = "25"
age_int = int(age_str)
print(f"String '{age_str}' to int: {age_int}")

price_str = "19.99"
price_float = float(price_str)
print(f"String '{price_str}' to float: {price_float}")

# Number to String
number = 42
number_str = str(number)
print(f"Number {number} to string: '{number_str}'")

# Boolean Conversions
print(f"\nbool(1): {bool(1)}")
print(f"bool(0): {bool(0)}")
print(f"bool('hello'): {bool('hello')}")
print(f"bool(''): {bool('')}")

# Safe Conversion Practice
print("\n=== Safe Conversion Practice ===")

def safe_convert_to_int(value):
    try:
        return int(value)
    except ValueError:
        return f"Error: Cannot convert '{value}' to integer"

# Test with different values
test_values = ["123", "45.67", "hello", ""]
for value in test_values:
    result = safe_convert_to_int(value)
    print(f"Converting '{value}': {result}")

# Practice Exercise
print("\n=== Practice Exercise ===")
user_data = {
    "name": "Alice",
    "age": "28", 
    "height": "5.8",
    "is_student": "True"
}

# Convert and display
name = user_data["name"]
age = int(user_data["age"])
height = float(user_data["height"])
is_student = bool(user_data["is_student"])

print(f"Name: {name} (type: {type(name).__name__})")
print(f"Age: {age} (type: {type(age).__name__})")
print(f"Height: {height} (type: {type(height).__name__})")
print(f"Student: {is_student} (type: {type(is_student).__name__})")

# Calculate birth year
birth_year = 2024 - age
print(f"Birth year: {birth_year}")