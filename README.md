# MOVEMENT

It's part of our human nature to want to explore the world that we live in. Most people go on holiday abroad at least once a year. 
Those who are single or retired travel even more. That is no different for us christians. Most christians have at some point in their 
life wanted to go on a mission trip. Some people want to just experience the life of a missionary as a one off thing and see the work of 
somebody they are either supporting or have heard about, others want to try it out and see if the missionary lifestyle is for them or not 
and if it's something that God has called them to do. 

In this project I've created a website that provides services like this, where individuals/couples/families can experience life in the 
mission field all from a couple of days to a couple of weeks. 

## UX

The website offers different kinds of mission trips depending on what the individual/couple/family is looking for as well as for how long 
they want to go for. There are four different destinations being offered with different trip lengths as well as different types of trips. 
This website targets everyone from creative people who want to use dance and drama as a missions platform; youth groups looking to do work
with other youths or young children, and those who are interested in going around preaching and giving testimonies in different churches.


### Website Goals 

- To gain an increase in website user activity, online enquiries and direct contact with the company

- To provide an easy navigational website for all kinds of users, that is clear and looks professional 

- Establish an online presence with the goal being one of the first options that comes up in the browser search

### User Stories

#### Navbar

- As a user, when logo is clicked, I am redirected to the video with the banner. 

- As a user, when I click the menu links in the Navbar, I will be redirected to another section in the page.

- As a user, when I click the "Contact" page, a popup modal form will appear allowing me to still remain on the site.

#### Main sections

- As a user, when the map markers are clicked I see an overview of the country.

- As a user, when I click the images on the bottom, another window opens up showing me that particular page while still allowing me to
see and access the page I was on.

- As a user, when the accordion is clicked I will see an overview of what is going to happen for each day of the trip.

#### Footer

- As a user, when I click on the email link in the footer, a popup-modal appears with the contact form.

- As a user, when I click on the social links, another window opens up with that particular page allowing me to still see the page I
was on.

- As a user, when email or content in contact form is left blank, an error message appears.

- As a user, when the subscribe field is clicked an error message will appear until a valid email is written. When a valid email has 
been written, button will appear saying Subscribe. After clicking button, field will be empty and button will change color and show 
subscribed.

- As a user, when the itinerary buttons are clicked, the menu will dropdown. When clicked again the button will collapse.

### Wireframes
These are the wireframes that I used in this project. This was the initial draft, but the outcome of the website have a few differences.

![image](assets/media/wireframes/wire1.png) ![image](assets/media/wireframes/wire2.png) ![image](assets/media/wireframes/wire3.png)


## Features

### Existing Features

- Navbar: navigational bar that allows for an easier use of the website by having a logo and menu with content linked to them. Menu collapses
into a hamburger when in ipad or mobile view.

- Jumbotron: gives users an idea of what the website is about in an instance.

- Bacgroundvideo: gives users a visual invitation to join on an exciting journey.

- Map feature: map of the world with markers showing where the trips are located.
    - Markers on the map show an overview of the country when clicked.

- Images: clickable images that will open up in a new page when clicked so that the user can still easily go back to the previous page they were on.

- Contact Popup Modal: modal that pops up with a contact form when clicked on buttons located in different areas of the website. 

- Social links: user can easily follow what is happening by visiting the different links.

- Subscription service: allows users to subscribe quick and easy by filling in their email and clicking button.

- Accordion/Collapse feature: collapse feature that allows the user to see an overview of the itinerary for the trip without too much space being taken
up.

- Carousel feature: showing slideshow with images from the different countries.


### Features Left to Implement

- Features left to implement are maps to the destination pages with markers to show some of the things to do in free time. 

- Another feature I'd like to include is a donate pop-up modal.

## Technologies Used

1. [Balsamiq Wireframes](https://balsamiq.com)
    - used at the beginning of the project to develop the right UX design desired for mobile, iPad and desktop resolutions.

2. [HTML](https://html.com/)
    - used to modify and add structure from bootstrap.

3. [CSS](https://www.w3.org/Style/CSS/)
    - used to style the website according to its purpose.

4. [Bootstrap v.4.5.2](https://getbootstrap.com/)
    - used to build the main frame and structure for all pages with a mobile first approach and desktop view.

5. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - used to add the command codes for contact form and subscription service, as well as the map feature. 

6. [Google Maps Platform](https://cloud.google.com/maps-platform)
    - used to get API for the map feature, allowing it to be interactive with the user. 

7. [Fontawesome](https://fontawesome.com/)
    - used for all the icons.

8. [Googlefonts](https://fonts.google.com/)
    - used for the fonts of all pages.

9. [GitHub](https://github.com/)
    - I uploaded my projects on a regular basis on github and also used it as a source of information and tool to learn even how to write this ReadMe.

10. [Google](https://google.com) and [Youtube](https://youtube.com)
    - used when I was stuck and needed some help in developing my project.

11. [iColor Palette](https://icolorpalette.com/)
    - I made use of iColor to find a good color scheme for the website that would suit it's purpose. The palettes I chose to work from can be found below:

    ![images](assets/media/icolorpalette.png)

12. [Code Institute Course Content](https://courses.codeinstitute.net/program/FullstackWebDeveloper)
    - this was a primary source of learning code.

13. [ChromeDevTools](https://developers.google.com/web/tools/chrome-devtools) 
    - used frequently to detect any issues/bugs or layout differences.

14. [StackOverflow](https://stackoverflow.com/)
    - used as a general resource for layout tips or questions.

15. [AmIResponsive](http://ami.responsivedesign.is/) 
    - used to check how the layout of the website looks across different devices- found in the Testing section of this README.


## Testing

1. [AmIResponsive](http://ami.responsivedesign.is/)
    - I used this website to check if my website was responsive. The layout looked correct on the diferrent devices, however for some reason the video would not show on any of the devices, even though it works when on the actual website. This in turn is messing up the text color making it very difficult to read. See below:

    ![images](assets/media/bugs/responsive.png) 

2. [HTMLvalidator](https://validator.w3.org/)
    - I tested the validation of my HTML with an HTML validator and recieved 1 parse error from one of my links located in the head section. I managed to fix this error by replacing "style" with "type".

3. [CSSvalidator](https://jigsaw.w3.org/css-validator/)
    - I tested the validation of my CSS with a CSS validator and recieved 3 errors as pictured below.

    ![images](assets/media/bugs/css-error.png)

    I managed to fix 2 of the errors by changing the font-weight to bold and the font-size to 3rem. The third error I managed to fix by changing the background-clip value to inherit instead of text.

4. I tested the website on different browsers such as Mozilla Firefox, Brave and Safari. 
    - Mozilla Firefox: everything worked well, there were no issues on desktop, ipad or mobile view.
    - Brave: the submit button on the pop up modal wouldn't display the submit value. I managed to fix this by switching position with the class attribute. There were also some small padding issues that needed to be adjusted.
    - Safari: the layout seems to work well on desktop mode, apart from the video not wanting to display. The ipad view is good but has the same issue with video background not showing. I wan't able to fix these issues unfortunately. The mobile view looked good on an iPhone 8 and iPhone SE size but not very good on the plus version.     

### Bugs and solutions

1. The video wasn't showing well on mobile and ipad devices so I replaced it with an image background instead. 

2. When clicking the first button of the accordion the "subscribed" background and text appeared on three of the destination pages. 

    ![images](assets/media/bugs/accordion.png)

    I managed to fix this by removing the javascript script source from the bottom of the page.

3. When viewing the main page on a mobile device there was some white space on the right hand side. I fixed this by adjusting the margins in media query for mobile view. It seems however that I have a white area for scrolling which I didn't manage to remove completely.

4. In the contact pop up modal, the submit button wasn't working. The required field texts weren't showing and nothing happened when submit was clicked. I fixed this issue by changing <button type="button"></button> to <input type="submit"> instead and placing it within the form section.

## Deployment

- To view the deployed version of [MOVEMENT](https://jesshperez.github.io/second-milestone-project/) I needed to do the following steps.
    1. Log in to GitHub and locate the GitHub Repository.   
    2. Select jesshperez/second-milestone-project from the list of repositories.
    3. Select settings and scroll down until you locate the "GitHub Pages" Section.
    4. Under "Source", click the dropdown called "None" and select "Master Branch".
    5. The page refreshes automatically and is ready for deployment.


## Credits

### Content

- All the text content are my own.

- The bible verses were taken from [BibleStudyTools](https://www.biblestudytools.com/bible-study/).

- The markers on the map were implemented with the help of Traversy Media [Google Maps JavaScript API Tutorial](https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=577s).

- The accordion on the destination pages were implemented with the help from [Easy Tutorials](https://www.youtube.com/watch?v=t5pJ-SYCZa0).

### Media

- The background video on the main page was implemented with the help from [CodeNewbies](https://www.youtube.com/watch?v=-G37aahAYlM).

- The images from the carousel in cuba.html were my own. 

- The images and video from the remaining pages were found from [Pixabay](https://pixabay.com/) and [Pexels](https://pexels.com/) and are free for commercial use.

### Acknowledgements

- At the start of this project I researched mission websites as well as holiday destination websites to gain some inspiration for the layout
I would want as well as what type of content I should implement. Most of my inspiration came from [CRU](https://www.cru.org/)
and [EXOTravel](https://www.exotravel.com/).

- I would like to thank my mentor Nishant Kumar for all the help and advice he's given me throughout this project. 

- I would also like to thank my husband for all the support he's given me in taking care of the kids while I have had to code as well as giving me tips and ideas on this project. 

