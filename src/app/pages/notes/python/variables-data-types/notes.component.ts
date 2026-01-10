import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { DataTypeItem } from '../../../../common/data-types-grid.component';

@Component({
  selector: 'app-variables-data-types-notes',
  templateUrl: './notes.component.html'
})
export class VariablesDataTypesNotesComponent implements OnInit {

  // Code examples for reusable components
  validExamplesCode = `user_name = "Alice"        # snake_case (recommended)
age2 = 25                  # numbers allowed
_private_var = "hidden"    # leading underscore
PI = 3.14159              # constants
my_list = [1, 2, 3]       # descriptive`;

  invalidExamplesCode = `# These would cause SyntaxError:
# 2name = "John"         # Cannot start with number
# user-name = "Alice"    # Cannot contain hyphen
# user name = "Bob"      # Cannot contain space
# if = 25               # Cannot use keywords
# @email = "test"       # Cannot use @ symbol
# user$name = "Alice"   # Cannot use $ symbol
# name% = "Bob"         # Cannot use % symbol
# #count = 10           # Cannot use # symbol`;

  variablesCode = `# Creating variables
name = "John"
age = 25
height = 5.9
is_student = True

print(name, age, height, is_student)`;

  variablesOutput = `John 25 5.9 True`;

  typeCheckingCode = `name = "Alice"
age = 25
height = 5.9
is_student = True

print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(height))    # <class 'float'>
print(type(is_student)) # <class 'bool'>`;

  typeCheckingOutput = `&lt;class 'str'&gt;
&lt;class 'int'&gt;
&lt;class 'float'&gt;
&lt;class 'bool'&gt;`;

  typeConversionCode = `# String to number
age_str = "25"
age_int = int(age_str)
age_float = float(age_str)

# Number to string
num = 42
num_str = str(num)

# Boolean conversion
print(bool(1))    # True
print(bool(0))    # False
print(bool(""))   # False
print(bool("hi")) # True`;

  typeConversionOutput = `True
False
False
True`;

  multipleAssignmentCode = `# Multiple assignment
x, y, z = 1, 2, 3
name, age, city = "Alice", 25, "NYC"

# Swapping variables
a, b = 10, 20
a, b = b, a  # Now a=20, b=10

# Unpacking
coordinates = (3, 4)
x, y = coordinates`;

  practiceCode = `# Your task: Create and display personal info
first_name = "Your Name"
last_name = "Your Last Name"
age = 25
height = 1.75
is_student = True

# Display using f-strings
print(f"Name: {first_name} {last_name}")
print(f"Age: {age} years old")
print(f"Height: {height}m")
print(f"Student: {is_student}")`;

  practiceOutput = `Name: Your Name Your Last Name
Age: 25 years old
Height: 1.75m
Student: True`;

  dataTypes: DataTypeItem[] = [
    {
      title: 'Strings',
      subtitle: 'str',
      description: 'Text data enclosed in quotes',
      code: `name = "Alice"
message = 'Hello World'
multiline = """This is a
multiline string"""`
    },
    {
      title: 'Numbers',
      subtitle: 'int/float',
      description: 'Integers and floating-point numbers',
      code: `age = 25          # int
price = 19.99     # float
complex_num = 3+4j # complex`
    },
    {
      title: 'Booleans',
      subtitle: 'bool',
      description: 'True or False values',
      code: `is_active = True
is_complete = False
result = 5 > 3  # True`
    },
    {
      title: 'None Type',
      subtitle: 'NoneType',
      description: 'Represents absence of value',
      code: `value = None
print(value)  # None`
    }
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Variables and Data Types - My Notes');
  }
}