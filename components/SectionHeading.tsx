'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  /** The subtitle text (usually in uppercase with // prefix) */
  subtitle?: string;
  /** The main heading text */
  title: string;
  /** Optional highlighted text within the title */
  highlight?: string;
  /** Optional description text below the heading */
  description?: string;
  /** Optional alignment: 'center' (default) or 'left' */
  align?: 'center' | 'left';
  /** Optional custom className for additional styling */
  className?: string;
  /** Optional children for custom content */
  children?: ReactNode;
}

export function SectionHeading({
  subtitle,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
  children,
}: SectionHeadingProps) {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
  };

  // Split title into parts if highlight is provided
  const renderTitle = () => {
    if (!highlight) {
      return <span className="text-white">{title}</span>;
    }

    const parts = title.split(highlight);
    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="text-[#00ffb4]">{highlight}</span>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <motion.div
      className={`${alignmentClasses[align]} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Subtitle */}
      {subtitle && (
        <motion.div
          variants={subtitleVariants}
          className="inline-block bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] px-4 py-1 rounded-full text-xs font-mono tracking-wider mb-3"
        >
          {subtitle}
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        variants={titleVariants}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
      >
        {renderTitle()}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          variants={descriptionVariants}
          className={`mt-4 text-gray-400 max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } text-base sm:text-lg`}
        >
          {description}
        </motion.p>
      )}

      {/* Custom Children (for additional elements like CTA buttons) */}
      {children && (
        <motion.div
          variants={descriptionVariants}
          className="mt-6"
        >
          {children}
        </motion.div>
      )}

      {/* Optional decorative line for left-aligned headings */}
      {align === 'left' && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-0.5 bg-[#00ffb4] mt-4"
        />
      )}
    </motion.div>
  );
}