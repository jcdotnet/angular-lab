export type BreadType = 'campero-bread' | 'antequera-mollete' | 'gluten-free';

export type ToastingLevel = 1 | 2 | 3; 

export interface Ingredient {
  id: string;
  name: string;
  price: number;
  hasGluten: boolean;
  isDefault: boolean; 
}

export interface CamperoOrder { // DTO
  customerName: string;
  bread: BreadType;
  toasting: ToastingLevel;
  extras: string[]; 
  promoCode: string;
}
