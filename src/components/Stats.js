import { useState, useEffect, useRef } from 'react';
import './Stats.css';

const statsData = [
  { label: 'Established', value: 2010, suffix: '', prefix: '', animate: false },
  { label: 'Students', value: 275, suffix: '+', prefix: '', animate: true },
  { label: 'Faculty Members', value: 30, suffix: '+', prefix: '', animate: true },
  { label: 'Success Rate', value: 98, suffix: '%', prefix: '', animate: true },
];

function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const node = statsRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div className="stats-shell" ref={statsRef}>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            isVisible={isVisible}
            delay={index * 150}
          />
        ))}
      </div>
    </div>
  );
}

function StatItem({ stat, isVisible, delay }) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    // If this stat is non-animated (e.g., Established year), set once and skip timers
    if (!stat.animate) {
      setCount(stat.value);
      hasAnimatedRef.current = true;
      return;
    }

    timerRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      hasAnimatedRef.current = true;
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isVisible, stat.value, delay, stat.animate]);

  return (
    <div className="stat-item">
      <div className="stat-value">
        {stat.prefix}
        {isVisible ? count.toLocaleString() : 0}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default Stats;
