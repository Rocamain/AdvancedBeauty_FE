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
    select: true,
    options: true,
  },
  {
    id: 'Message',
    required: true,
    multiline: true,
    fullWith: true,
    rows: 4,
  },
];

export { inputs };
