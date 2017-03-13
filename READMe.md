README for Project LinkShare by Kurt Wyckoff March 12, 2017

LinkSharing API:

To register:

POST localhost:8000/users

Parameters in the body of request:

* username - String
* email - String
* password - String

To login:

POST localhost:8000/login

Parameters in the body of request:

* email - String
* password - String

To authenticate:

POST localhost:8000/authenticate

Parameters in the headers section!:

access-token    value  //token is supplied upon successful login
