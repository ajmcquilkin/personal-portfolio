---
title: Hardware JPEG Accelerator
subtitle: Accerated encoding of JPEG images
description: Compressing raw image data is a core part of modern image processing flows, and is an expensive process if not implemented efficiently. This project implements this compression flow in a parallelized FPGA hardware implementation to maximize encoding efficiency.

link: /Adam_McQuilkin_Dartmouth_College_JPEG_Encoding_HDL_Final_Writeup.pdf

linkText: view writeup

icon: chip
iconAlt: Computer chip icon

timeline: May 2022 - June 2022

languages: SystemVerilog, VHDL

roles:
  - System Architect
  - HDL Engineer
 
descriptionLong:
  - Image compression is a vital component of modern data processing flows, and the most widely-used compression method is JPEG compression. JPEG compression is a highly time-complex algorithm, as to process a single pixel of a raw image, the algorithm iterates over all other pixels within the image (or within a subsection of the image). This means that optimizing this compression method has the potential to save huge amounts of processing time given how commonly used JPEG compression is.
  - One common method of saving time when implementing the JPEG compression algorithm is to split a given image into eight by eight blocks and compress each block individually. This saves a large amount of time over processing the image as a whole due to the high polynomial time complexity of the operation. From here, processing can be done completely in parallel on each sub-image block, leading to the first major time save.
  - The second time save comes from implementing this design in hardware. Implementing algorithms in hardware saves huge amounts of time over software implementations since software solutions usually require significant infrastructure overhead to run (operating system, ISA, CPU pipelining, etc...). None of these abstractions are strictly required within a hardware implementation, meaning the solution can be orders of magnitude faster for a given clock frequency and core count.
  - To gain both of these optimizations, I designed and implemented a hardware implementation of the JPEG encoding algorithm on the Zybo Z7-10 FPGA board, a modern Xilinx FPGA development board with two inbuilt ARM cores. The JPEG compression algorithm was implemented on the FPGA fabric, while the image receiving and serializing logic would be implemented on the ARM cores. A detailed writeup of this project can be found above.
---
