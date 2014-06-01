#Kepler2: Structure Community Projects

##Table of contents

1. Overview
2. Objects
3. Installation
4. Usage
5. Development
6. License and Contributions

##Overview
Kepler2 is an evolution of Kepler. An open source Research and Data Collection portal. Kepler2 is currently it's working name. The platform will be API centric allowing for developers to build their own consumers. However, it will include visual tools as well.

##Objects

###Users
```
  {
    "class": ["user"],
    "properties": {
      "firstName":"Matthew",
      "lastName":"Dobson",
      "title":"Engineer",
      "username":"mdobson"
    },
    "entities": [
    ],
    "actions":[
    ],
    "links": [
      { "rel":["self"], "href":"http://kepler.io/users/mdobson" },
      { "rel":["index"], "href":"http://kepler.io/" }
    ]
  }
```

###Forms
```
  {
    "class": ["form"],
    "properties": {

    },
    "entities": [
    
    ],
    "actions":[
    
    ],
    "links": [

    ]
  }
```
###Questions
```
  {
    "class": ["question"],
    "properties": {

    },
    "entities": [
    
    ],
    "actions":[
    
    ],
    "links": [

    ]
  }
```
###Responses
```
  {
    "class": ["response"],
    "properties": {

    },
    "entities": [
    
    ],
    "actions":[
    
    ],
    "links": [

    ]
  }
```

##Installation

`npm install <>`

##Usage

TBD

##Development

Currently it's in the design phase.

##License and Contributions

###Contributions

Please just create a new branch and issue a pull request with a descriptive message. 

###License

Copyright 2014 Matthew Dobson and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
