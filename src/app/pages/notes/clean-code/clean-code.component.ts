import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-clean-code',
  templateUrl: './clean-code.component.html'
})
export class CleanCodeComponent implements OnInit {

  meaningfulNamesBad = `const d = 30;              // What is d?
const u = getUser();       // What kind of user?
const calc = (x, y) => {}; // What does this calculate?`;

  meaningfulNamesGood = `const daysInMonth = 30;
const currentUser = getAuthenticatedUser();
const calculateMonthlySalary = (baseSalary, bonus) => {
  return baseSalary + bonus;
};`;

  smallFunctionsBad = `const processUserData = (userData) => {
  // Validate data (20 lines)
  // Transform data (15 lines)
  // Save to database (10 lines)
  // Send email (8 lines)
  // Log activity (5 lines)
  // 58 lines total!
};`;

  smallFunctionsGood = `const validateUserData = (userData) => {
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

  avoidNestingBad = `const processOrder = (order) => {
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
};`;

  avoidNestingGood = `const processOrder = (order) => {
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

  singleResponsibilityBad = `class User {
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
}`;

  singleResponsibilityGood = `class User {
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

  kissPrincipleBad = `class AdvancedCalculatorWithMultipleDesignPatterns {
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
const result = calc.performComplexCalculation(5, 3, "add");`;

  kissPrincipleGood = `class SimpleCalculator {
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
const product = calculator.multiply(4, 6);`;

  yagniPrincipleBad = `class UserManager {
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
}`;

  yagniPrincipleGood = `class SimpleUserManager {
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
}`;

  readabilityBad = `const u = users.filter(u => u.a && u.s === 'A').map(u => ({ ...u, n: u.fn + ' ' + u.ln }));
const r = u.reduce((a, c) => a + c.sal, 0) / u.length;

// One-liner that's hard to understand
const x = arr.reduce((a,b,i,ar) => i === ar.length-1 ? (a+b)/ar.length : a+b, 0);`;

  readabilityGood = `const activeUsers = users.filter(user => {
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
}`;

  consistencyBad = `class userManager {
  AddUser(userData) { // PascalCase method
    this.user_list.push(userData); // snake_case property
  }
  
  get_user_count() { // snake_case method
    return this.userList.length; // camelCase property
  }
  
  FindUserByEmail(email_address) { // Mixed naming
    return this.Users.find(u => u.EmailAddress === email_address);
  }
}`;

  consistencyGood = `class UserManager {
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
}`;

  explicitBad = `function processData(data) {
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
}`;

  explicitGood = `function calculateDoubledValues(data) {
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
}`;

  failFastBad = `const processOrder = (orderData) => {
  let total = 0;
  for (let item of orderData.items) {
    total += item.price * item.quantity;
  }
  
  if (total > 1000) {
    // Error discovered late in process
    throw new Error('Order too large');
  }
  
  return total;
};`;

  failFastGood = `const processOrder = (orderData) => {
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
};`;

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

  errorHandlingBad = `const divideNumbers = (a, b) => {
  return a / b;  // What if b is 0?
};

const readFile = (filename) => {
  const fs = require('fs');
  return fs.readFileSync(filename, 'utf8');  // What if file doesn't exist?
};`;

  errorHandlingGood = `const divideNumbers = (a, b) => {
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

  magicNumbersBad = `const calculateTax = (salary) => {
  return salary * 0.18;  // What is 0.18?
};

const isAdult = (age) => {
  return age >= 18;  // Why 18?
};

const processPayment = (amount) => {
  return amount * 1.05;  // What is 1.05?
};`;

  magicNumbersGood = `const TAX_RATE = 0.18;
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

  consistentFormattingBad = `const calculateTotal=(items)=>{
  let total=0;
  for(let item of items){
    if(item.price>0){
      total+=item.price*item.quantity;
    }
  }
  return total;
};`;

  consistentFormattingGood = `const calculateTotal = (items) => {
  let total = 0;
  for (const item of items) {
    if (item.price > 0) {
      total += item.price * item.quantity;
    }
  }
  return total;
};`;

  dryPrincipleBad = `class UserService {
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
}`;

  dryPrincipleGood = `class UserService {
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

  languageAgnosticBad = `const processOrder = (items, userType) => {
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
user.orders.push({ id: 1, total: 100 });  // Mutating object`;

  languageAgnosticGood = `const DISCOUNT_RATES = {
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
}`;

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

  solidSrpBadCode = `class User {
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
}`;

  solidSrpGoodCode = `class User {
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
}`;

  solidOcpBad = `class Discount {
  calculate(type, amount) {
    if (type === 'student') {
      return amount * 0.8;
    } else if (type === 'senior') {
      return amount * 0.7;
    }
    return amount;
  }
}`;

  solidOcpGood = `class Discount {
  calculate(amount) {
    return amount;
  }
}

class StudentDiscount extends Discount {
  calculate(amount) {
    return amount * 0.8;
  }
}

class SeniorDiscount extends Discount {
  calculate(amount) {
    return amount * 0.7;
  }
}`;

  solidLspBad = `class Bird {
  fly() {
    console.log('Flying...');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Cannot fly!');
  }
}`;

  solidLspGood = `class Bird {
  move() {
    console.log('Moving...');
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log('Flying...');
  }
}

class Penguin extends Bird {
  swim() {
    console.log('Swimming...');
  }
}`;

  solidIspBad = `class Worker {
  work() {}
  eat() {}
  sleep() {}
}

class Robot extends Worker {
  work() {
    console.log('Working...');
  }
  eat() {
    throw new Error('Robots do not eat');
  }
  sleep() {
    throw new Error('Robots do not sleep');
  }
}`;

  solidIspGood = `class Workable {
  work() {}
}

class Human extends Workable {
  work() {
    console.log('Working...');
  }
  eat() {
    console.log('Eating...');
  }
}

class Robot extends Workable {
  work() {
    console.log('Working...');
  }
}`;

  solidDipBad = `class MySQLDatabase {
  connect() {
    console.log('MySQL connected');
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase();
  }
  
  getUser() {
    this.db.connect();
  }
}`;

  solidDipGood = `class Database {
  connect() {}
}

class MySQLDatabase extends Database {
  connect() {
    console.log('MySQL connected');
  }
}

class UserService {
  constructor(database) {
    this.db = database;
  }
  
  getUser() {
    this.db.connect();
  }
}`;

  solidPrinciples = [
    {label: 'S - Single Responsibility', text: 'One reason to change'},
    {label: 'O - Open/Closed', text: 'Open for extension, closed for modification'},
    {label: 'L - Liskov Substitution', text: 'Subclasses must be replaceable'},
    {label: 'I - Interface Segregation', text: 'Many small interfaces vs one large'},
    {label: 'D - Dependency Inversion', text: 'Depend on abstractions'}
  ];

  solidBenefits = [
    {label: '', text: 'Each class has one reason to change'},
    {label: '', text: 'Easy to extend without modifying existing code'},
    {label: '', text: 'Better testability and maintainability'},
    {label: '', text: 'Loose coupling between components'}
  ];

  universalPractices = [
    {label: 'Avoid Magic Numbers and Strings', text: 'Use named constants for all literal values'},
    {label: 'Use Constants and Enums', text: 'Define meaningful constants instead of raw values'},
    {label: 'Handle Edge Cases', text: 'Consider null, empty, boundary, and error conditions'},
    {label: 'Prefer Immutability', text: 'Use immutable objects when possible to prevent bugs'},
    {label: 'Write Self-Documenting Code', text: 'Code should explain itself without comments'}
  ];

  commentGuidelines = [
    {label: 'Explain Why', text: 'Not what the code does, but why it exists'},
    {label: 'Avoid Obvious', text: "Don't comment self-explanatory code"},
    {label: 'Keep Updated', text: 'Update comments when code changes'},
    {label: 'Use TODO/FIXME', text: 'Mark temporary solutions'},
    {label: 'Document Complex Logic', text: 'Explain algorithms and business rules'}
  ];

  testingPractices = [
    {label: 'Unit Tests', text: 'Test individual functions in isolation'},
    {label: 'Test Coverage', text: 'Aim for 80%+ code coverage'},
    {label: 'TDD', text: 'Write tests before implementation'},
    {label: 'Arrange-Act-Assert', text: 'Structure tests clearly'},
    {label: 'Test Edge Cases', text: 'Include boundary conditions'},
    {label: 'Fast Tests', text: 'Keep tests quick to run'}
  ];

  reviewChecklist = [
    {label: 'Functionality', text: 'Does it work as intended?'},
    {label: 'Readability', text: 'Is the code easy to understand?'},
    {label: 'Tests', text: 'Are there adequate tests?'},
    {label: 'Performance', text: 'Any obvious bottlenecks?'},
    {label: 'Security', text: 'Any vulnerabilities?'},
    {label: 'Standards', text: 'Follows team conventions?'}
  ];

  refactoringTechniques = [
    {label: 'Extract Method', text: 'Break large functions into smaller ones'},
    {label: 'Rename', text: 'Improve variable and function names'},
    {label: 'Extract Variable', text: 'Name complex expressions'},
    {label: 'Inline', text: 'Remove unnecessary abstractions'},
    {label: 'Move Method', text: 'Relocate to appropriate class'},
    {label: 'Replace Conditional', text: 'Use polymorphism instead'}
  ];

  codeSmells = [
    {label: 'Long Methods', text: 'Functions over 20 lines'},
    {label: 'Large Classes', text: 'Classes with too many responsibilities'},
    {label: 'Duplicate Code', text: 'Copy-pasted logic'},
    {label: 'Dead Code', text: 'Unused variables and functions'},
    {label: 'God Object', text: 'Class that knows/does too much'},
    {label: 'Primitive Obsession', text: 'Using primitives instead of objects'},
    {label: 'Long Parameter List', text: 'More than 3-4 parameters'}
  ];

  securityEssentials = [
    {label: 'Input Validation', text: 'Never trust user input'},
    {label: 'SQL Injection', text: 'Use parameterized queries'},
    {label: 'XSS Prevention', text: 'Sanitize output'},
    {label: 'Authentication', text: 'Use strong password hashing'},
    {label: 'Authorization', text: 'Check permissions properly'},
    {label: 'Secrets', text: 'Never hardcode credentials'},
    {label: 'HTTPS', text: 'Always use encrypted connections'}
  ];

  performanceTips = [
    {label: 'Premature Optimization', text: 'Avoid until proven necessary'},
    {label: 'Measure First', text: 'Profile before optimizing'},
    {label: 'Big O Notation', text: 'Understand algorithm complexity'},
    {label: 'Caching', text: 'Cache expensive operations'},
    {label: 'Database', text: 'Use indexes and optimize queries'},
    {label: 'Memory', text: 'Avoid memory leaks'}
  ];

  documentationTypes = [
    {label: 'README', text: 'Project overview and setup instructions'},
    {label: 'API Docs', text: 'Document public interfaces'},
    {label: 'Inline Docs', text: 'Docstrings for functions/classes'},
    {label: 'Architecture', text: 'High-level system design'},
    {label: 'Changelog', text: 'Track version changes'},
    {label: 'Examples', text: 'Provide usage examples'}
  ];

  gitGuidelines = [
    {label: 'Commit Messages', text: 'Clear, descriptive messages'},
    {label: 'Small Commits', text: 'One logical change per commit'},
    {label: 'Branching', text: 'Use feature branches'},
    {label: 'Pull Requests', text: 'Review before merging'},
    {label: 'Rebase', text: 'Keep history clean'},
    {label: '.gitignore', text: 'Exclude generated files'}
  ];

  loggingGuidelines = [
    {label: 'Log Levels', text: 'Use DEBUG, INFO, WARN, ERROR appropriately'},
    {label: 'Structured Logs', text: 'Use JSON format for parsing'},
    {label: 'Context', text: 'Include relevant information (user ID, request ID)'},
    {label: 'No Sensitive Data', text: "Don't log passwords or tokens"},
    {label: 'Performance', text: 'Avoid excessive logging in loops'},
    {label: 'Rotation', text: 'Implement log rotation policies'}
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Clean Code Principles - My Notes');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}