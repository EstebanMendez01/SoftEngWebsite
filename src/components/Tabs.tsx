import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  children: React.ReactNode[];
}

export default function Tabs({ tabs, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {children.map((child, index) => (
          <div key={index} className={`tab-pane ${activeTab === tabs[index].id ? 'active' : ''}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
} 