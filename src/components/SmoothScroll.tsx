"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                anchors: true,
                duration: 0.9,
                lerp: 0.14,
                smoothWheel: true,
                syncTouch: false,
                touchMultiplier: 1,
                wheelMultiplier: 0.95,
            }}
        >
            {children}
        </ReactLenis>
    );
}
