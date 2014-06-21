#DB Design Documentation

The initial data store for kepler2 will be postgres. That way it's easy to get up,
and running with awesome developer tools like [Heroku](https://heroku.com/). We will
use grunt for registering data migration tasks.

A future feature will also include compatibility with Max Ogden's [Dat Tool](https://github.com/maxogden/dat).
This will enable adopters to export and share data between projects and instances of kepler2 easily.

##Data Model

###Table: Users

Users have a many to many relationship with projects. A user can create or belong to multiple projects.

Column | Type | Description
------ | ---- | -----------
Id | Int | Users incremented id
UUID | UUID | Users unique identifier
FirstName | String | Users first name
LastName | String | Users last name
Username | String | Username in system
Password | String | Password into the system


###Table: Projects

Projects are an overall bucket for storing information on data collection. It should have a high level relevance
to all flows and forms stored in it.

Column | Type | Description
------ | ---- | -----------
Id | Int | Projects incremented id
UUID | UUID | Projects unique identifier
ProjectName | String | Name of the project

###Table: Roles

This holds a mapping of users, projects, and roles associated with that particular user for a project.

Column | Type | Description
------ | ---- | -----------
UserId | Int | Id of user
ProjectId | Int | Id of project
RoleId | Int | Role of user within project

Enum values

Value | Meaning
_____ | _______
1     | Admin (Read, Write, Add User, Delete User)
2     | Entry (Read, Write)
3     | Viewer (Read)

###Table: Flows

Flows are decision trees that allow someone to define a clear path through data collection. They contain multiple forms to present to the user. These
can dynamically change based on user set rules.

Column | Type | Description
------ | ---- | -----------
Id     | Int  | Id of the particular flow
UUID   | UUID | Unique Identifier of the flow
FlowName | String | Name of the particular flow

###Table: Forms

Forms are containers for questions. They have a 1 to many relationship with questions. A general rule of thumb is that each form should have questions
that are related to it.

Column | Type | Description
------ | ---- | -----------
Id     | Int  | Id of the particular form
UUID   | UUID | Unique identifier of the form
FlowId | Int  | Id of parent flow of the form
FormName | String | Name of form

###Table: Questions

Questions belong in a form. They have a 1 to 1 relationship with forms. A question instance can only exist in one form.

Column | Type | Description
------ | ---- | -----------
Id     | Int  | Id of the particular question
UUID   | UUID | Unique identifier of the particular question
QuestionName | String | Name of the question
DataType | String | HTML5 based Data type for the question

###Table: Actions

Actions are recordings of events that take place in the system. Any time the database is altered we'll record an action for auditing purposes.

Column | Type | Description
------ | ---- | -----------
Id     | Int  | Id of the particular Action
Occured| DateTime | DateTime of when action occurred
UserId | Int | UserId of performed Action
Desc | Text | Description of action performed


###Table: Rules

Rules determine how to display forms in a particular flow

Column | Type | Description
------ | ---- | -----------
Id     | Int  | Id of the particular Rule
UUID   | UUID | Unique Identifier of particular rule
Predicate | String | Predicate to be executed on flow
ParentFlowId | Int | Parent flow id. What the predicate will be executed on.
SuccessFlowId | Int | If predicate returns true. Display this flow next.
FailureFlowId | Int | If predicate returns false. Display this flow next.
