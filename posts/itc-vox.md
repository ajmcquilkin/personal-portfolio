---
slug: itc-vox
title: ITC Vox Daily
subtitle: Modern content curation for Dartmouth College
description: How can we create a modern content creation workflow for Dartmouth College that can handle curating, approving, and rendering submitted daily college content?

icon: dartmouth
iconAlt: Dartmouth College logo

partners:
  - Office of Communications, Dartmouth College
  - Information, Technology & Consulting, Dartmouth College

timeline: September 2020 - March 2021

languages: ReactJS, Typescript, NextJS

roles:
  - Full-stack developer
  - Development mentor

team:
  - Archita Harathi - Product designer
  - Julia Kern - Product designer
  - Nathan Schneider - Backend developer
  - Ray Huang - Frontend Developer
  - Sara Falkson - Product design mentor
  - Satch Baker - Full-stack developer, PM

descriptionLong:
  - Dartmouth College maintains a daily content feed known as "Vox Daily" that delivers current college events directly to students' inboxes. The current system is highly outdated and only supports ASCII content. The college reached out to my team to recreate the system to support a modern content creation and approval workflow.
  - "The current system is separated into three major roles: content creators, content moderators, and content consumers. Content creators include staff and faculty of the college, and are able to write and submit short-form stories or events for inclusion in the daily releases. Content moderators will then approve or reject each submission, and organize daily releases. Once a release has been approved, content consumers can then view the content either in email form or online."
  - On this project I both served as a development mentor and as a full-stack developer. I worked with the PM and partners to convert the design requirements into features, and work with the developers to implement the features.
  - A major challenge when creating this system was ensuring the submitted information was generated into email markdown that could be rendered on all major email clients. This was very important to the partner, and as such consumed a singificant amount of time during development. We initially tried using React to render the content into raw HTML, but this ultimately turned out to be too complex. I ended up implementing a custom email generator engine that took the generated content from the system's rich text editor and mapped each block (think h1) into a corresponding HTML element. This approach was especially complex since <div> elements are generally not supported by email clients, and as such we were required to make generous use of the <table> HTML element.
---
