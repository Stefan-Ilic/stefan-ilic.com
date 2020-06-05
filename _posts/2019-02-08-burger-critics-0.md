---
layout: post
title:  "The Burger Critics #0: Rating the Burgers"
author: stefan
categories: [ Food, Burger Critics ]
image: assets/images/score.jpg
comments: false
---

As you may or may not know, a few developer buddies of mine and I are trying to find the best burger ever, that includes the overall experience of sitting in the restaurant and eating it. In true developer fashion, we overengineered the rating system. The following post provides insights in the aforementioned rating system.

# Categories

The first question one needs to ask himself is which categories to look out for when rating the burger experience. Finding the categories was rather uncomplicated, everyone added one or two and they aggregated pretty nicely. We ended up with these:

* Burger bread
* Burger sauce
* Burger Meat
* Selection of side dishes
* taste of side dishes
* Selection of drinks
* Selection of sauces
* Payment options
* Price
* Service
* Waiting time
* Selection of desserts
* Taste of desserts
* Atmosphere

# Category weight

Now that we had the categories, we needed to determine their relative importance in order to calculate a **weighted average** of our answers. I quite frankly did all of it myself because I couldn't convince the other guys how fun numbers could are.

I chose to use the _analysis of preferences_ method that is commonly used in conjunction with a _cost-utility analysis_. It works more or less like bubble sort, you compare every category with every other category and determine each time which is more important. Unfortunately, just like with bubble sort, it's simple implementation comes with a performance cost of $O(n^2)$. I used a really helpful Excel template which I got on [this](http://www.excelution.at/praeferenzanalyse/) website (caution, German and no https), it sped up the process quite a lot. By using this method, the following weights were calculated:

| Category                 | Weight |
|--------------------------|--------|
| Burger bread             | 0,11   |
| Burger sauce             | 0,10   |
| Burger meat              | 0,14   |
| Selection of side dishes | 0,03   |
| taste of side dishes     | 0,13   |
| Selection of drinks      | 0,01   |
| Selection of sauces      | 0,07   |
| Payment options          | 0,04   |
| Price                    | 0,09   |
| Service                  | 0,04   |
| Waiting time             | 0,08   |
| Selection of desserts    | 0,12   |
| Taste of desserts        | 0,01   |
| Atmosphere               | 0,04   |

# Range of points

The next questions to ask are "What's the least amount of points I can give to a category, what's the maximum?" We decided to go with a 1-8 range because it is impossible to pick a "neutral" number, every rating has to be "more good than bad" or "more bad than good". Also, it meant we could say gr8 m8 I r8 8/8.

# Calculating the final score

My friend and occasional enemy Marcel provided the google sheets formula for calculating the average score for each individual critic, B being the column with the weights and C the one with the actual values from 1 to 8 (the last int is the max amount of points you can give, I told him it's a **magic number** but he wouldn't listen):

```
=(SUM(ARRAYFORMULA($B$3:$B$16*C3:C16))/SUM($B$3:$B$16))/8
```

the final score is the average score of all critics and a number from **12,5 to 100**. That 12,5 may seem a little weird, but it comes from the fact that we can't award a score of 0, so it hopefully makes sense.