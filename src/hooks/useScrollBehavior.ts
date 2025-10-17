'use client';

import { useState, useEffect, useCallback } from 'react';

export const useScrollBehavior = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Header behavior: hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down - hide header
      setIsHeaderVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up - show header
      setIsHeaderVisible(true);
    }

    // Footer behavior: show only when at the bottom of the page
    const isAtBottom = currentScrollY + windowHeight >= documentHeight - 100;
    setIsFooterVisible(isAtBottom);

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isHeaderVisible, isFooterVisible };
};