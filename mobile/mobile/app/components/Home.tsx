import { useState } from "react";
import { Package, Search, Home as HomeIcon, ShoppingCart, PlusCircle, BookOpen, User } from 'lucide-react';
import { PantryItemDTO } from "../../src/types/dtos";

interface HomeProps {
    onNavigate: () => void;
}

const mockCategories = ['Todos', 'Grãos', 'Enlatados', 'Temperos', 'Massas', 'Bebidas'];

const mockItems: PantryItemDTO[] = [
  { id: '1', name: 'Arroz', quantity: 2, unit: 'kg', categoryName: 'Grãos', expirationDate: '2026-06-15' },
  { id: '2', name: 'Feijão Preto', quantity: 1, unit: 'kg', categoryName: 'Grãos', expirationDate: '2026-08-20' },
  { id: '3', name: 'Macarrão Penne', quantity: 500, unit: 'g', categoryName: 'Massas', expirationDate: '2026-12-01' },
  { id: '4', name: 'Molho de Tomate', quantity: 3, unit: 'unid', categoryName: 'Enlatados', expirationDate: '2026-04-10' },
  { id: '5', name: 'Sal', quantity: 1, unit: 'kg', categoryName: 'Temperos', expirationDate: '2026-04-11' },
  { id: '6', name: 'Açúcar', quantity: 2, unit: 'kg', categoryName: 'Temperos', expirationDate: '2027-01-15' },
  { id: '7', name: 'Café', quantity: 500, unit: 'g', categoryName: 'Bebidas', expirationDate: '2026-05-30' },
  { id: '8', name: 'Azeite', quantity: 750, unit: 'ml', categoryName: 'Temperos', expirationDate: '2026-09-12' },
  { id: '9', name: 'Atum Enlatado', quantity: 5, unit: 'unid', categoryName: 'Enlatados', expirationDate: '2026-07-22' },
  { id: '10', name: 'Lentilha', quantity: 500, unit: 'g', categoryName: 'Grãos', expirationDate: '2026-11-05' },
];

export function Home({ onNavigate }: HomeProps) {
  const [ selectedCategory, setSelectedCategory ] = useState('Todos');
  const [ searchQuery, setSearchQuery ] = useState('');

  const filteredItems = mockItems.filter(item => {
    const matchesCategory = selectedCategory === 'Todos' || item.categoryName === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}