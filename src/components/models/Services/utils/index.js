const sortTreatments = (treatments) => {
  const groupedByTreatment = groupByTreatment(treatments);

  const sortedServices = sortServices(groupedByTreatment);

  return sortedServices;
};

const groupByTreatment = (treatments) =>
  treatments.reduce((acc, obj) => {
    let key = `${obj.type} treatments`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

const sortServices = (groupedByTreatment) => {
  const TreatmentsTypeArray = Object.keys(groupedByTreatment);

  const sortServices = () =>
    TreatmentsTypeArray.map((treatment) => {
      const sortedServices = () =>
        groupedByTreatment[treatment].sort((f, s) => {
          const nameF = f.serviceName.toUpperCase();
          const nameS = s.serviceName.toUpperCase();
          if (nameF < nameS) {
            return -1;
          }
          if (nameF > nameS) {
            return 1;
          }

          return 0;
        });

      return { name: treatment, services: sortedServices() };
    });

  return sortServices();
};

export { sortTreatments };
