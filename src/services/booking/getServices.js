const SHOP = {
  '/Services-and-Fares/Services-in-Turo-Park': 'Turo Park',
  '/Services-and-Fares/Services-in-Palma-de-Majorca': 'Palma de Majorca',
  "/Services-and-Fares/Services-in-L'Illa-Diagonal": "L'Illa Diagonal",
};

const PATH = process.env.REACT_APP_BOOKING;

const getServices = () => {
  const queryString = `${PATH}/services?orderBy=type`;

  return queryString;
};

export default getServices;
