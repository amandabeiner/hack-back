# Hack Back

![Build Status](https://codeship.com/projects/4e0f1e90-10e3-0135-9e6a-16033dbb1ea1/status?branch=master)

Coming from non-profit and teaching backgrounds respectively, my coworker Mike and I always imagined using our newly-minted web development skills to give back to nonprofit causes that we cared about. Over the past year, we've found that the Boston tech scene is filled with talented, generous people who want to do the same thing, but don't know how to find meaningful projects to hack on.

At the same time, we found that our friends from the nonprofit and community organizing circles had dire tech needs that went unfilled year after year. Tight budgets meant that hiring tech talent was impossible, and finding reliable help on a pro-bono basis was time and resource-intensive. We wanted to solve both of these problems by building Hack Back.

The core concept behind Hack Back is to bring socially-minded developers and nonprofit organizations together to make great stuff happen. Organizations can sign up easily, and post a project that they need done. Developers can fill out their profile with their experience level, preferred stack, past projects, and interests. They can request to join an Organization's project, and, once approved, can start building a team to complete it.

Once a project is completed, a nonprofit can leave a review of the developer "lead", and dev teammates can review each other to build their profile as reliable partners. This also allows fledgling developers to get hands-on coding experience under more seasoned mentorship, and to start building a portfolio and connections within the tech community.

## Technologies

* React Redux Front End
Since this app has many moving parts, including individual dashboards for developers, organizations, projects, and teams, Redux was a natural choice. It allowed us to more easily handle React state, and to implement Redux Form for creating profiles and projects.

* Rails back end (API)
Since each dashboard has a ton of information about the user, project(s), and teams, Rails ActiveModelSerializers were invaluable for returning all of the nested JSON objects we needed in one vetch call.

* Agile Practices
To get the most out of building this side project, Mike and I wanted to follow good dev practices. We followed Test Driven Development, proper Git workflow, and agile software practices, including planning and pointing user stories and building out the MVP one feature at a time.

## Setup
To get set up, clone this repository and run:

```no-highlight
  bundle
  rake db:create
  rake db:migrate
  rails s
```

In a separate terminal window, run:

```no-highlight
  yarn
  yarn start
```
