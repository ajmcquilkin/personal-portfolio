---
title: Meshtastic Network Management Client
subtitle: Managing Open Source Ad-Hoc Mesh Networks
description: How can we allow non-techincal users to rapidly deploy and manage complex mesh network topologies in a low bandwidth environment?

link: https://github.com/ajmcquilkin/meshtastic-network-management-client
icon: meshtastic
iconAlt: Meshtastic project logo

timeline: September 2022 - Present

languages: Rust, TypeScript

roles:
  - Project lead
  - Development lead
  - Rust, UI developer
  - UI, UX designer

team:
  - Uhuru Hashimoto - Firmware and Backend Developer
  - Barkin Cavdaroglu - Algorithms and ML Research
  - Sherry Liu - Frontend Developer
  - Sam Crombie - Frontend Developer

descriptionLong:
  - Communication is something that we all take for granted, but what do we do when our communication networks go dark? This is the problem that the Meshtatic project is trying to solve. The Meshtastic open-source project builds firmware for low-cost radio devices that, instead of passing messages to and from a central tower, pass messages between each other. This is known as mesh networking, and it is very powerful for rapidly deploying low-cost, high redundancy networks.
  - The Meshtastic firmware has been optimized for individual use, but we saw an opportunity to expand Meshtastic into higher-stakes use cases. Specifically, I led a team to give users high degrees of confidence in their networks through targeted network analytics and algorithmic analysis.
  - To accomplish these goals, we chose to build an open-source desktop application using the Rust Tauri framework with React TypeScript as our UI layer. To give users insights into the network, I propsed a novel network aggregation packet that would allow clients to collect information from remote nodes and incrementally build an image of the network state. I then led the team in building and deploying an algorithm runner which allows users to gain valuable information from the network, such as which network links are most important for the network and which are at risk of failure.
  - This project began as a senior capstone project, but I am personally continuing the project outside of Dartmouth. All code is available in the link above.
---
