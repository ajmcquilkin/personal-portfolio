/* eslint-disable max-len */
import { Project } from "types/projects";

export type HomeFeaturedProject = Project & { caption: string; link: string };

export const HomeFeaturedProjects: HomeFeaturedProject[] = [
  {
    title: "Mesh Networking",
    subtitle: "Meshtastic Network Management Client",
    context: "Open Source",
    description:
      "How can we give non-techincal users the confidence and ability to rapidly deploy and manage complex mesh network topologies in a low bandwidth and low reliability environment?",
    caption:
      "A mockup showing the network management client and a simulated mesh network.",

    featuredImageSrc:
      "/v1683046698/Personal%20Portfolio/mnmc-mockup_honxbk.png",
    featuredImageAlt:
      "mockup showing the client UI within a macbook pro screen",
    featuredLogoSrc: "/icons/meshtastic-dark.svg",
    featuredLogoAlt: "Meshtasic project logo",

    link: "/stories/mnmc",
  },
  {
    title: "US Patent 9,632,952",
    subtitle: "Intermediate Computer Interface Device",
    context: "Innovation",
    description:
      "How can we leverage hardware to enable USB Human Interface Device (HID) macros and signal repeaters on systems in which you don't have access to software installers?",
    caption:
      "A filing diagram showing the proposed implementation for the Intermediate Computer Interface Device.",

    featuredImageSrc:
      "/v1659309989/Personal%20Portfolio/US09632952-20170425-D00000_dhhvgy.png",
    featuredImageAlt:
      "patent filing diagram showing intermediate computer interface device",
    featuredLogoSrc: "/icons/chip.svg",
    featuredLogoAlt: "Computer chip",

    link: "/stories/icid",
  },
  {
    title: "D-Planner, LLC",
    subtitle: "Course planning done right",
    context: "Entrepreneurship",
    description:
      "Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.",
    caption:
      "D-Planner is a modern and intuitive method for planning your educational experience.",

    featuredImageSrc:
      "/v1659301982/Personal%20Portfolio/dplanner-macbookpro-mockup_dovzp7.png",
    featuredImageAlt:
      "A MacBook Pro with a screen showing a mockup for the DPlanner service.",
    featuredLogoSrc: "/icons/search.svg",
    featuredLogoAlt: "D-Planner logo",

    link: "/stories/d-planner",
  },
  {
    title: "Hardware JPEG Encoder",
    subtitle: "Accelerated Encoding of JPEG Images",
    context: "Concurrency and Optimization",
    description:
      "Compressing raw image data is a core part of modern image processing flows, and is an expensive process if not implemented efficiently. How can we optimize this flow using modern FPGA technologies?",
    caption: "Dataflow-level diagram for a hardware-only JPEG encoding flow.",
    featuredImageSrc:
      "/v1659304106/Personal%20Portfolio/jpeg_encoder_block_design_hosdgp.png",
    featuredImageAlt:
      "Screenshot of a diagram from the Xilinx Vivado tool showing connected Xilinx IP blocks.",
    featuredLogoSrc: "/icons/chip.svg",
    featuredLogoAlt: "Computer chip",
    link: "/stories/hdl-jpeg-encoding",
  },
  // {
  //   title: "Portable Radio Repeater",
  //   subtitle: "Enabling all-condition radio communication",
  //   context: "Research and Development",
  //   description:
  //     "How can we allow New Hampshire's Search and Rescue (SAR) teams to mitigate operational risks caused by a lack of radio coverage within highly mountainous terrain?",
  //   caption:
  //     "The development setup for the repeater's environmental fault-detection system.",

  //   featuredImageSrc: "/v1619975016/Personal%20Portfolio/DSC_9251_fapzdo.jpg",
  //   featuredImageAlt: "workbench showing components of portable repeater",
  //   featuredLogoSrc: "/icons/search.svg",
  //   featuredLogoAlt: "D-Planner logo",

  //   link: "/stories/portable-repeater",
  // },
];
