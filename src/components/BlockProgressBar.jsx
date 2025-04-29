// BlockProgressBar.jsx
import React from "react";

export default function BlockProgressBar({ value, max = 100, blocks = 25, color = "#38FFB3" }) {
    const filledBlocks = Math.round((value / max) * blocks);
    return (
        <div className="flex gap-[2px]">
            {Array.from({ length: blocks }).map((_, i) => (
                <div
                    key={i}
                    className="h-5 w-5 rounded-sm transition-all duration-300"
                    style={{
                        background: i < filledBlocks ? color : "#0B1512",
                        boxShadow: i < filledBlocks ? `0 0 6px 1px ${color}` : "none",
                    }}
                />
            ))}
        </div>
    );
}
