---
title: Intermediate Computer Interface Device
subtitle: US Patent 9,632,952
description: How can we leverage hardware to enable USB Human Interface Device (HID) macros and signal repeaters on systems in which you don't have access to software installers?

link: https://patents.google.com/patent/US9632952B1/en?oq=9632952
icon: chip
iconAlt: Computer chip icon

timeline: January 2015 - January 2017

languages: C / C++

roles:
  - Inventor
  - Sole patent holder

descriptionLong:
  - During a high school study, I often found myself wishing I could install an autoclicker on the school computers for gaming. This was not possible without bypassing the school's inbuilt security system, which would at the very least get me kicked out of the school's network. I did have hardware access to the computer, however, which led me to create and patent a hardware version of the autoclicker software I couldn't download.
  - I created the proof of concept for this device using Arduino-compatible microcontrollers in C / C++. I used a cheap USB host chip (MAX3421 if you're interested) to act as a USB host for a USB keyboard or mouse, cotrolled by the central microcontroller. The microcontroller would then parse the USB input, determine what action to take, and pipe the resulting signals out via a mocked USB HID device into the host computer.
  - This allows for any number of output patterns, from simply repeating a key n times per second to automatically moving the mouse to typing a series of keystrokes every time the user hits a predefined keyboard shortcut. This has applications anywhere the user doesn't have root access to the system in question, primarily in the gaming and productivity sectors.
---
