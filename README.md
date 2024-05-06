# Lab 5 - Starter

By Kristhian Ortiz.

## Check Your Understanding
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
I would not use a unit test to test the "message" feature of a messaging application because it envolves me, the receiver, and everything in between. Because a "message" feature has many moving parts that are not local, I would not test this with a unit test. What I can test, though, is how my local device processes the message before being sent (i.e. did it build correctly, was any encoding miscalculated, etc).

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, this feature runs locally and it depends on the user's input, so it's perfect for unit testing. 



