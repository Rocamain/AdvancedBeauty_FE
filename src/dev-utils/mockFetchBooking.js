const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const fetchBookingTimes = ({ pathname, date, serviceName }) => {
  const splitUrl = pathname.split('/');
  const shop = splitUrl[splitUrl.length - 1];
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const url = `/${shop}/${serviceName.replaceAll(
    ' ',
    '-'
  )}/${year}/${month}/${day}`;

  return delay(500).then(() => {
    switch (url) {
      case '/Services-in-Palma-de-Majorca/Nam-cursus,-sapien/2022/7/30':
        return [
          '8:00',
          '8:30',
          '9:00',
          '9:30',
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '13:00',
          '14:00',
          '14:30',
          '15:00',
          '15:30',
          '16:00',
          '16:30',
          '17:00',
        ];

      default:
        return false;
    }
  });
};

export default fetchBookingTimes;
