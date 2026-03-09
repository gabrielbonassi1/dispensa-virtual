import { useState } from 'react';
import { ArrowLeft, Package } from 'lucide-react';

interface AddItemProps {
  onNavigate: () => void;
}

const categories = ['Grãos', 'Enlatados', 'Temperos', 'Massas', 'Bebidas', 'Outros'];
const units = ['kg', 'g', 'L', 'ml', 'unid'];

export function AddItem({ onNavigate }: AddItemProps) {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    unit: 'kg',
    category: 'Grãos',
    expiryDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save the item to state/database
    console.log('Novo item:', formData);
    onNavigate();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 pt-12 pb-6">
        <button
          onClick={onNavigate}
          className="mb-4 text-white hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
            <Package className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">Adicionar Item</h1>
            <p className="text-emerald-100 text-sm mt-1">Novo item na despensa</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome do Item *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Arroz, Feijão, Macarrão..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Quantity and Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantidade *
              </label>
              <input
                type="number"
                required
                step="0.01"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="0"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unidade *
              </label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
              >
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoria *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data de Validade (opcional)
            </label>
            <input
              type="date"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow active:scale-[0.98]"
            >
              Adicionar à Despensa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
