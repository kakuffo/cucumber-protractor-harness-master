# RUN Test
npm install -g webdriver-manager

webdriver-manager update

webdriver-manager start

protractor cucumber.conf.js 

# INSTRUCTIONS
Deliver a working test framework that aims towards "best practices". If you feel that there may be technical debt, future improvements, or any other comments you'd like us to know about then mention them in your README.
Preferably, the results will be published to a public GitHub repository, but a ZIP is also fine.
All work should be your own.

# TECH
Java, Python, JavaScript, Ruby, Capybara, RSpec, or whatever you like plus any other supporting gems/libraries you think you need.

# WHAT WE LIKE
Simplicity – your work should do what it needs to do in the most effective way (readability counts!)
Extendibility – anyone should be able to pick up from where you've written and add more tests (i.e. page object model for UI tests)
 
# WHAT WE DON'T LIKE
Complexity – don't show off how smart you are just to prove a point
Bloat – don't keep unnecessary methods, commented out code, or stuff you don't think we need to see in your work

# TEST 1:
Navigate to https://the-internet.herokuapp.com/
Click Challenging DOM
Confirm that the red button label changes after it's clicked
 
# TEST 2:
Navigate to https://the-internet.herokuapp.com/
Click Dynamically Loaded Page Elements and click Example 2: Element rendered after the fact
Confirm 'Hello World!' is rendered after the loading bar disappears

# TEST 3:
POST to the http://dummy.restapiexample.com/ create route and verify you receive a response that indicates that a user was made.

# BONUS:
Do you have a tech blog or any pre-existing, public projects you'd like to show us? Please include links to them in your README. Also feel free to include tests for other pages of "the-internet" or the dummy rest API example routes you feel would support your application.
