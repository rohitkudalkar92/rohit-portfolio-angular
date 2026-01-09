export interface PythonTopic {
  id: string;
  title: string;
  description: string;
  order: number;
  content?: string; // For future detailed content
}

export const PYTHON_TOPICS: PythonTopic[] = [
  // Beginner Level Topics
  {
    id: 'variables-data-types',
    title: 'Variables and Data Types',
    description: 'Learn about Python variables, strings, numbers, booleans, and basic data types.',
    order: 1
  },
  {
    id: 'operators',
    title: 'Python Operators',
    description: 'Learn about arithmetic, comparison, logical, and other operators in Python.',
    order: 2
  },
  {
    id: 'type-conversion',
    title: 'Type Conversion',
    description: 'Learn how to convert between different data types in Python - strings, numbers, booleans, and more.',
    order: 3
  },
  {
    id: 'input-output',
    title: 'Input and Output',
    description: 'Learn how to get user input and display output using input() and print() functions.',
    order: 4
  },
  {
    id: 'conditional-statements',
    title: 'Conditional Statements',
    description: 'Learn about if, elif, else statements and how to make decisions in your code.',
    order: 5
  },
  {
    id: 'loops',
    title: 'Loops',
    description: 'Learn about for loops, while loops, and loop control statements like break and continue.',
    order: 6
  },
  {
    id: 'strings',
    title: 'String Manipulation',
    description: 'Learn about string methods, formatting, slicing, and working with text data.',
    order: 7
  },
  {
    id: 'lists',
    title: 'Lists',
    description: 'Learn about Python lists, list methods, indexing, slicing, and list comprehensions.',
    order: 8
  },
  {
    id: 'tuples',
    title: 'Tuples',
    description: 'Learn about tuples, their properties, methods, and when to use them over lists.',
    order: 9
  },
  {
    id: 'dictionaries',
    title: 'Dictionaries',
    description: 'Learn about Python dictionaries, key-value pairs, and dictionary methods.',
    order: 10
  },
  {
    id: 'sets',
    title: 'Sets',
    description: 'Learn about Python sets, set operations, and when to use sets for unique collections.',
    order: 11
  },
  {
    id: 'functions',
    title: 'Functions',
    description: 'Learn how to define functions, parameters, return values, and function scope.',
    order: 12
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    description: 'Learn about try, except, finally blocks and how to handle exceptions gracefully.',
    order: 13
  },
  {
    id: 'file-handling',
    title: 'File Handling',
    description: 'Learn how to read from and write to files, work with different file modes.',
    order: 14
  },
  {
    id: 'modules-packages',
    title: 'Modules and Packages',
    description: 'Learn how to import modules, create your own modules, and work with packages.',
    order: 15
  },
  
  // Medium Level Topics
  {
    id: 'oop-basics',
    title: 'Object-Oriented Programming Basics',
    description: 'Learn about classes, objects, attributes, and methods in Python.',
    order: 16
  },
  {
    id: 'inheritance',
    title: 'Inheritance',
    description: 'Learn about class inheritance, method overriding, and super() function.',
    order: 17
  },
  {
    id: 'polymorphism',
    title: 'Polymorphism',
    description: 'Learn about polymorphism, method overloading, and duck typing in Python.',
    order: 18
  },
  {
    id: 'encapsulation',
    title: 'Encapsulation',
    description: 'Learn about private/protected attributes, getters, setters, and data hiding.',
    order: 19
  },
  {
    id: 'lambda-functions',
    title: 'Lambda Functions',
    description: 'Learn about anonymous functions, lambda expressions, and functional programming concepts.',
    order: 20
  },
  {
    id: 'map-filter-reduce',
    title: 'Map, Filter, and Reduce',
    description: 'Learn about functional programming tools for data transformation and processing.',
    order: 21
  },
  {
    id: 'list-comprehensions',
    title: 'List Comprehensions',
    description: 'Learn advanced list comprehensions, nested comprehensions, and generator expressions.',
    order: 22
  },
  {
    id: 'decorators',
    title: 'Decorators',
    description: 'Learn about function decorators, class decorators, and built-in decorators.',
    order: 23
  },
  {
    id: 'generators',
    title: 'Generators',
    description: 'Learn about generator functions, yield keyword, and memory-efficient iteration.',
    order: 24
  },
  {
    id: 'context-managers',
    title: 'Context Managers',
    description: 'Learn about with statements, context managers, and resource management.',
    order: 25
  },
  {
    id: 'regular-expressions',
    title: 'Regular Expressions',
    description: 'Learn about pattern matching, regex syntax, and text processing with re module.',
    order: 26
  },
  {
    id: 'datetime',
    title: 'Date and Time',
    description: 'Learn about datetime module, date formatting, time zones, and date arithmetic.',
    order: 27
  },
  {
    id: 'json-handling',
    title: 'JSON Handling',
    description: 'Learn how to work with JSON data, parsing, and serialization in Python.',
    order: 28
  },
  {
    id: 'apis-requests',
    title: 'APIs and Requests',
    description: 'Learn how to make HTTP requests, work with APIs, and handle responses.',
    order: 29
  },
  {
    id: 'database-basics',
    title: 'Database Basics',
    description: 'Learn about SQLite, database connections, and basic database operations.',
    order: 30
  }
];

export function getPythonTopicById(id: string): PythonTopic | undefined {
  return PYTHON_TOPICS.find(topic => topic.id === id);
}