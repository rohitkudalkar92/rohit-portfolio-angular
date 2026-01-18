import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-conditional-statements-notes',
  templateUrl: './notes.component.html'
})
export class ConditionalStatementsNotesComponent implements OnInit {

  ifCode = `# Simple if statement
age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote")`;

  ifOutput = `You are an adult
You can vote`;

  ifElseCode = `# if-else statement
temperature = 15

if temperature > 20:
    print("It's warm outside")
else:
    print("It's cold outside")`;

  ifElseOutput = `It's cold outside`;

  ifElifElseCode = `# if-elif-else statement
score = 75

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")`;

  ifElifElseOutput = `Your grade is: C`;

  nestedIfCode = `# Nested if statements
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license")
else:
    print("You are too young to drive")`;

  nestedIfOutput = `You can drive`;

  logicalOperatorsCode = `# Using logical operators (and, or, not)
age = 20
has_id = True

# AND operator
if age >= 18 and has_id:
    print("Entry allowed")

# OR operator
is_weekend = False
is_holiday = True

if is_weekend or is_holiday:
    print("No work today!")

# NOT operator
is_raining = False

if not is_raining:
    print("Let's go outside")`;

  logicalOperatorsOutput = `Entry allowed
No work today!
Let's go outside`;

  comparisonCode = `# Comparison operators
x = 10
y = 20

print(f"x == y: {x == y}")  # Equal to
print(f"x != y: {x != y}")  # Not equal to
print(f"x > y: {x > y}")    # Greater than
print(f"x < y: {x < y}")    # Less than
print(f"x >= y: {x >= y}")  # Greater than or equal to
print(f"x <= y: {x <= y}")  # Less than or equal to`;

  comparisonOutput = `x == y: False
x != y: True
x > y: False
x < y: True
x >= y: False
x <= y: True`;

  ternaryCode = `# Ternary operator (conditional expression)
age = 20

# Traditional if-else
if age >= 18:
    status = "Adult"
else:
    status = "Minor"

# Ternary operator (one line)
status = "Adult" if age >= 18 else "Minor"

print(status)

# Another example
number = 15
result = "Even" if number % 2 == 0 else "Odd"
print(f"{number} is {result}")`;

  ternaryOutput = `Adult
15 is Odd`;

  membershipCode = `# Membership operators (in, not in)
fruits = ["apple", "banana", "orange"]

if "apple" in fruits:
    print("Apple is in the list")

if "grape" not in fruits:
    print("Grape is not in the list")

# Check substring
text = "Hello World"
if "World" in text:
    print("Found 'World' in text")`;

  membershipOutput = `Apple is in the list
Grape is not in the list
Found 'World' in text`;

  practiceCode = `# Practice: Grade Calculator
# Write a program that takes a score and prints the grade

score = int(input("Enter your score (0-100): "))

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Good job!")
elif score >= 70:
    print("Grade: C - Fair")
elif score >= 60:
    print("Grade: D - Needs improvement")
else:
    print("Grade: F - Failed")

# Practice: Even or Odd
number = int(input("Enter a number: "))

if number % 2 == 0:
    print(f"{number} is Even")
else:
    print(f"{number} is Odd")

# Practice: Leap Year Checker
year = int(input("Enter a year: "))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} is a leap year")
else:
    print(f"{year} is not a leap year")`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Conditional Statements - My Notes');
  }
}
