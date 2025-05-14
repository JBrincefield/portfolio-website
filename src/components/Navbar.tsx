type NavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const tabs = ['about', 'resume', 'portfolio'];

  return (
    <nav className="flex space-x-6 text-lg font-medium">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`capitalize ${
            activeTab === tab ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300'
          } hover:text-yellow-300 transition`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
