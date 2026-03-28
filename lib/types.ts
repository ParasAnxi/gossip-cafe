export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  category: MenuCategory;
  imageUrl: string;
  isVeg: boolean;
  isFeatured: boolean;
  isAvailable: boolean;
  sortOrder: number;
}

export type MenuCategory =
  | 'coffee'
  | 'boba-smoothie'
  | 'bao-burger'
  | 'pizza-pasta'
  | 'desserts'
  | 'specials';

export interface GalleryItem {
  _id: string;
  type: 'photo' | 'video';
  title?: string;
  category: GalleryCategory;
  imageUrl: string;
  thumbnailUrl?: string;
  width: number;
  height: number;
  sortOrder: number;
}

export type GalleryCategory = 'food' | 'ambience' | 'events';

export interface DayHours {
  open: string;
  close: string;
}

export interface OperatingHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}
