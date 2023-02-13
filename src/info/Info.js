import fitcal from "../img/fitcal.png"
import gasncharge from "../img/gasncharge.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(4, 116, 220)", "rgb(0, 99, 204)"];
export let colors2 = ["rgb(4, 220, 58)", "rgb(0, 204, 51)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Christopher",
    lastName: "Gomez",
    initials: "CG", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack  Web Developer",
    // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors2[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
     
        {
            emoji: '🌎',
            text: 'Based in the US'
        },
        {
            emoji: "💼",
            text: "Open to Work"
        },
        {
            emoji: "📧",
            text: "chrisgtr34@yahoo.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/chrisgtr34",
            icon: "fa fa-github",
            label: 'github'
        },
        
        {
            link: "https://www.linkedin.com/in/christopher-gomez-240229139/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Christopher. I'm a recent graduate from UCLA's Coding Bootcamp. You should hire me!",
    skills:
        {
            proficientWith: ['react.js','javascript','git','bootstrap', 'html5', 'css3', 'node.js'],
            exposedTo: ['wordpress', 'adobe illustrator','c#','bigcommerce']
        }
    ,
    hobbies: [
        {
            label: 'Video Games',
            emoji: '🎮'
        },
        {
            label: 'Automotive Enthusiast',
            emoji: '🏎️'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Fit Cal",
            live: "https://fitcalxxii.herokuapp.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/chrisgtr34/FitCal", // this should be a link to the **repository** of the project, where the code is hosted.
            image: fitcal
        },
        {
            title: "GasNCharge",
            live: "https://gasncharge.herokuapp.com/",
            source: "https://github.com/chrisgtr34/Gas-Electric",
            image: gasncharge
        }
        
    ]
}