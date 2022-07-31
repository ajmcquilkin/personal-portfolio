---
title: Microsoft PowerBI
subtitle: Improving UX within the PowerBI Suite
description: How can we optimize and modernize the user experience within the Paginated Reports suite within Microsoft's larger PowerBI suite?

link: https://powerbi.microsoft.com/en-us/
icon: microsoft
iconAlt: Microsoft logo

timeline: May 2021 - August 2021

languages: ReactJS, Typescript, C#, ASP.NET

roles:
  - Frontend developer
  - Backend developer

descriptionLong:
  - "During my time on the PowerBI Paginated Reports team, I worked on two major features: infinite scrolling within the Paginated Report web client, and enabling background exporting of paginated report files."
  - Within the current offering, users are subjected to an unintuitive user flow for viewing multiple pages, where the user is expected to click a button each time they want to view the next page. This differs significantly from the typical UX pattern within Microsoft's Office 365 Suite, where the next page is consistently viewed by vertical scrolling. During my time on the team I rebuilt the web Paginated Report page rendering engine to support this "Word-style" vertical scrolling.
  - Additionally, the current system doesn't allow users to view a given paginated report while it is being exported. Since these reports contain hundreds of thousands to millions of rows of data, this rendering process takes a significant amount of time, during which the user cannot interact with the web interface. I updated the backend code to parallelize this report rendering, and allowed users to view reports while the server is exporting in the background.
---
