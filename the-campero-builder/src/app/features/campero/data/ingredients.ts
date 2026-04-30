import { Ingredient } from '../models/campero.model';

export const INGREDIENTS: Ingredient[] = [
    { id: 'york', name: 'Jamón Cocido', price: 0, hasGluten: false, isDefault: true },
    { id: 'lettuce', name: 'Lechuga', price: 0, hasGluten: false, isDefault: true },
    { id: 'tomato', name: 'Tomate', price: 0, hasGluten: false, isDefault: true },
    { id: 'mayo', name: 'Mayonesa', price: 0, hasGluten: false, isDefault: true },

    { id: 'chicken', name: 'Pollo a la Plancha', price: 5.50, hasGluten: false, isDefault: false },
    { id: 'tuna', name: 'Atún', price: 5.20, hasGluten: false, isDefault: false },
    { id: 'roasted-chicken', name: 'Pollo Asado', price: 6.00, hasGluten: false, isDefault: false },
    { id: 'kebab', name: 'Kebab (Shawarma)', price: 5.80, hasGluten: false, isDefault: false },
    { id: 'tortilla', name: 'Tortilla Francesa', price: 5.00, hasGluten: false, isDefault: false },
    { id: 'serrano', name: 'Jamón Serrano', price: 6.20, hasGluten: false, isDefault: false },

    { id: 'bacon', name: 'Bacon', price: 0.90, hasGluten: false, isDefault: false },
    { id: 'cheese', name: 'Queso', price: 0.60, hasGluten: false, isDefault: false },
    { id: 'egg', name: 'Huevo frito', price: 1.00, hasGluten: false, isDefault: false },
    { id: 'onion', name: 'Cebolla Crujiente', price: 0.50, hasGluten: true, isDefault: false },
];

export const TOASTING_OPTIONS = [
    { id: 1, label: 'Blanquito', description: 'Tierno y caliente' },
    { id: 2, label: 'Dorado', description: 'El punto crujientito' },
    { id: 3, label: 'Bien Tostaito', description: 'Para los valientes' }
];