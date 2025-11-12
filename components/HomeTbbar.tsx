"use client";

import { productType } from "@/constants";
import { Repeat } from "lucide-react";
import React, { useRef, useEffect } from "react";

interface Props {
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}

const HomeTbbar = ({ selectedTab, onTabSelect }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    useEffect(() => {
        const container = containerRef.current;
        const activeTab = tabRefs.current[selectedTab];

        if (container && activeTab) {
            const containerRect = container.getBoundingClientRect();
            const tabRect = activeTab.getBoundingClientRect();

            const scrollLeft =
                container.scrollLeft +
                (tabRect.left - containerRect.left) -
                containerRect.width / 2 +
                tabRect.width / 2;

            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
        }
    }, [selectedTab]);

    return (
        <div
            ref={containerRef}
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-sm font-semibold"
        >
            <div className="flex items-center gap-1.5 flex-shrink-0">
                {productType?.map((item) => (
                    <button
                        key={item?.title}
                        ref={(el) => {
                            tabRefs.current[item?.title] = el;
                        }}
                        onClick={() => onTabSelect(item?.title)}
                        className={`border border-darkColor px-3 py-1.5 md:px-6 md:py-2 rounded-full whitespace-nowrap hover:bg-darkColor hover:text-white hoverEffect ${selectedTab === item?.title && "bg-darkColor text-white"
                            }`}
                    >
                        {item?.title}
                    </button>
                ))}
            </div>
            <button className="border border-darkColor p-2 rounded-full flex-shrink-0 hover:bg-darkColor hover:text-white hoverEffect">
                <Repeat className="w-5 h-5" />
            </button>
        </div>
    );
};

export default HomeTbbar;
