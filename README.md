Hello there! My name is David and I'm the creator of this full stack image board. This took me a total of 3 exhausting days. For the front end, I used React and for the back end, express. I also used Insomnia for testing API.

Here is a list of all the packages I used:
Front End:

**create-react-app**
creates your basic react app

**react-hook-form**
react hook form validation with no need for onChange handler for input fields

**@hookform/error-message**
easily handles error messages for form

Back End:

**express**
flexible back end framework

**cors**
connect/express middleware

**body-parser**
body parsing middleware

**joi**
language schema and data validation

**monk**
mongodb middleware

**morgan**
HTTP request logger middleware

**mongodb**
mongodb driver for node.js

Here is a detailed timeline of what I did:
1. npm init
2. add express body-parser cors morgan
3. connect to port

4. create-react-app
5. added CSS

6. add monk joi
7. create schema with validation
8. create route to add message to db
9. username, subject, message, imageURL, creation date
10. insert into db
11. respond
12. use get all to show all messages

13. implement get http request by using insomnia to test api
14. then map all messages using api
15. on submit, reload page 
16. implement react hook form and hook form error messages to display messages
17. deploy

Thank you for visiting for reading! For anyone beginning, try not to copy and paste code and try to do it on your own first.