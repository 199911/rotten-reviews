# Examples

## [Get Movie Reviews](get-movie-reviews.js)

```js
// get-movie-reviews.js

const RottenReviews = require('rotten-reviews')

RottenReviews.getAudienceReviews('venom_2018', 3).then(reviews => {
  console.log(JSON.stringify(reviews, null, 2))
})
```

```json
[
  {
    "reviewer": "Daniel M",
    "date": "October 12, 2018",
    "stars": 0,
    "review": "Great Movie !!!! So much action with just the right amount of comedy. But yet another example of the critics being dead wrong in their assessment of a movie. This is a similar to how they were wrong in their critiquing of The Last Jedi, where they gave it a 90% + and the fans gave it a 40%. Good job on another blunder of a review by our beloved critics...and no you don't know better then millions of people."
  },
  {
    "reviewer": "Julia D",
    "date": "October 12, 2018",
    "stars": 5,
    "review": "One of the best romcoms I've ever watched, funny, full of action. Critics just don't know how to have fun."
  },
  {
    "reviewer": "Edwin C",
    "date": "October 12, 2018",
    "stars": 2,
    "review": "Disappointment doesn't begin to define Venom. I knew it was gonna be horrible when a trailer was released so quickly after the film's announcement. I actually wrote more but the app crashed.I'll start by saying what I liked about the film first. I loved Tom Hardy's performance in Venom. He's a really good fit for Eddie Brock and he plays his character with a passion and he knows that.I also liked the Venom suit thistime. It was so much better compared to the rubbish we saw in Topher Grace's Venom in Spider Man 3.The reason people say Venom didn't make senseis because Venom's 1st host was Peter Parker. Eddie is the 2nd host which Venom latches onto for a longer time because they have the strongest connection together. That's why they say this film makes no sense without Peter. Also, Venom is undetectable by SpideySense. That's what makes himthe top 3 villains to Peter.Now the bad bit. Venom's pace was slow. It took 40 minutes for us to see Venom infect Eddie and we still don't really see Venom in full cry until an hour in. The moment that happens is when the pace starts to speed up.I get that they want to build the tension up but the tone of film messes with this because its comedic at times, and then it gets really serious and dark. Like Deadpool meets Hulk. Sometimes I find a scene funny and want to laugh but no else is laughing cause the previous scene was too serious.The villain was poorly written and hismotives was just nonsense. You want your audience to relate to him and say \"I get you\" but this villain doesn't have that. He's just insane and he isn't the Joker. Just don't do that.The script was just lazy. Terrible dialogue, poor quality. This isn't Deadpool. You don't get to write abad script and get away with it. This is why Marvel needs the complete Spiderman rights back.If I were to want a Spiderman to battle this Venom,I'd want Andrew Garfield's Spidey. Cause Tom Holland's is just too weak and will be dead if he goes toe to toe with this Venom. And I hate to say this but Tobey Maguire's Spidey was the worst, so he ain't in my picture to fight this Venom."
  }
]
```

## [Get TV Show Reviews](get-tv-show-reviews.js)

```js
// get-tv-show-reviews.js

const RottenReviews = require('rotten-reviews')

RottenReviews.getAudienceReviews('doctor_who/s11', 3, true).then(reviews => {
  console.log(JSON.stringify(reviews, null, 2))
})
```

```json
[
  {
    "reviewer": "Ed B.",
    "date": "",
    "stars": 0.5,
    "review": ""
  },
  {
    "reviewer": "Frank E.",
    "date": "",
    "stars": 0,
    "review": ""
  },
  {
    "reviewer": "Shannon S",
    "date": "",
    "stars": 5,
    "review": ""
  }
]
```
