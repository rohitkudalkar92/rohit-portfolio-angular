import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-clean-code',
  templateUrl: './clean-code.component.html'
})
export class CleanCodeComponent implements OnInit {

  meaningfulNamesCode = `// BAD - Unclear names
const d = 30;              // What is d?
const u = getUser();       // What kind of user?
const calc = (x, y) => {}; // What does this calculate?

// GOOD - Meaningful names
const daysInMonth = 30;
const currentUser = getAuthenticatedUser();
const calculateMonthlySalary = (baseSalary, bonus) => {
  return baseSalary + bonus;
};`;

  meaningfulNamesOutput = `// Clear, self-documenting code
// Anyone can understand what these variables represent
// Function names explain their purpose`;

  smallFunctionsCode = `// BAD - Large function doing multiple things
const processUserData = (userData) => {
  // Validate data (20 lines)
  // Transform data (15 lines)
  // Save to database (10 lines)
  // Send email (8 lines)
  // Log activity (5 lines)
  // 58 lines total!
};

// GOOD - Small, focused functions
const validateUserData = (userData) => {
  // Only validation logic (max 20 lines)
  if (!userData.name) throw new Error('Name required');
  if (!userData.email) throw new Error('Email required');
};

const transformUserData = (userData) => {
  // Only transformation logic (max 15 lines)
  return {
    ...userData,
    name: userData.name.trim(),
    email: userData.email.toLowerCase()
  };
};

const saveUserToDatabase = async (userData) => {
  // Only database operations (max 10 lines)
  return await db.users.create(userData);
};`;

  smallFunctionsOutput = `// Each function has a single responsibility
// Easy to test, debug, and maintain
// Functions are reusable`;

  avoidNestingCode = `// BAD - Deep nesting (hard to read)
const processOrder = (order) => {
  if (order) {
    if (order.isValid()) {
      if (order.customer) {
        if (order.customer.isActive()) {
          if (order.items.length > 0) {
            // Process order
            return "Order processed";
          }
        }
      }
    }
  }
  return "Order failed";
};

// GOOD - Early returns (flat structure)
const processOrder = (order) => {
  if (!order) {
    return "No order provided";
  }
  
  if (!order.isValid()) {
    return "Invalid order";
  }
  
  if (!order.customer?.isActive()) {
    return "Invalid customer";
  }
  
  if (order.items.length === 0) {
    return "No items in order";
  }
  
  // Process order
  return "Order processed successfully";
};`;

  avoidNestingOutput = `// Flat structure is easier to read
// Each condition is clear and separate
// Early returns prevent deep nesting
// Uses optional chaining (?.) for safer property access`;

  singleResponsibilityCode = `// BAD - Multiple responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  saveToDatabase() {     // Database responsibility
    // Database logic
    console.log('Saving to database...');
  }
  
  sendEmail() {          // Email responsibility
    // Email logic
    console.log('Sending email...');
  }
  
  validateData() {       // Validation responsibility
    // Validation logic
    return this.name && this.email;
  }
}

// GOOD - Single responsibility
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {           // Only database operations
    console.log('Saving user to database...');
    // Database logic
  }
}

class EmailService {
  sendWelcomeEmail(user) { // Only email operations
    console.log('Sending welcome email...');
    // Email logic
  }
}

class UserValidator {
  validate(user) {       // Only validation
    return user.name && user.email && user.email.includes('@');
  }
}`;

  singleResponsibilityOutput = `// Each class has one reason to change
// Easy to modify without affecting other functionality
// Better testability and maintainability
// Modern ES6 class syntax`;

  kissPrincipleCode = `// BAD - Over-engineered, complex solution
class AdvancedCalculatorWithMultipleDesignPatterns {
  constructor() {
    this.strategyFactory = new CalculationStrategyFactory();
    this.observerManager = new CalculationObserverManager();
    this.decoratorChain = new CalculationDecoratorChain();
  }
  
  performComplexCalculation(a, b, operation) {
    const strategy = this.strategyFactory.createStrategy(operation);
    const decoratedStrategy = this.decoratorChain.decorate(strategy);
    const result = decoratedStrategy.execute(a, b);
    this.observerManager.notifyObservers(result);
    return result;
  }
}

// Usage (overly complex for simple math)
const calc = new AdvancedCalculatorWithMultipleDesignPatterns();
const result = calc.performComplexCalculation(5, 3, "add");

// GOOD - Simple, straightforward solution
class SimpleCalculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// Usage (simple and clear)
const calculator = new SimpleCalculator();
const sum = calculator.add(5, 3);
const product = calculator.multiply(4, 6);

console.log("Sum:", sum);
console.log("Product:", product);

// Another example: Simple vs Complex
// BAD - Unnecessarily complex
function processUserDataWithAdvancedPatterns(userData) {
  const validator = new ChainOfResponsibilityValidator();
  const transformer = new StrategyPatternTransformer();
  const persister = new AbstractFactoryPersister();
  
  return validator.validate(userData)
    .then(validData => transformer.transform(validData))
    .then(transformedData => persister.persist(transformedData));
}

// GOOD - Simple and direct
function processUserData(userData) {
  // Validate
  if (!userData.name || !userData.email) {
    throw new Error("Name and email are required");
  }
  
  // Transform
  const processedData = {
    name: userData.name.trim(),
    email: userData.email.toLowerCase(),
    createdAt: new Date()
  };
  
  // Save
  return saveToDatabase(processedData);
}

function saveToDatabase(data) {
  console.log("Saving to database:", data);
  return Promise.resolve(data);
}

// Test simple approach
processUserData({ name: "  John Doe  ", email: "JOHN@EXAMPLE.COM" })
  .then(result => console.log("Saved:", result));`;

  kissPrincipleOutput = `Sum: 8
Product: 24
Saving to database: { name: "John Doe", email: "john@example.com", createdAt: 2024-01-15T10:30:00.000Z }
Saved: { name: "John Doe", email: "john@example.com", createdAt: 2024-01-15T10:30:00.000Z }`;

  yagniPrincipleCode = `// BAD - Implementing features "just in case"
class UserManager {
  constructor() {
    this.users = [];
    this.userHistory = []; // Not needed yet
    this.userPreferences = {}; // Not needed yet
    this.userAnalytics = {}; // Not needed yet
  }
  
  addUser(user) {
    this.users.push(user);
    // Complex logging system not needed yet
    this.logUserAction('add', user);
    this.updateAnalytics('user_added');
    this.sendNotificationToAdmins(user);
  }
  
  // Methods that aren't needed yet
  logUserAction(action, user) { /* complex implementation */ }
  updateAnalytics(event) { /* complex implementation */ }
  sendNotificationToAdmins(user) { /* complex implementation */ }
}

// GOOD - Implement only what's needed now
class SimpleUserManager {
  constructor() {
    this.users = [];
  }
  
  addUser(user) {
    if (!user.name || !user.email) {
      throw new Error('Name and email required');
    }
    this.users.push(user);
    console.log('User added:', user.name);
  }
  
  getUsers() {
    return this.users;
  }
  
  findUser(email) {
    return this.users.find(user => user.email === email);
  }
}

// Usage
const userManager = new SimpleUserManager();
userManager.addUser({ name: 'Alice', email: 'alice@example.com' });
userManager.addUser({ name: 'Bob', email: 'bob@example.com' });

console.log('Total users:', userManager.getUsers().length);
console.log('Found user:', userManager.findUser('alice@example.com').name);`;

  yagniPrincipleOutput = `User added: Alice
User added: Bob
Total users: 2
Found user: Alice`;

  readabilityCode = `// BAD - Clever but hard to read
const u = users.filter(u => u.a && u.s === 'A').map(u => ({ ...u, n: u.fn + ' ' + u.ln }));
const r = u.reduce((a, c) => a + c.sal, 0) / u.length;

// One-liner that's hard to understand
const x = arr.reduce((a,b,i,ar) => i === ar.length-1 ? (a+b)/ar.length : a+b, 0);

// GOOD - Clear and readable
const activeUsers = users.filter(user => {
  return user.active && user.status === 'APPROVED';
});

const usersWithFullNames = activeUsers.map(user => {
  return {
    ...user,
    fullName: user.firstName + ' ' + user.lastName
  };
});

const totalSalary = usersWithFullNames.reduce((sum, user) => {
  return sum + user.salary;
}, 0);

const averageSalary = totalSalary / usersWithFullNames.length;

// Clear function for average calculation
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

const scores = [85, 92, 78, 96, 88];
const averageScore = calculateAverage(scores);

console.log('Active users:', activeUsers.length);
console.log('Average salary:', averageSalary);
console.log('Average score:', averageScore);`;

  readabilityOutput = `Active users: 3
Average salary: 75000
Average score: 87.8`;

  consistencyCode = `// BAD - Inconsistent naming and patterns
class userManager {
  AddUser(userData) { // PascalCase method
    this.user_list.push(userData); // snake_case property
  }
  
  get_user_count() { // snake_case method
    return this.userList.length; // camelCase property
  }
  
  FindUserByEmail(email_address) { // Mixed naming
    return this.Users.find(u => u.EmailAddress === email_address);
  }
}

// GOOD - Consistent naming and patterns
class UserManager {
  constructor() {
    this.users = [];
  }
  
  addUser(userData) {
    this.users.push(userData);
  }
  
  getUserCount() {
    return this.users.length;
  }
  
  findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }
  
  removeUser(email) {
    this.users = this.users.filter(user => user.email !== email);
  }
}

// Consistent error handling pattern
class ApiService {
  async fetchUser(id) {
    try {
      const response = await fetch(\`/api/users/\${id}\`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw error;
    }
  }
  
  async fetchPosts(userId) {
    try {
      const response = await fetch(\`/api/users/\${userId}/posts\`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      throw error;
    }
  }
}

const manager = new UserManager();
manager.addUser({ name: 'Alice', email: 'alice@example.com' });
console.log('User count:', manager.getUserCount());`;

  consistencyOutput = `User count: 1`;

  explicitCode = `// BAD - Implicit behavior
function processData(data) {
  // What does this return? What does it modify?
  return data.map(item => {
    item.processed = true; // Mutating input!
    return item.value * 2;
  });
}

function saveUser(user) {
  // Does this create or update? What does it return?
  if (users.find(u => u.id === user.id)) {
    // Update existing
    Object.assign(users.find(u => u.id === user.id), user);
  } else {
    // Create new
    users.push({ ...user, id: generateId() });
  }
}

// GOOD - Explicit behavior
function calculateDoubledValues(data) {
  // Clear what it returns, doesn't mutate input
  return data.map(item => item.value * 2);
}

function markItemsAsProcessed(items) {
  // Explicit about mutation
  items.forEach(item => {
    item.processed = true;
  });
  return items;
}

function createUser(userData) {
  const newUser = {
    ...userData,
    id: generateId(),
    createdAt: new Date()
  };
  users.push(newUser);
  return newUser; // Explicit return
}

function updateUser(id, updates) {
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    throw new Error(\`User with id \${id} not found\`);
  }
  users[userIndex] = { ...users[userIndex], ...updates };
  return users[userIndex]; // Explicit return
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

const users = [];
const data = [{ value: 5 }, { value: 10 }];

const doubled = calculateDoubledValues(data);
const newUser = createUser({ name: 'Alice', email: 'alice@example.com' });

console.log('Doubled values:', doubled);
console.log('Created user:', newUser.name);`;

  explicitOutput = `Doubled values: [10, 20]
Created user: Alice`;

  failFastOutput = `Order processed successfully
Total: 1134.40`;

  // SOLID Principles
  solidSrpOutput = `Saving user: Alice
Sending email to: alice@example.com`;

  architectureCode = `// BAD - Tightly coupled, mixed concerns
class OrderProcessor {
  processOrder(orderData) {
    // Validation mixed with business logic
    if (!orderData.items) throw new Error('No items');
    
    // Database access mixed in
    const dbConnection = new DatabaseConnection();
    const user = dbConnection.query('SELECT * FROM users WHERE id = ?', orderData.userId);
    
    // Email logic mixed in
    const emailService = new EmailService();
    emailService.sendConfirmation(user.email, orderData);
    
    // Payment processing mixed in
    const paymentGateway = new PaymentGateway();
    paymentGateway.charge(user.creditCard, orderData.total);
    
    return 'Order processed';
  }
}

// GOOD - Separation of concerns, loose coupling
class OrderValidator {
  validate(orderData) {
    if (!orderData.items || orderData.items.length === 0) {
      throw new Error('Order must have items');
    }
    if (!orderData.userId) {
      throw new Error('User ID required');
    }
  }
}

class OrderService {
  constructor(userRepo, emailService, paymentService) {
    this.userRepo = userRepo;
    this.emailService = emailService;
    this.paymentService = paymentService;
  }
  
  async processOrder(orderData) {
    // Single responsibility: orchestrate the order process
    const validator = new OrderValidator();
    validator.validate(orderData);
    
    const user = await this.userRepo.findById(orderData.userId);
    await this.paymentService.processPayment(user, orderData.total);
    await this.emailService.sendConfirmation(user.email, orderData);
    
    return { success: true, orderId: this.generateOrderId() };
  }
  
  generateOrderId() {
    return 'ORD-' + Date.now();
  }
}

// Usage with dependency injection
const userRepo = new UserRepository();
const emailService = new EmailService();
const paymentService = new PaymentService();

const orderService = new OrderService(userRepo, emailService, paymentService);
console.log('Order service initialized with dependencies');`;

  architectureOutput = `Order service initialized with dependencies`;

  maintainabilityCode = `// BAD - Hard to test, premature optimization
class DataProcessor {
  processLargeDataset(data) {
    // Premature optimization - complex caching
    const cacheKey = this.generateComplexCacheKey(data);
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    // Hard to test - direct file system access
    const fs = require('fs');
    fs.writeFileSync('/tmp/processing.log', 'Processing started');
    
    // Complex logic that's hard to test
    const result = data.map(item => {
      const processed = this.complexCalculation(item);
      fs.appendFileSync('/tmp/processing.log', \`Processed: \${item.id}\`);
      return processed;
    });
    
    this.cache.set(cacheKey, result);
    return result;
  }
}

// GOOD - Testable, simple, focused
class SimpleDataProcessor {
  constructor(logger = console) {
    this.logger = logger;
  }
  
  processData(data) {
    this.logger.log('Processing started');
    
    return data.map(item => {
      const result = this.calculateValue(item);
      this.logger.log(\`Processed item: \${item.id}\`);
      return result;
    });
  }
  
  calculateValue(item) {
    // Simple, testable calculation
    return {
      id: item.id,
      value: item.value * 2,
      processed: true
    };
  }
}

// Easy to test with mock logger
class MockLogger {
  constructor() {
    this.logs = [];
  }
  
  log(message) {
    this.logs.push(message);
  }
}

const mockLogger = new MockLogger();
const processor = new SimpleDataProcessor(mockLogger);

const testData = [{ id: 1, value: 10 }, { id: 2, value: 20 }];
const result = processor.processData(testData);

console.log('Processed items:', result.length);
console.log('Log entries:', mockLogger.logs.length);`;

  maintainabilityOutput = `Processing started
Processed item: 1
Processed item: 2
Processed items: 2
Log entries: 3`;

  errorHandlingCode = `// BAD - Ignoring errors
const divideNumbers = (a, b) => {
  return a / b;  // What if b is 0?
};

const readFile = (filename) => {
  const fs = require('fs');
  return fs.readFileSync(filename, 'utf8');  // What if file doesn't exist?
};

// GOOD - Proper error handling
const divideNumbers = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};

const readFile = async (filename) => {
  try {
    const fs = require('fs').promises;
    return await fs.readFile(filename, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(\`File \${filename} not found\`);
      return null;
    }
    console.error(\`Error reading file \${filename}: \${error.message}\`);
    throw error;
  }
};`;

  errorHandlingOutput = `// Graceful error handling prevents crashes
// Clear error messages help debugging
// Users get meaningful feedback
// Uses async/await for better error handling`;

  magicNumbersCode = `// BAD - Magic numbers
const calculateTax = (salary) => {
  return salary * 0.18;  // What is 0.18?
};

const isAdult = (age) => {
  return age >= 18;  // Why 18?
};

const processPayment = (amount) => {
  return amount * 1.05;  // What is 1.05?
};

// GOOD - Named constants
const TAX_RATE = 0.18;
const ADULT_AGE = 18;
const PROCESSING_FEE_MULTIPLIER = 1.05;

const calculateTax = (salary) => {
  return salary * TAX_RATE;
};

const isAdult = (age) => {
  return age >= ADULT_AGE;
};

const processPayment = (amount) => {
  return amount * PROCESSING_FEE_MULTIPLIER;
};`;

  magicNumbersOutput = `// Constants make code self-documenting
// Easy to change values in one place
// Clear business rules
// Modern const declarations`;

  consistentFormattingCode = `// BAD - Inconsistent formatting
const calculateTotal=(items)=>{
  let total=0;
  for(let item of items){
    if(item.price>0){
      total+=item.price*item.quantity;
    }
  }
  return total;
};

// GOOD - Consistent formatting
const calculateTotal = (items) => {
  let total = 0;
  for (const item of items) {
    if (item.price > 0) {
      total += item.price * item.quantity;
    }
  }
  return total;
};`;

  consistentFormattingOutput = `// Consistent spacing and indentation
// Follows ESLint/Prettier guidelines
// Easy to read and maintain
// Modern ES6 syntax with const/let`;

  dryPrincipleCode = `// BAD - Repetitive code (violates DRY)
class UserService {
  createUser(name, email) {
    if (!name || name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    if (!email || email.trim() === '') {
      throw new Error('Email cannot be empty');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
    // Create user logic
    console.log('Creating user...');
  }
  
  updateUser(name, email) {
    if (!name || name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    if (!email || email.trim() === '') {
      throw new Error('Email cannot be empty');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
    // Update user logic
    console.log('Updating user...');
  }
}

// GOOD - DRY principle (extract common logic)
class UserService {
  createUser(name, email) {
    this.validateUserInput(name, email);
    // Create user logic
    console.log('Creating user...');
  }
  
  updateUser(name, email) {
    this.validateUserInput(name, email);
    // Update user logic
    console.log('Updating user...');
  }
  
  validateUserInput(name, email) {
    if (!name?.trim()) {
      throw new Error('Name cannot be empty');
    }
    if (!email?.trim()) {
      throw new Error('Email cannot be empty');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
  }
}`;

  dryPrincipleOutput = `// Single source of truth for validation logic
// Changes only need to be made in one place
// Reduces bugs and maintenance overhead
// Code is more maintainable and testable
// Uses optional chaining (?.) for safer checks`;

  practiceCode = `// Practice: Refactor this messy code using clean code principles

// BAD CODE - Multiple violations
const calc = (x, y, z) => {
  if (x) {
    if (y > 0) {
      if (z !== null) {
        let r = x * 1.08 + y * 0.15;
        if (r > 100) {
          console.log("High value");
          return r;
        } else {
          console.log("Low value");
          return r;
        }
      }
    }
  }
  return 0;
};

// GOOD CODE - Clean refactored version
const TAX_RATE = 0.08;
const FEE_RATE = 0.15;
const HIGH_VALUE_THRESHOLD = 100;

const calculateTotalWithTaxAndFees = (baseAmount, feeAmount, discount) => {
  if (!isValidInput(baseAmount, feeAmount, discount)) {
    return 0;
  }
  
  const total = calculateTotal(baseAmount, feeAmount);
  logValueCategory(total);
  return total;
};

const isValidInput = (baseAmount, feeAmount, discount) => {
  return baseAmount && feeAmount > 0 && discount !== null;
};

const calculateTotal = (baseAmount, feeAmount) => {
  return baseAmount * (1 + TAX_RATE) + feeAmount * FEE_RATE;
};

const logValueCategory = (total) => {
  const category = total > HIGH_VALUE_THRESHOLD ? "High value" : "Low value";
  console.log(category);
};`;

  practiceOutput = `// Improvements made:
// ✅ Meaningful function and variable names
// ✅ Extracted constants for magic numbers
// ✅ Small, focused functions (single responsibility)
// ✅ Early return to avoid deep nesting
// ✅ DRY principle - no code duplication
// ✅ Clear separation of concerns`;

  languageAgnosticCode = `// BAD - Magic numbers and strings, no edge case handling
const processOrder = (items, userType) => {
  let total = 0;
  for (let item of items) {
    if (userType === "premium") {
      total += item.price * 0.9;  // Magic number
    } else {
      total += item.price;
    }
  }
  return total;
};

const user = { name: "John", orders: [] };
user.orders.push({ id: 1, total: 100 });  // Mutating object

// GOOD - Constants, enums, edge cases, immutability
const DISCOUNT_RATES = {
  PREMIUM: 0.1,
  REGULAR: 0.0
};

const USER_TYPES = {
  PREMIUM: 'premium',
  REGULAR: 'regular'
};

const processOrder = (items, userType) => {
  // Handle edge cases
  if (!items || items.length === 0) {
    return 0;
  }
  
  if (!Object.values(USER_TYPES).includes(userType)) {
    throw new Error(\`Invalid user type: \${userType}\`);
  }
  
  const discountRate = userType === USER_TYPES.PREMIUM 
    ? DISCOUNT_RATES.PREMIUM 
    : DISCOUNT_RATES.REGULAR;
  
  return items.reduce((total, item) => {
    // Handle edge case: invalid price
    if (!item || typeof item.price !== 'number' || item.price < 0) {
      return total;
    }
    return total + (item.price * (1 - discountRate));
  }, 0);
};

// Prefer immutability
const createUserWithOrder = (user, newOrder) => {
  // Return new object instead of mutating
  return {
    ...user,
    orders: [...user.orders, newOrder]
  };
};

// Self-documenting code
const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
};

const isValidEmail = (email) => {
  return email && 
         typeof email === 'string' && 
         email.includes('@') && 
         email.includes('.');
};

// Usage examples
const items = [
  { price: 100, name: 'Item 1' },
  { price: 50, name: 'Item 2' }
];

const regularTotal = processOrder(items, USER_TYPES.REGULAR);
const premiumTotal = processOrder(items, USER_TYPES.PREMIUM);

console.log('Regular total:', regularTotal);
console.log('Premium total:', premiumTotal);
console.log('Discount price:', calculateDiscountedPrice(100, 20));
console.log('Valid email:', isValidEmail('user@example.com'));`;

  languageAgnosticOutput = `Regular total: 150
Premium total: 135
Discount price: 80
Valid email: true`;

  failFastCode = `// BAD - Failing late, unclear errors
const processOrder = (orderData) => {
  let total = 0;
  for (let item of orderData.items) {
    total += item.price * item.quantity;
  }
  
  if (total > 1000) {
    // Error discovered late in process
    throw new Error('Order too large');
  }
  
  return total;
};

// GOOD - Fail fast with clear validation
const processOrder = (orderData) => {
  // Validate immediately
  if (!orderData) {
    throw new Error('Order data is required');
  }
  
  if (!orderData.items || orderData.items.length === 0) {
    throw new Error('Order must contain items');
  }
  
  if (!orderData.customerId) {
    throw new Error('Customer ID is required');
  }
  
  // Calculate total
  const total = orderData.items.reduce((sum, item) => {
    if (!item.price || item.price < 0) {
      throw new Error(\`Invalid price for item: \${item.name}\`);
    }
    if (!item.quantity || item.quantity < 1) {
      throw new Error(\`Invalid quantity for item: \${item.name}\`);
    }
    return sum + (item.price * item.quantity);
  }, 0);
  
  // Check business rules early
  if (total > 1000) {
    throw new Error('Order exceeds maximum allowed amount of $1000');
  }
  
  return {
    customerId: orderData.customerId,
    total: total,
    itemCount: orderData.items.length
  };
};

// Usage
const validOrder = {
  customerId: 'CUST123',
  items: [
    { name: 'Product A', price: 50, quantity: 2 },
    { name: 'Product B', price: 75, quantity: 1 }
  ]
};

const result = processOrder(validOrder);
console.log('Order processed successfully');
console.log('Total:', result.total);`;

  solidSrpCode = `// BAD - Multiple responsibilities in one class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  save() {
    // Database responsibility
    console.log('Saving to database...');
  }
  
  sendEmail() {
    // Email responsibility
    console.log('Sending email...');
  }
}

// GOOD - Single Responsibility Principle
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    console.log(\`Saving user: \${user.name}\`);
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    console.log(\`Sending email to: \${user.email}\`);
  }
}

// Usage
const user = new User('Alice', 'alice@example.com');
const userRepo = new UserRepository();
const emailService = new EmailService();

userRepo.save(user);
emailService.sendWelcomeEmail(user);`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Clean Code Principles - My Notes');
  }
}