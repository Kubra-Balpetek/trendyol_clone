'use client';

import { useState, useEffect } from 'react';

/**
 * Returns true when the viewport width is below the threshold (default: 768px).
 * Uses window.matchMedia so it works regardless of device pixel ratio.
 */
export function useIsMobile(breakpoint = 768): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
        setIsMobile(mq.matches);

        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, [breakpoint]);

    return isMobile;
}
