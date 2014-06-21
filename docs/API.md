#API Design Documentation

The API will be based on the [Siren Hypermedia Format](https://github.com/kevinswiber/siren). This will
allow for optimal decoupling between clients and servers, and for easily modeling of workflows in a
state machine like environment.

##Objects

###Users

The users object will contain relevant personal details as granted by the API. It will also contain
links to each project in the links category. The actions section will contain standard user interactions.

```json
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

```json
  {
    "class": ["project"],
    "properties": {
      "name":"Community Research",
    },
    "entities": [
      {
        "class":["flow"],
        "rel":["item"],
        "properties": {
          "name":"Community Garden Questions"
        },
        "links": [
          {
            "rel":["self"],
            "href":"http://kepler.io/flows/1"
          }
        ]
      },
      {
        "class":["flow"],
        "rel":["item"],
        "properties": {
          "name":"Community Garden Self-Assesment"
        },
        "links": [
          {
            "rel":["self"],
            "href":"http://kepler.io/flows/2"
          }
        ]
      },
      {
        "class":["flow"],
        "rel":["item"],
        "properties": {
          "name":"Community Garden Advocates"
        },
        "links": [
          {
            "rel":["self"],
            "href":"http://kepler.io/flows/3"
          }
        ]
      }
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

```json
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
      "rel": ["item"],
      "links": {
        "rel": ["self"],
        "href": "http://kepler.io/forms/1"
      }
    },
    {
      "class": ["form"],
      "rel": ["item"],
      "links": {
        "rel": ["self"],
        "href": "http://kepler.io/forms/2"
      }
    },
    {
      "class": ["form"],
      "rel": ["item"],
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

```json
  {
    "class": ["form"],
    "properties": {
      "name":"Community Garden Advocates Form",
      "description":"Collect information on advocates for community gardening.",
      "editable": true
    },
    "entities": [
      {
        "class":["question"],
        "rel":["item"],
        "properties":{
          "name":"What's their name?",
          "type":"text",
          "required":true
        },
        "links":[
          {
            "rel":["self"],
            "href":"http://kepler.io/questions/1"
          }
        ]
      }
    ],
    "actions":[
      {
        "name":"add-questions",
        "title":"Add a question to the form",
        "method":"PATCH",
        "href":"http://kepler.io/forms/3",
        "type":"application/json",
        "fields": [
          {
            "name":"name",
            "type":"text"
          },
          {
            "name":"type",
            "type":"radio"
          },
          {
            "name":"required",
            "type":"checkbox"
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
        "rel":["index"],
        "href":"http://kepler.io/forms"
      },
      {
        "rel":["self"],
        "href":"http://kepler.io/forms/3"
      },
      {
        "rel":["up"],
        "href":"http://kepler.io/flows/3"
      }
    ]
  }
```

###Questions

Individual questions will be the units of data collection. Each will affect the next step in the flow as defined by the user.

```json
  {
    "class": ["question"],
    "properties":{
      "name":"What's their name?",
      "type":"text",
      "required":true
    },
    "entities": [

    ],
    "actions":[
      {
        "name":"answer-question",
        "title":"Answer Question",
        "method":"POST",
        "href":"http://kepler.io/questions/1",
        "type":"application/json",
        "fields": [
          {
            "name":"answer",
            "type":"text"
          }
        ]
      }
    ],
    "links": [
      {
        "rel":["up"],
        "href":"http://kepler.io/forms/3"
      },
      {
        "rel":["self"],
        "href":"http://kepler.io/questions/1"
      },
      {
        "rel":["index"],
        "href":"http://kepler.io/questions"
      }
    ]
  }
```

###Responses

Responses to questions and forms will be dynamically generated based on data collected. This could include unit conversions
or internationalization. These will have clear relation to the particular questions they answer.

Design TBD

```json
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
