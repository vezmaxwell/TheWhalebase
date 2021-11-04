# **The WhaleBase**

**Technologies Used**

-   HTML 
-   CSS
-  Sass
-   JavaScript 
-   React
-   Python
-   Django
-   Yarn
-   Git
-   GitHub
-   Google fonts
- Procreate

**Overview**

The aim of The WhaleBase was to create a full stack web application using Python/Django for the backend and React JS for the frontend. I decided to create a whale database that would access my api and display information about certain whales, as well as allow users to post blogs.

<img width="1680" alt="Screenshot 2021-11-04 at 21 01 24" src="https://user-images.githubusercontent.com/81028718/140419439-fe4feca1-736d-4b93-85c8-937c08904191.png">

**Day 1 - Planning**
The first day was spent planning. I knew I wanted to make a website that contained information about whales, so I needed to plan what my models would look like in the backend of the project. I also needed to come up with an idea and plan for implementing authentication, and decided to go with allowing users to login and post blogs. They would also be able to edit their blog and delete, making use of put, post and delete requests via my api.

<img width="791" alt="Screenshot 2021-11-04 at 21 10 37" src="https://user-images.githubusercontent.com/81028718/140420581-50cb9d90-f0a4-4d8b-8855-418f802a4a68.png">

**Day 2 - 3**

The coding began! The first 2 days were focused on the python/django backend. I mapped out the models for the whale information and the blogs. The routes were also coded including which the user needed to be logged in for to access, such as deleting, posting and editing a blog.

<img width="654" alt="Screenshot 2021-11-04 at 21 11 26" src="https://user-images.githubusercontent.com/81028718/140420686-771631f0-7328-40e4-8c6d-43b9c3e0ba79.png">

**Day 4**

I began front end using react, diving into connecting the secure route and authentication. I made a simple homepage and navbar component and then focused on allowing a user to sign up and login, creating forms for the both of these. I also added in error messages by saving a trigger as a use state, to pop up if the user had input some incorrect information.

    const [ errors, setErrors ] =  useState({
	    password: { message: '' }    
    })
    
   
    const [ triggerError, setTrigger ] =  useState(false)

...

    } catch (error) {    
	    console.log(error)    
	    setTrigger(true)    
	    if (error.response.errors) setErrors(error.response.errors)    
		    console.log(triggerError)    
	    }    
    }

...

    {    
	    triggerError  ?    
		    errors.password  &&  <p  className="errors">Email and password combination incorrect</p>       
   

<img width="840" alt="Screenshot 2021-11-04 at 21 13 47" src="https://user-images.githubusercontent.com/81028718/140420985-f37675ce-ce44-4168-9c65-d49906a98927.png">
  
**Day 5**

This day was focused on the blog side of things. It was crucial to allow users to upload an image to the blog, I implemented cloudinary for this. My first priority was allowing users to access being able to post a blog, with editing and deleting coming later. I created the post blog form as it would be using the css from the login and sign ups.

<img width="641" alt="Screenshot 2021-11-04 at 21 15 04" src="https://user-images.githubusercontent.com/81028718/140421138-deb3067e-a4db-45d0-8a9b-f7246ed6b6ce.png">


I began to seed some whales on this day, slowly taking information from various conservation sites. I thought I'd quite like to illustrate the whales myself but of course not wanting to eat into coding time, used reference images and evening TV time to get this done!


<img width="1680" alt="Screenshot 2021-11-04 at 21 16 05" src="https://user-images.githubusercontent.com/81028718/140421257-a70e1d3a-4c22-430f-a47c-619cb9bfcb55.png">

  

**Day 6**

This day I started adding things in that a user would only see if logged in. For example the 'logout' in the navbar, the edit and delete buttons on the blogs that specific user had created. I added in the delete functionality. 

<img width="1680" alt="Screenshot 2021-11-04 at 21 19 09" src="https://user-images.githubusercontent.com/81028718/140421598-11855af3-b6bc-44dd-b828-2f9473fbf79b.png">


**Day 7**

Then I added a search bar in order to search for whales. It wasn't originally a plan but after searching through a few other marine websites that didn't have a search bar or one that worked, it definitely seemed fit! I used the filter method for the functionality of the search bar.

<img width="1680" alt="Screenshot 2021-11-04 at 21 19 57" src="https://user-images.githubusercontent.com/81028718/140421685-26be95c0-44ec-47a5-8a1d-41cacc4dd683.png">


    useEffect(() => {
    
    const  regexSearch  =  new  RegExp(search.searchTerm, 'i')
	    setFilteredWhales(whales.filter(whale  => {    
	    return  regexSearch.test(whale.name)    
	    }))    
    }, [setFilteredWhales, search, whales])




After days of having issues getting my conservation status relationship to display without an error on the single whale pages, a little error message saved the day! 

    if (!whale.status) return  null  

**Day 8**

Day 8 consisted of some final small jobs. A re-direct to the blog page once a blog was posted or deleted, final css and making the site responsive. I also did a final seed for my database (almost forgetting the mighty blue whale!).

<img width="994" alt="Screenshot 2021-11-04 at 21 25 05" src="https://user-images.githubusercontent.com/81028718/140422297-92524552-ff3a-4624-b312-4de61bff58e9.png">
  

**Strengths and issues**

I kept a good schedule during this project and worked through as if it was a work day with the same times every day. By this project I was a lot more in tune with how I work best and got into a good, productive workflow each day. It was intimidating to do the project solo however I wanted to make sure I really knew where my personal strengths and weaknesses lay. One thing I would have loved to workout was how to get the error messages to pop up for specific errors, as at the moment they show for any errors. After looking at classmates code I can see there's a good way to implement it via the backend of the project, which I would love to use in future projects for sure. All in all I'm very happy with The WhaleBase and consider it a successful project!

