#Kepler2: Structure Community Projects

##Current Phase: API Design

##Table of contents

1. Overview
2. Goals
3. Objects
4. Installation
5. Usage
6. Development
7. License and Contributions

##Overview

Kepler2 is an evolution of Kepler. An open source Research and Data Collection portal. Kepler2 is currently it's working name. The platform will be API centric allowing for developers to build their own consumers. However, it will include visual tools as well.

##Goals

The goal of Kepler2 is to create a sustainable community of API powered research projects to benefit civic hackers, health researchers, academia, and governments.
This platform will be open and honest from day one and encourage contributions from any use case. The platform itself aims to use hypermedia to create robust client
and server interactions with minimal need for constant redeployments. This project will also look to run on minimal amounts of hardware to make adoption and maintenance trivial
for any new projects. It will also look to expose an API for your data after you have collected it.

##Objects

###Users

The users object will contain relevant personal details as granted by the API. It will also contain
links to each project in the links category. The actions section will contain standard user interactions.

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
      {
        "rel":["self"],
        "href":"http://kepler.io/users/mdobson"
      },
      {
        "rel":["index"],
        "href":"http://kepler.io/"
      },
      {
        "title":"Community Analysis",
        "rel":["http://rels.kepler.io/project"],
        "href":"http://kepler.io/projects/1"
      }
    ]
  }
```

###Projects

Projects are simply groupings on users, flows, forms, etc. Essentially a project is a general repository for your research.

```
  {
    "class": ["project"],
    "properties": {
      "name":"Community Research",
    },
    "entities": [
    ],
    "actions":[
      {
        "name":"create-flow",
        "title":"Create Flow",
        "method":"POST",
        "href":"http://kepler.io/projects/1/flows",
        "type":"application/json",
        "fields": [
          {
            "name":"name",
            "type": "text"
          },
          {
            "name":"description",
            "type":"text"
          }
        ]
      }
    ],
    "links": [
      { "rel":["self"], "href":"http://kepler.io/projects/1" }
      { "rel":["index"], "href":"http://kepler.io/" },
    ]
  }
```


###Flows

Flows will be the central work horse of the new Kepler system. It will allow users to define conditional pieces of logic
that will allow them to essentially create decision trees when collecting their data. Flows will be dynamically updated based on the
data collected.

Think of flows as if they are decision trees. Multiple paths can be traversed based on the answers given.

```
{
  "class": ["flow"],
  "properties": {
    "name":"Community Garden Questions",
    "Description":"Questions about your local community garden."
    "editable":true
  },
  "entities": [
    {
      "class": ["form"],
      "rel": ["item", "http://rels.kepler.io/form"],
      "links": {
        "rel": ["self"],
        "href": "http://kepler.io/forms/1"
      }
    },
    {
      "class": ["form"],
      "rel": ["item", "http://rels.kepler.io/form"],
      "links": {
        "rel": ["self"],
        "href": "http://kepler.io/forms/2"
      }
    },
    {
      "class": ["form"],
      "rel": ["item", "http://rels.kepler.io/form"],
      "links": {
        "rel": ["self"],
        "href": "http://kepler.io/forms/3"
      }
    },
  ],
  "actions":[
    {
      "name":"create-form",
      "title":"Create Form",
      "method":"POST",
      "href":"http://kepler.io/projects/forms",
      "type":"application/json",
      "fields": [
        {
          "name":"name",
          "type": "text"
        },
        {
          "name":"description",
          "type":"text"
        },
        {
          "name":"parent"
          "type":"hidden"
          "value":"http://kepler.io/flows/1"
        }
      ]
    },
    {
      "name":"disable-editing",
      "title":"Disable Editing",
      "method":"PATCH",
      "href":"http://kepler.io/flows/1",
      "type":"application/json",
      "fields": [
        {
          "name":"editable",
          "type":"hidden",
          "value":false
        }
      ]
    }
  ],
  "links": [
    {
      "rel": ["self"],
      "href": "http://kepler.io/flows/1"
    },
    {
      "rel": ["index"],
      "href": "http://kepler.io/flows/"
    }
  ]
}

```

###Forms

Forms will be steps in a flow of questions. Each form presented will be dynamically generated based on responses collected before it.

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

Individual questions will be the units of data collection. Each will affect the next step in the flow as defined by the user.

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

Responses to questions and forms will be dynamically generated based on data collected. This could include unit conversions
or internationalization. These will have clear relation to the particular questions they answer.

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
