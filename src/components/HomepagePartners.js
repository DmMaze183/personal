import React from "react";
import { HoverEffect } from "./CardHoverEffect";
import styles from './HomepagePartners.module.css';

export default function HomepagePartners() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Getting started",
    description: "Start working with edna Chat Center",
    link: "/docs/start",
  },
  {
    title: "Agent WP",
    description:
      "Processing incoming requests and sending messages",
    link: "/docs/agent",
  },
  {
    title: "Supervisor WP",
    description: "Monitoring of customer service quality",
    link: "/docs/supervisor",
  },
  {
    title: "Admin WP",
    description:
      "Chat center management",
    link: "/docs/admin",
  },
  {
    title: "Chatbots",
    description:
      "Setting up, connecting and testing chatbots",
    link: "/docs/chat-bot",
  },
  {
    title: "Q&A",
    description:
      "Answers to frequently asked user questions",
    link: "/docs/faq",
  },
];