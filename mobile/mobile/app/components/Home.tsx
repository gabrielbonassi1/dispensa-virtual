import { useState } from "react";
import { Package, Search, Home as HomeIcon, ShoppingCart, PlusCircle, BookOpen, User } from 'lucide-react';
import { PantryItemDTO } from "../../src/types/dtos";
import { FooterBar } from "./FooterBar";

interface HomeProps {
    onNavigate: () => void;
}

const mockCategories = ['Todos', 'Grãos', 'Enlatados', 'Temperos', 'Massas', 'Bebidas'];

const mockItems: PantryItemDTO[] = [
  { id: '1', name: 'Arroz', quantity: 2, unit: 'kg', categoryName: 'Grãos', expirationDate: '2026-06-15', expirationStatus: 'valid' },
  { id: '2', name: 'Feijão Preto', quantity: 1, unit: 'kg', categoryName: 'Grãos', expirationDate: '2026-08-20', expirationStatus: 'valid' },
  { id: '3', name: 'Macarrão Penne', quantity: 500, unit: 'g', categoryName: 'Massas', expirationDate: '2026-12-01', expirationStatus: 'valid' },
  { id: '4', name: 'Molho de Tomate', quantity: 3, unit: 'unid', categoryName: 'Enlatados', expirationDate: '2026-04-10', expirationStatus: 'valid' },
  { id: '5', name: 'Sal', quantity: 1, unit: 'kg', categoryName: 'Temperos', expirationDate: '2026-04-11', expirationStatus: 'valid' },
  { id: '6', name: 'Açúcar', quantity: 2, unit: 'kg', categoryName: 'Temperos', expirationDate: '2027-01-15', expirationStatus: 'valid' },
  { id: '7', name: 'Café', quantity: 500, unit: 'g', categoryName: 'Bebidas', expirationDate: '2026-05-30', expirationStatus: 'valid' },
  { id: '8', name: 'Azeite', quantity: 750, unit: 'ml', categoryName: 'Temperos', expirationDate: '2026-09-12', expirationStatus: 'valid' },
  { id: '9', name: 'Atum Enlatado', quantity: 5, unit: 'unid', categoryName: 'Enlatados', expirationDate: '2026-07-22', expirationStatus: 'valid' },
  { id: '10', name: 'Lentilha', quantity: 500, unit: 'g', categoryName: 'Grãos', expirationDate: '2026-11-05', expirationStatus: 'valid' },
];

export function Home({ onNavigate }: HomeProps) {
  const [ selectedCategory, setSelectedCategory ] = useState('Todos');
  const [ searchQuery, setSearchQuery ] = useState('');

  const filteredItems = mockItems.filter(item => {
    const matchesCategory = selectedCategory === 'Todos' || item.categoryName === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white text-2xl font-bold">Minha Despensa</h1>
            <p className="text-emerald-100 text-sm mt-1">{filteredItems.length} itens</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
            <Package className="text-white" size={24} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar itens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-4 bg-white border-b border-gray-100 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {mockCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-y-auto px-6 py-4 pb-24">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <Package className="mx-auto text-gray-300 mb-3" size={48} />
            <p className="text-gray-500">Nenhum item encontrado</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item) => {
              const expiryStatus = item.expirationStatus;
              
              return (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.quantity} {item.unit} • {item.categoryName}
                      </p>
                      {item.expirationDate && (
                        <p className={`text-xs mt-2 ${
                          expiryStatus === 'expired' ? 'text-red-600' :
                          expiryStatus === 'warning' ? 'text-orange-600' :
                          'text-gray-400'
                        }`}>
                          Validade: {new Date(item.expirationDate).toLocaleDateString('pt-BR')}
                        </p>
                      )}
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      expiryStatus === 'expired' ? 'bg-red-500' :
                      expiryStatus === 'warning' ? 'bg-orange-500' :
                      'bg-green-500'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Bar */}
      <FooterBar activeTab="home" onAddClick={onNavigate} />
    </>
  )
}