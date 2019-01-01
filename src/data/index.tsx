export interface ICard {
  id: number;
  firstName: string;
  lastName: string;
  rating: number;
}

// silver = 1000 - 1999
// gold = 2000 - 2999
// platinum = 3000 - 3999
// legend = 4000 - 4999

export const cards: ICard[] = [
  {
    id: 2000,
    firstName: "Barkevious",
    lastName: "Mingo",
    rating: 80,
  },

  {
    id: 3000,
    firstName: "Andrew",
    lastName: "Luck",
    rating: 80,
  },

  {
    id: 1000,
    firstName: "Joe",
    lastName: "Haeg",
    rating: 80,
  },

  {
    id: 1001,
    firstName: "Ryan",
    lastName: "Grant",
    rating: 81,
  },

  {
    id: 1002,
    firstName: "Zack",
    lastName: "Pascal",
    rating: 82,
  },
  
  {
    id: 1003,
    firstName: "Zack",
    lastName: "Rascal",
    rating: 83,
  },

  {
    id: 1004,
    firstName: "Zack",
    lastName: "Mascal",
    rating: 84,
  },

  {
    id: 1005,
    firstName: "Wack",
    lastName: "Nascal",
    rating: 85,
  },

  {
    id: 2001,
    firstName: "Quenton",
    lastName: "Nelson",
    rating: 80,
  },

  {
    id: 4000,
    firstName: "Dwight",
    lastName: "Freeney",
    rating: 80,
  },
];
