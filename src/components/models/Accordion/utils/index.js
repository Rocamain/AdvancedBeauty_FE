const sortTreatments = (treatments) => {
  const groupedByTreatment = groupByTreatment(treatments);
  const sortedServices = sortServices(groupedByTreatment);
  return sortedServices;
};

const groupByTreatment = (treatments) =>
  treatments.reduce((acc, obj) => {
    let key = obj.type;
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
        groupedByTreatment[treatment].sort((f, s) => f - s);

      return { name: treatment, services: sortedServices() };
    });

  return sortServices();
};

export { sortTreatments };
