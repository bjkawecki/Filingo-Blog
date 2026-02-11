---
layout: post
title: "Saying Goodbye to Bajkal, Looking Ahead to Its Successor"
category: Russian
lang: en
locale: en
page_id: abschied-bajkal
---
I have discontinued work on my Russian language learning web app “Bajkal”. As a result, the application has not been accessible under the domain bajkal-app.de for several months.

This does not mean that the project itself has come to an end. I am already working on a successor, about which I will share more details at a later point.

**Looking Back and Reasons for a Restart**

Work on “Bajkal” accompanied me for a long time. I enjoyed it greatly, and during this period I learned a lot—conceptually, in planning, design, and of course in programming. At the same time, it became increasingly clear to me over the course of development that I needed a different, better approach to build a Russian language learning app that truly matched my own expectations.

There were several aspects I was ultimately not satisfied with.

One of the first issues concerned the name and visual identity of the app. “Bajkal” was intended to evoke associations with Russian nature, and the mascot or logo—a Baikal seal—fit this idea well. Overall, however, the connection to language learning remained too abstract and insufficiently self-explanatory.

Second, the learning system was too rigid and too linear. My approach assigned vocabulary to a proficiency level (A1, A2, etc.), a main topic, and a subtopic. The proficiency level corresponded to a course, the main topic to a thematic area, and the subtopic to a learning deck. As a result, every word had to be assigned to a fixed deck and therefore to a fixed topic. Since words rarely belong clearly to just one topic, I was constantly faced with the choice between overly general or overly specific deck names. The decks tended to become too large, even though they ideally should have contained a manageable number of around 10 to 20 cards. With this approach, the system was hardly workable: thousands of words would have required hundreds of topics. The result was a very rigid categorization, better suited to linear learning materials such as books. For the successor, I am therefore pursuing a networked approach that is better suited to digital learning material.

Another issue was the closed nature of the app. When it comes to user acquisition, it becomes clear that many people are reluctant to “buy a pig in a poke.” Especially with unfamiliar applications, a mandatory registration can already be discouraging if it is not clear what to expect. Although the entry barrier for “Bajkal” was relatively low, I would like to make access even more open in the future and allow users to try the app without registering at all.

I was also no longer convinced by the dashboard. “Bajkal” offered an overview of due and new learning decks, as well as widgets such as a calendar and daily Russian proverbs with German translations. This was generally useful, but I want to focus the design more strongly on the learning experience itself. The calendar, while nice, ultimately felt somewhat outdated and is dispensable for me. I did like the proverbs widget, however, and it may return in a different form and at a different place.

Finally, the data model was also too rigid. While it was enjoyable to carefully model the various parts of speech with all their special cases and exceptions, I ultimately opted for a hybrid approach for the successor, combining fixed fields with JSONB. This results in a broader data-layer structure with stricter validation of word data before it is imported into the database.

**What Remains, New Features, and Outlook**

Despite these issues, there are many aspects I want to keep for the successor project. The public dictionary for looking up meanings and grammatical forms remains very important to me. I still aim to provide a meaningful complement to existing online Russian dictionaries. The learning deck approach using the SuperMemo algorithm will also remain largely unchanged, aside from the UI design. An overview of learning progress will likewise be part of the next version.

In addition, I am planning several new or significantly expanded features. In particular, I want to improve community building, gamification, and user customization. The next version will include a ranking system, as users will be able to collect points for learning and compare themselves with others. While I am generally critical of excessive gamification, it can enhance motivation and enjoyment when applied in moderation. In addition to points, users will be able to earn achievements. Users will also be able to tailor the learning experience more closely to their own needs—from choosing UI colors to defining daily learning goals. For complete beginners, I am also planning a small practice area for learning the Cyrillic alphabet.

These are the most important points for now. It will still take some time before the next version of my Russian learning app is released. This time, however, I want to cover at least the A1 to B2 proficiency levels from the very beginning, ideally even up to C1. If that succeeds and I am satisfied with the result, I plan to address additional areas such as grammar, listening comprehension, and audio-visual comprehension next.