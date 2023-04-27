DB schema

User modal:
- id
- email -- unique
- full name
- pen name instead of username
- password
- role
- isEmailVerified
- photo url
- categories -- list of category ids
- followers list of ids
- following list of ids

Category modal:
- id
- name


Book modal:
- book title
- book author id
- book cover image url
- page no.
- page ids
- type -- private/public
- category id


Page modal:
- page id
- book id
- page no.
- html content -- content will have s3 media urls
- media ids


Page media modal:
- id
- s3 url
- media size -- full, portrait, square