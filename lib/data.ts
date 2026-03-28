import { MenuItem, GalleryItem, OperatingHours } from './types';

export const menuItems: MenuItem[] = [
  // Coffee
  {
    _id: '1', name: 'Signature Espresso', category: 'coffee',
    description: 'Double shot of our house blend — rich, bold, with cocoa undertones.',
    imageUrl: '/images/menu1.png', isVeg: true, isFeatured: true, isAvailable: true, sortOrder: 1
  },
  {
    _id: '2', name: 'Caramel Cold Brew', category: 'coffee',
    description: 'Slow-steeped cold brew with house caramel syrup and milk foam.',
    imageUrl: '/images/menu2.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 2
  },
  {
    _id: '3', name: 'Pistachio Latte', category: 'coffee',
    description: 'Velvety latte with homemade pistachio paste, oat milk crema.',
    imageUrl: '/images/menu3.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 3
  },
  {
    _id: '4', name: 'Café Mocha Supreme', category: 'coffee',
    description: 'Espresso, dark chocolate, steamed milk and whipped cream artistry.',
    imageUrl: '/images/menu4.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 4
  },

  // Boba & Smoothies
  {
    _id: '5', name: 'Boba Matcha Latte', category: 'boba-smoothie',
    description: 'Premium ceremonial matcha with tapioca pearls and oat milk.',
    imageUrl: '/images/menu.png', isVeg: true, isFeatured: true, isAvailable: true, sortOrder: 1
  },
  {
    _id: '6', name: 'Taro Milk Tea', category: 'boba-smoothie',
    description: 'Classic creamy taro with chewy boba and brown sugar swirl.',
    imageUrl: '/images/all_item1.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 2
  },
  {
    _id: '7', name: 'Mango Passion Smoothie', category: 'boba-smoothie',
    description: 'Fresh mango, passionfruit, and coconut cream blended to perfection.',
    imageUrl: '/images/all_item2.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 3
  },
  {
    _id: '8', name: 'Berry Blast Boba', category: 'boba-smoothie',
    description: 'Mixed berry jam, lychee jelly pearls, and chilled green tea base.',
    imageUrl: '/images/menu1.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 4
  },

  // Bao & Burgers
  {
    _id: '9', name: 'Crispy Paneer Bao', category: 'bao-burger',
    description: 'Fluffy steamed bao, golden paneer, pickled cucumber, sriracha mayo.',
    imageUrl: '/images/menu2.png', isVeg: true, isFeatured: true, isAvailable: true, sortOrder: 1
  },
  {
    _id: '10', name: 'Smash Chicken Burger', category: 'bao-burger',
    description: 'Double-smashed chicken patty, aged cheddar, caramelised onions.',
    imageUrl: '/images/menu3.png', isVeg: false, isFeatured: true, isAvailable: true, sortOrder: 2
  },
  {
    _id: '11', name: 'Classic Mushroom Bao', category: 'bao-burger',
    description: 'Sautéed mushrooms, truffle aioli, shiso leaf in a pillowy bao.',
    imageUrl: '/images/menu4.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 3
  },
  {
    _id: '12', name: 'BBQ Pulled Chicken Burger', category: 'bao-burger',
    description: 'Slow-cooked pulled chicken, tangy slaw, jalapeño, brioche bun.',
    imageUrl: '/images/menu.png', isVeg: false, isFeatured: false, isAvailable: true, sortOrder: 4
  },

  // Pizza & Pasta
  {
    _id: '13', name: 'Truffle Mushroom Pizza', category: 'pizza-pasta',
    description: 'House tomato base, wild mushrooms, truffle oil drizzle, parmesan crumble.',
    imageUrl: '/images/all_item1.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 1
  },
  {
    _id: '14', name: 'Peri-Peri Chicken Pizza', category: 'pizza-pasta',
    description: 'Spiced chicken tikka, roasted peppers, mozzarella, cilantro finish.',
    imageUrl: '/images/all_item2.png', isVeg: false, isFeatured: false, isAvailable: true, sortOrder: 2
  },
  {
    _id: '15', name: 'Creamy Arrabbiata Pasta', category: 'pizza-pasta',
    description: 'Penne in a bold tomato-chilli cream sauce, fresh basil and parmesan.',
    imageUrl: '/images/menu1.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 3
  },
  {
    _id: '16', name: 'Pesto Chicken Pasta', category: 'pizza-pasta',
    description: 'Grilled chicken, basil pesto, cherry tomatoes, pecorino, house pasta.',
    imageUrl: '/images/menu2.png', isVeg: false, isFeatured: false, isAvailable: true, sortOrder: 4
  },

  // Desserts
  {
    _id: '17', name: 'Belgian Waffle Sundae', category: 'desserts',
    description: 'Crisp waffle, two scoops ice cream, house caramel, berry compote.',
    imageUrl: '/images/menu3.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 1
  },
  {
    _id: '18', name: 'Dark Chocolate Lava Cake', category: 'desserts',
    description: 'Warm molten centre, served with vanilla bean ice cream.',
    imageUrl: '/images/menu4.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 2
  },
  {
    _id: '19', name: 'Tiramisu', category: 'desserts',
    description: 'Classic Italian — espresso-soaked ladyfingers, mascarpone, cocoa dust.',
    imageUrl: '/images/menu.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 3
  },

  // Specials
  {
    _id: '20', name: 'GO-SSIP Club Sandwich', category: 'specials',
    description: 'Triple-decker with grilled chicken, egg, cheese, tomato, and house sauce.',
    imageUrl: '/images/all_item1.png', isVeg: false, isFeatured: false, isAvailable: true, sortOrder: 1
  },
  {
    _id: '21', name: 'Sizzling Paneer Platter', category: 'specials',
    description: 'Chef-marinated paneer tikka, mint chutney, pickled onion, naan.',
    imageUrl: '/images/all_item2.png', isVeg: true, isFeatured: false, isAvailable: true, sortOrder: 2
  },
];

export const galleryItems: GalleryItem[] = [
  { _id: 'g1', type: 'photo', title: 'Café Interior', category: 'ambience', imageUrl: '/images/Create_a_premium_202603281541.png', width: 1200, height: 800, sortOrder: 1 },
  { _id: 'g2', type: 'photo', title: 'Signature Coffee', category: 'food', imageUrl: '/images/menu1.png', width: 800, height: 800, sortOrder: 2 },
  { _id: 'g3', type: 'photo', title: 'Boba Collection', category: 'food', imageUrl: '/images/menu2.png', width: 800, height: 800, sortOrder: 3 },
  { _id: 'g4', type: 'photo', title: 'Warm Ambience', category: 'ambience', imageUrl: '/images/Create_a_premium_202603281541 (4).png', width: 1200, height: 900, sortOrder: 4 },
  { _id: 'g5', type: 'photo', title: 'Chef\'s Special', category: 'food', imageUrl: '/images/menu3.png', width: 800, height: 800, sortOrder: 5 },
  { _id: 'g6', type: 'photo', title: 'Evening Vibes', category: 'ambience', imageUrl: '/images/visit_us.png', width: 1200, height: 800, sortOrder: 6 },
  { _id: 'g7', type: 'photo', title: 'Pizza Night', category: 'food', imageUrl: '/images/all_item1.png', width: 800, height: 600, sortOrder: 7 },
  { _id: 'g8', type: 'photo', title: 'Dessert Time', category: 'food', imageUrl: '/images/menu4.png', width: 800, height: 800, sortOrder: 8 },
  { _id: 'g9', type: 'photo', title: 'Weekend Events', category: 'events', imageUrl: '/images/all_item2.png', width: 1200, height: 800, sortOrder: 9 },
  { _id: 'g10', type: 'photo', title: 'Special Plates', category: 'food', imageUrl: '/images/menu.png', width: 800, height: 800, sortOrder: 10 },
];

export const operatingHours: OperatingHours = {
  monday:    { open: '15:00', close: '23:00' },
  tuesday:   { open: '15:00', close: '23:00' },
  wednesday: { open: '15:00', close: '23:00' },
  thursday:  { open: '15:00', close: '23:00' },
  friday:    { open: '15:00', close: '23:00' },
  saturday:  { open: '14:00', close: '23:00' },
  sunday:    { open: '14:00', close: '23:00' },
};

export function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayHour}:${m.toString().padStart(2, '0')} ${period}`;
}

export function isOpenNow(hours: OperatingHours): boolean {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = dayNames[now.getDay()] as keyof OperatingHours;
  const todayHours = hours[today];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const [openH, openM] = todayHours.open.split(':').map(Number);
  const [closeH, closeM] = todayHours.close.split(':').map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;
  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

export const categoryLabels: Record<string, string> = {
  coffee: 'Coffee',
  'boba-smoothie': 'Boba & Smoothies',
  'bao-burger': 'Bao & Burgers',
  'pizza-pasta': 'Pizza & Pasta',
  desserts: 'Desserts',
  specials: "Chef's Specials",
};

export const instagramPhotos = [
  '/images/menu1.png',
  '/images/Create_a_premium_202603281541.png',
  '/images/all_item1.png',
  '/images/menu2.png',
  '/images/Create_a_premium_202603281541 (4).png',
  '/images/menu3.png',
];
