import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { DataTypeItem } from '../../../../common/data-types-grid/data-types-grid.component';

@Component({
  selector: 'app-type-conversion-notes',
  templateUrl: './notes.component.html'
})
export class TypeConversionNotesComponent implements OnInit {

  // Basic Type Conversion Examples
  implicitVsExplicitCode = `# IMPLICIT TYPE CONVERSION (Automatic)
print("=== Implicit Conversion ===")

# Python automatically converts types in mixed operations
result1 = 10 + 3.5        # int + float → float (10.0 + 3.5)
print(f"10 + 3.5 = {result1} (type: {type(result1).__name__})")

result2 = True + 5        # bool + int → int (1 + 5)
print(f"True + 5 = {result2} (type: {type(result2).__name__})")

result3 = False * 10      # bool * int → int (0 * 10)
print(f"False * 10 = {result3} (type: {type(result3).__name__})")

print("\n=== Explicit Conversion ===")

# You manually convert using functions
age_str = "25"            # String
age_int = int(age_str)    # Explicitly convert to int
print(f"String '{age_str}' → int {age_int}")

price_str = "19.99"       # String
price_float = float(price_str)  # Explicitly convert to float
print(f"String '{price_str}' → float {price_float}")

number = 42               # Integer
number_str = str(number)  # Explicitly convert to string
print(f"Int {number} → string '{number_str}'")

print("\n=== When Explicit is Required ===")

# This would cause an error (uncomment to see):
# result = "Age: " + 25    # TypeError: can't concatenate str and int

# Must convert explicitly:
result = "Age: " + str(25)  # Explicit conversion required
print(f"Concatenation: {result}")`;

  implicitVsExplicitOutput = `=== Implicit Conversion ===
10 + 3.5 = 13.5 (type: float)
True + 5 = 6 (type: int)
False * 10 = 0 (type: int)

=== Explicit Conversion ===
String '25' → int 25
String '19.99' → float 19.99
Int 42 → string '42'

=== When Explicit is Required ===
Concatenation: Age: 25`;

  stringToNumberCode = `# String to Integer
age_str = "25"
age_int = int(age_str)
print(f"String: '{age_str}' -> Integer: {age_int}")

# String to Float
price_str = "19.99"
price_float = float(price_str)
print(f"String: '{price_str}' -> Float: {price_float}")

# Invalid conversion (would cause error)
# invalid = int("hello")  # ValueError`;

  stringToNumberOutput = `String: '25' -> Integer: 25
String: '19.99' -> Float: 19.99`;

  numberToStringCode = `# Integer to String
age = 25
age_str = str(age)
print(f"Integer: {age} -> String: '{age_str}'")

# Float to String
price = 19.99
price_str = str(price)
print(f"Float: {price} -> String: '{price_str}'")

# Using f-strings for conversion
formatted = f"Age: {age}, Price: \${price}"
print(formatted)`;

  numberToStringOutput = `Integer: 25 -> String: '25'
Float: 19.99 -> String: '19.99'
Age: 25, Price: \$19.99`;

  booleanConversionCode = `# Numbers to Boolean
print(f"bool(1): {bool(1)}")
print(f"bool(0): {bool(0)}")
print(f"bool(42): {bool(42)}")
print(f"bool(-5): {bool(-5)}")

# Strings to Boolean
print(f"bool('hello'): {bool('hello')}")
print(f"bool(''): {bool('')}")
print(f"bool('0'): {bool('0')}")

# Lists to Boolean
print(f"bool([1, 2, 3]): {bool([1, 2, 3])}")
print(f"bool([]): {bool([])}")`;

  booleanConversionOutput = `bool(1): True
bool(0): True
bool(42): True
bool(-5): True
bool('hello'): True
bool(''): False
bool('0'): True
bool([1, 2, 3]): True
bool([]): False`;

  implicitConversionCode = `# Implicit conversion in operations
result1 = 10 + 3.5  # int + float = float
print(f"10 + 3.5 = {result1} (type: {type(result1).__name__})")

result2 = True + 5  # bool + int = int
print(f"True + 5 = {result2} (type: {type(result2).__name__})")

result3 = "Hello" + " " + "World"  # string concatenation
print(f"String concat: {result3}")

# Mixed operations
result4 = "Number: " + str(42)
print(f"Mixed: {result4}")`;

  implicitConversionOutput = `10 + 3.5 = 13.5 (type: float)
True + 5 = 6 (type: int)
String concat: Hello World
Mixed: Number: 42`;

  safeConversionCode = `# Safe type conversion with error handling
def safe_int_conversion(value):
    try:
        return int(value)
    except ValueError:
        print(f"Cannot convert '{value}' to integer")
        return None

def safe_float_conversion(value):
    try:
        return float(value)
    except ValueError:
        print(f"Cannot convert '{value}' to float")
        return 0.0

# Test safe conversions
values = ["123", "45.67", "hello", "", "3.14"]

for value in values:
    int_result = safe_int_conversion(value)
    float_result = safe_float_conversion(value)
    print(f"'{value}' -> int: {int_result}, float: {float_result}")
    print("---")`;

  safeConversionOutput = `'123' -> int: 123, float: 123.0
---
Cannot convert '45.67' to integer
'45.67' -> int: None, float: 45.67
---
Cannot convert 'hello' to integer
Cannot convert 'hello' to float
'hello' -> int: None, float: 0.0
---
Cannot convert '' to integer
Cannot convert '' to float
'' -> int: None, float: 0.0
---
Cannot convert '3.14' to integer
'3.14' -> int: None, float: 3.14
---`;

  practiceCode = `# Type Conversion Practice
# Convert and display different data types

# User input simulation
user_age = "28"
user_height = "5.8"
user_name = "Alice"
is_student = "True"

# Convert to appropriate types
age = int(user_age)
height = float(user_height)
student_status = bool(is_student)  # Note: any non-empty string is True

# Display conversions
print(f"Name: {user_name} (type: {type(user_name).__name__})")
print(f"Age: {age} (type: {type(age).__name__})")
print(f"Height: {height} (type: {type(height).__name__})")
print(f"Student: {student_status} (type: {type(student_status).__name__})")

# Calculate and display
birth_year = 2024 - age
print(f"Birth year: {birth_year}")`;

  practiceOutput = `Name: Alice (type: str)
Age: 28 (type: int)
Height: 5.8 (type: float)
Student: True (type: bool)
Birth year: 1996`;

  conversionMethods: DataTypeItem[] = [
    {
      title: 'int()',
      subtitle: 'To Integer',
      description: 'Convert to integer number',
      code: `int("123")    # 123
int(45.7)     # 45
int(True)     # 1
int(False)    # 0`
    },
    {
      title: 'float()',
      subtitle: 'To Float',
      description: 'Convert to floating-point number',
      code: `float("3.14")  # 3.14
float(42)      # 42.0
float(True)    # 1.0
float("inf")   # inf`
    },
    {
      title: 'str()',
      subtitle: 'To String',
      description: 'Convert to string representation',
      code: `str(123)       # "123"
str(3.14)      # "3.14"
str(True)      # "True"
str([1,2,3])   # "[1, 2, 3]"`
    },
    {
      title: 'bool()',
      subtitle: 'To Boolean',
      description: 'Convert to True or False',
      code: `bool(1)        # True
bool(0)        # False
bool("text")   # True
bool("")       # False`
    }
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Type Conversion - My Notes');
  }
}