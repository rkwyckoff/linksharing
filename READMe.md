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
access-token:  value: (token supplied at login)


To create a link (must be logged in):

POST localhost:8000/link

Parameters required in the headers section!:
access-token:  value: (token supplied at login)

Required in the body:
title:    string
contents:   string  


To post a comment:

POST localhost:8000/link/:id/comment
(Required in the url: substitute link_id for :id)

Parameters required in the headers section!:
access-token:  value: (token supplied at login)
Required in the body:
comment:    value:

To get a list of all links by most recent and descending:

GET localhost:8000/link


To get a list of all comments by link id:

GET localhost:8000/link/:id/comment
(Required in the url: substitute link_id for :id)
