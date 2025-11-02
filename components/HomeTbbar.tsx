import React from 'react'
interface Props {

    selectedTab: string;
    onTabSelect: (tab: string) => void;

}

const HomeTbbar = ({ selectedTab, onTabSelect }: Props) => {
    return (
        <div>HomeTbbar</div>
    )
}

export default HomeTbbar