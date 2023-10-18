# Subscrption Management
This project is a web application that provides a dashboard for movies subscrption, as well as signup and login functionality. 


## API documentation

_http://[site]:[port]/api/endpoints_

## Endpoints: 
### /user
* *user/signup* [POST]
   - Sign up as a new user
   - Required json body params - ‘email’, ‘password’
* *user/login* [POST]
   - Login with existing creds
   - Required json body params - ‘email’, ‘password’

### /sub
* */sub/email* [GET] 
  - Get subscription by email



### NOTE: 
* API requires authorization bearer token to be provided in headers, which is generated after successful login and stored in localStorage.

* Create a file db.js in /backend/config/
    ```console
    // db.js
    module.exports = '{URL}'; 
    ```


## Steps to get Token
* Signup
    - Test email : abcde@gmail.com
    - Test password : 12345
    <p align="center"><img src="https://github.com/PremKarira/Subscription_Stripe/blob/main/images/signup.png?raw=true"></p><br>

* Login
    - using test email and password
    <p align="center"><img src="https://github.com/PremKarira/Subscription_Stripe/blob/main/images/login.png?raw=true"></p><br>

* View Token in browser storage
    - in form of key value pair
    <p align="center"><img src=""></p><br>

## Dashboard Walkthrough
* New Subscription
    - Provides four different types: 
    - Basic (monthly/yearly) and Premium (monthly/yearly)
    <p align="center"><img src=""></p><br>
