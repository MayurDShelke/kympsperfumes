export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  description: string;
  isBestSeller?: boolean;
}

export const perfumes: Perfume[] = [
  {
    id: "1",
    name: "Oud Wood",
    brand: "Tom Ford",
    price: 350,
    rating: 4.9,
    image: "/asset/p1.jpg",
    category: "Unisex",
    notes: {
      top: ["Rosewood", "Cardamom", "Chinese Pepper"],
      heart: ["Oud", "Sandalwood", "Vetiver"],
      base: ["Tonka Bean", "Vanilla", "Amber"]
    },
    description: "Rare. Exotic. Distinctive. One of the most rare, precious, and expensive ingredients in a perfumer's arsenal, oud wood is often burned in incense-filled temples.",
    isBestSeller: true
  },
  {
    id: "2",
    name: "Santal 33",
    brand: "Le Labo",
    price: 280,
    rating: 4.8,
    image: "/asset/p2.jpg",
    category: "Unisex",
    notes: {
      top: ["Violet Accord", "Cardamom"],
      heart: ["Iris", "Ambrox"],
      base: ["Cedarwood", "Leather", "Sandalwood"]
    },
    description: "A perfume that touches the sensual universality of this myth... that would intoxicate a man as much as a woman.",
    isBestSeller: true
  },
  {
    id: "3",
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    price: 450,
    rating: 5.0,
    image: "/asset/p3.png",
    category: "Unisex",
    notes: {
      top: ["Jasmine", "Saffron"],
      heart: ["Amberwood", "Ambergris"],
      base: ["Fir Resin", "Cedar"]
    },
    description: "Luminous and sophisticated, Baccarat Rouge 540 lays on the skin like an amber, floral and woody breeze.",
    isBestSeller: true
  },
  {
    id: "4",
    name: "Elysium",
    brand: "Roja Parfums",
    price: 320,
    rating: 4.7,
    image: "/asset/4.jpg",
    category: "Men",
    notes: {
      top: ["Lemon", "Bergamot", "Grapefruit"],
      heart: ["Apple", "Rose", "Jasmine"],
      base: ["Benzoin", "Vanilla", "Leather"]
    },
    description: "A scent that draws the world to its charm, Elysium exudes the perfect balance of easy-going brightness with sophisticated strength of character.",
    isBestSeller: true
  }
];
