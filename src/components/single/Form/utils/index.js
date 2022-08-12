const inputs = [
  {
    id: 'Name',
    required: true,
  },
  {
    id: 'Email',
    required: true,
    type: 'email',
  },
  {
    id: 'Phone',
    required: false,
  },
  {
    id: 'Shop',
    required: true,
    select: true,
    options: ['Palma de Mallorca', 'Turo Park', "L'Illa Diagonal"],
  },
  {
    id: 'Message',
    required: true,
    multiline: true,
    fullWith: true,
    rows: 5,
    options: ['Palma de Mallorca', 'Turo Park', "L'Illa Diagonal"],
  },
];

export { inputs };
