import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
}

// Extended interfaces for performance entries
interface PerformanceFirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface PerformanceLayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

export const usePerformance = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const observer = new PerformanceObserver((list) => {
      const metrics: PerformanceMetrics = {};

      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input': {
            const fidEntry = entry as PerformanceFirstInputEntry;
            metrics.fid = fidEntry.processingStart - fidEntry.startTime;
            break;
          }
          case 'layout-shift': {
            const clsEntry = entry as PerformanceLayoutShiftEntry;
            if (!clsEntry.hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + clsEntry.value;
            }
            break;
          }
        }
      }

      // Log metrics for debugging (remove in production)
      if (Object.keys(metrics).length > 0) {
        console.log('Performance Metrics:', metrics);
      }
    });

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.warn('Some performance metrics not supported');
    }

    return () => observer.disconnect();
  }, []);

  // Preload critical resources
  const preloadResource = (href: string, as: string, type?: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  };

  // Prefetch resources for next navigation
  const prefetchResource = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  };

  return { preloadResource, prefetchResource };
};

// Hook for measuring component render time
export const useRenderTime = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }
    };
  });
};
