Welcome to your second weekend challenge!

I created a new JSON data file, inside it, you will find an array of objects. Each object, is each one of you!

http://devjana.net/support/tau_students.json

You first task is to make an AJAX call from the client side app.js, using an .ajax method and access the json data through the url above. When successful, it should bring the data back down for use. You will then need to combine that with what you have learned about parsing objects and arrays to complete the challenge.



JSON/Ajax reference: https://github.com/devjanaprime/tauAjaxJsonInClass

TODO: represent one person on the DOM [X]
TODO: Prev and Next Buttons that show the information for the appropriate person [X]
TODO: Display the number of people and which is currently being viewed [X]


What I would like to see on the DOM, is one person at a time represented - the info for the first person in the json data. One the screen should also be Prev and Next buttons, that when pressed, show the information for the appropriate person. These should wrap - prev when on the first person should wrap around to show the last person and vice versa.

Also on the DOM should be a display showing the number of people and which is being currently viewed (eg. 2/20)

When a person is displayed, show their name (first & last) and their info. Only one person should be shown at any given time.
