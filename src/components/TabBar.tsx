// https://tailwindcomponents.com/component/radio-buttons-1

'use client'

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface Props {
    currentTab?: number;
    tabOptions?: Array<number>;
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4, 5], currentTab = 1 }: Props) => {

    const router = useRouter();

    const [selected, setSelected] = useState(currentTab);

    const onTabSelected = (selectedTab: number) => {
        setSelected(selectedTab);
        setCookie('selected-tab', selectedTab.toString());
        router.refresh();
    }


    return (
        
        <div className="flex w-full gap-2 rounded-xl bg-gray-200 p-2">
        
        
            {tabOptions.map((tab) => (
                <div key={tab} className="flex-1">
                    <input
                        type="radio"
                        id={`tab-${tab}`}
                        className="peer hidden"
                        checked={selected === tab}
                        onChange={() => { }}
                    />
                    <label
                        htmlFor={`tab-${tab}`}
                        onClick={() => onTabSelected(tab)}
                        className="block cursor-pointer select-none rounded-xl p-2 text-center
                   transition-all peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                        {tab}
                    </label>
                </div>
            ))}
        </div>

    )
}