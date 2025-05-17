import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "@docusaurus/Link";
import { CreditCard, Film, Search, Facebook, ShoppingCart, MonitorIcon } from 'lucide-react';
import styles from './CardHoverEffect.module.css';

// Map of icon names to Lucide components
const iconMap = {
  "credit-card": CreditCard,
  "film": Film,
  "search": Search,
  "facebook": Facebook,
  "shopping-cart": ShoppingCart,
  "window": MonitorIcon,
};

export const HoverEffect = ({
  items,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`${styles.grid} ${className || ''}`}>
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className={styles.cardLink}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={styles.hoverBackground}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.icon && <CardIcon icon={item.icon} />}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}) => {
  return <h4 className={`${styles.cardTitle} ${className || ''}`}>{children}</h4>;
};

export const CardDescription = ({
  className,
  children,
}) => {
  return <p className={`${styles.cardDescription} ${className || ''}`}>{children}</p>;
};

export const CardIcon = ({
  className,
  icon,
}) => {
  const IconComponent = iconMap[icon];
  
  if (!IconComponent) {
    return null;
  }
  
  return (
    <div className={`${styles.cardIcon} ${className || ''}`}>
      <IconComponent />
    </div>
  );
};