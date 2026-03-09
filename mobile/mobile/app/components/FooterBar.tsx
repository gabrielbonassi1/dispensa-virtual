import { Home, ShoppingCart, PlusCircle, BookOpen, User } from 'lucide-react';

interface FooterBarProps {
  activeTab: string;
  onAddClick: () => void;
}

export function FooterBar({ activeTab, onAddClick }: FooterBarProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between relative">
        {/* Home */}
        <button
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'home' ? 'text-emerald-600' : 'text-gray-400'
          }`}
        >
          <Home size={24} />
          <span className="text-xs font-medium">Início</span>
        </button>

        {/* Shopping List */}
        <button
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'shopping' ? 'text-emerald-600' : 'text-gray-400'
          }`}
        >
          <ShoppingCart size={24} />
          <span className="text-xs font-medium">Lista</span>
        </button>

        {/* Add Button - Highlighted in the center */}
        <button
          onClick={onAddClick}
          className="flex flex-col items-center -mt-8 transition-transform active:scale-95"
        >
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-full shadow-lg">
            <PlusCircle size={32} className="text-white" strokeWidth={2.5} />
          </div>
        </button>

        {/* Recipes */}
        <button
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'recipes' ? 'text-emerald-600' : 'text-gray-400'
          }`}
        >
          <BookOpen size={24} />
          <span className="text-xs font-medium">Receitas</span>
        </button>

        {/* Profile */}
        <button
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'profile' ? 'text-emerald-600' : 'text-gray-400'
          }`}
        >
          <User size={24} />
          <span className="text-xs font-medium">Perfil</span>
        </button>
      </div>
    </div>
  );
}
