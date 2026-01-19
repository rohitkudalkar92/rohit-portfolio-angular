import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-loops-notes',
  templateUrl: './notes.component.html'
})
export class LoopsNotesComponent implements OnInit {

  forLoopCode = `# For loop with range
for i in range(5):
    print(i)

print("---")

# For loop with range(start, stop)
for i in range(2, 6):
    print(i)

print("---")

# For loop with range(start, stop, step)
for i in range(0, 10, 2):
    print(i)`;

  forLoopOutput = `0
1
2
3
4
---
2
3
4
5
---
0
2
4
6
8`;

  forListCode = `# Loop through a list
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)

print("---")

# Loop with index using enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")`;

  forListOutput = `apple
banana
orange
---
0: apple
1: banana
2: orange`;

  whileLoopCode = `# While loop
count = 0

while count < 5:
    print(f"Count: {count}")
    count += 1

print("Done!")`;

  whileLoopOutput = `Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
Done!`;

  breakCode = `# Break statement - exit loop early
for i in range(10):
    if i == 5:
        break
    print(i)

print("Loop ended")

print("---")

# Break in while loop
count = 0
while True:
    print(count)
    count += 1
    if count >= 3:
        break`;

  breakOutput = `0
1
2
3
4
Loop ended
---
0
1
2`;

  continueCode = `# Continue statement - skip current iteration
for i in range(5):
    if i == 2:
        continue
    print(i)

print("---")

# Print only even numbers
for i in range(10):
    if i % 2 != 0:
        continue
    print(i)`;

  continueOutput = `0
1
3
4
---
0
2
4
6
8`;

  nestedLoopCode = `# Nested loops
for i in range(3):
    for j in range(3):
        print(f"i={i}, j={j}")
    print("---")

# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
    print()`;

  nestedLoopOutput = `i=0, j=0
i=0, j=1
i=0, j=2
---
i=1, j=0
i=1, j=1
i=1, j=2
---
i=2, j=0
i=2, j=1
i=2, j=2
---
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9`;

  loopElseCode = `# Loop with else - executes if loop completes normally
for i in range(5):
    print(i)
else:
    print("Loop completed successfully")

print("---")

# Else doesn't execute if break is used
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("This won't print")

print("Loop ended with break")`;

  loopElseOutput = `0
1
2
3
4
Loop completed successfully
---
0
1
2
Loop ended with break`;

  loopDictCode = `# Loop through dictionary
person = {"name": "John", "age": 30, "city": "New York"}

# Loop through keys
for key in person:
    print(key)

print("---")

# Loop through values
for value in person.values():
    print(value)

print("---")

# Loop through key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")`;

  loopDictOutput = `name
age
city
---
John
30
New York
---
name: John
age: 30
city: New York`;

  practiceCode = `# Practice: Sum of numbers
total = 0
for i in range(1, 11):
    total += i
print(f"Sum of 1 to 10: {total}")

# Practice: Factorial
n = 5
factorial = 1
for i in range(1, n + 1):
    factorial *= i
print(f"Factorial of {n}: {factorial}")

# Practice: Print pattern
for i in range(1, 6):
    print("*" * i)

# Practice: Find even numbers in list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []
for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
print(f"Even numbers: {even_numbers}")

# Practice: Count vowels
text = "Hello World"
vowels = "aeiouAEIOU"
count = 0
for char in text:
    if char in vowels:
        count += 1
print(f"Vowels in '{text}': {count}")`;

  practiceOutput = `Sum of 1 to 10: 55
Factorial of 5: 120
*
**
***
****
*****
Even numbers: [2, 4, 6, 8, 10]
Vowels in 'Hello World': 3`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Loops - My Notes');
  }
}
