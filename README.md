# NY-Phil Basic Database Front-End

## General Notes
1. Browser App displays buttons that direct straightaway to the API route itself. 
1. Composer, Season, Conductor, or Orchestra buttons, when clicked, display all programs with the selected item. 
1. Create allows one to paste a JSON tyoe object that matches the schema necessary, and appends the data-set. 
1. Read button simply displays the whole set. More specific read functionality comes from the other buttons. 
1. Update by Id button takes in an Id, and allows the user to paste necessary updates in the Prompt. 
1. Delete removes a program based on the Id in the prompt. 

## Future plans
1. Each selection should display associated buttons. 
 - for example if I click Pierre Boulez it should return all the buttons that match the performances associated with Pierre. 
1. Search functionality needs to be added, as well as cross sectional search. 
 - Let's say I want to find a program of Leonard Bernstein conducting Beethoven in a season between 1975 and 1980. 
1. Add soloist, work title, and instrument buttons/search. 

## Dream Plans
1. Use this database to create an app that allows musicians/anyone to keep a database of events. 
 - properties include not only metaData (date, time, personnel, etc.) but also actual content (notes, PDFs, audio, video, etc.)
 - the events could then be revisited with all necessary materials at hand. 
2. I'd like to make this app, and all future apps to be accessible for use with screen readers seamlessly. 