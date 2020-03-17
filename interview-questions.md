# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
  
sightings is the foreign key. the foreign key would be part of the animal model.

  Researched answer:
  
sightings is the foreign key. the foreign key would be part of the animal model.



2. Which routes must always be passed params and why?

  Your answer:
strong params.
  Researched answer:
strong params because the id indicates what information the page displays.

3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:
get '/main/:guess'=> 'main#game'


4. Name three rails generator commands. What is created by each?

  Your answer:
  
resource, model, migration.

model generates a model which houses paramaters & instances.
migration merges new information into the model/resource.
resource generates model & routes.

  Researched answer:
  
resource, model, migration

resource generates a routes, model, & controller file.
model generates a model.
migration merges new info into the model.
5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   gets information from the model users

/users/1      method="GET"   gets information from the model users with an id of 1

/users/new    method="GET"   goes to a pages where you can add new users

/users/       method="POST"   updates the users

/users/1      method="PUT"    posts the changes

/users/1      method="DELETE" deletes (destroys) a user
