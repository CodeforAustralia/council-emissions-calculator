const calculateEmissions = (km, transportModes) => {
  const perMode = (mode = "didNotTravel", perKg = 0) => ({
    mode,
    e: perKg * Number(km) * 2,
  });

  const emissionsPerMode = transportModes.map((mode) => {
    switch (mode) {
      case "train/tram":
        return perMode(mode, 0.04);
      case "scooter":
        return perMode(mode, 0.1);
      case "bus":
        return perMode(mode, 0.1);
      case "car(shared)":
        return perMode(mode, 0.075);
      case "car(solo)":
        return perMode(mode, 0.075);
      case "walk":
        return perMode(mode);
      case "bicycle":
        return perMode(mode);
      default:
        return perMode();
    }
  });

  const totalEmissions = emissionsPerMode
    .map((r) => r.e)
    .reduce((a, b) => a + b);

  return { emissionsPerMode, totalEmissions };
};

export default calculateEmissions;
