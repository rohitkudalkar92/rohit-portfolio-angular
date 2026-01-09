import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../../common/layout/layout.component';
import { BackNavComponent } from '../../../../common/back-nav.component';
import { CodeBlockComponent } from '../../../../common/code-block.component';
import { InfoBoxComponent } from '../../../../common/info-box.component';
import { ContentSectionComponent } from '../../../../common/content-section.component';
import { TopicHeaderComponent } from '../../../../common/topic-header.component';
import { DataTypesGridComponent, DataTypeItem } from '../../../../common/data-types-grid.component';
import { PracticeExerciseComponent } from '../../../../common/practice-exercise.component';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-type-conversion-notes',
  standalone: true,
  imports: [CommonModule, RouterLink, LayoutComponent, BackNavComponent, CodeBlockComponent, InfoBoxComponent, ContentSectionComponent, TopicHeaderComponent, DataTypesGridComponent, PracticeExerciseComponent],
  templateUrl: './notes.component.html',
  styleUrls: []
})
export class TypeConversionNotesComponent implements OnInit {

  // Basic Type Conversion Examples
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