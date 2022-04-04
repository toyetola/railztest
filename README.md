**To run the file:**

- run *npm install* in terminal to install dependencies
- create a ```.env``` file in the root folder of the project. Paste the API key as follow:
```
GOOGLE_API_KEY='YOUR_API_KEY'
```
- run ```npm start``` to run the application

```Application RUNs http://locahost:3000 by default```
- make a ```POST``` request with postman to ```/searchAddress``` with the following request json data:
```
{
    "street":"1600 Amphitheatre Parkway",
    "city":"Mountain View",
    "state":"California",
    "country":"United State"
}
```

Test is in /test directory uses mocha and chai to make request and asset responses