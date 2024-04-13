/* eslint-disable @typescript-eslint/no-explicit-any */
function getColorCategory(h: string, s: string, l: string) {
  const thresholds: any = {
    Pastel: { s: [0, 0.3], l: [0.7, 0.9] },
    Vintage: { s: [0, 0.3], l: [0.3, 0.7] },
    Retro: { s: [0.3, 0.6], l: [0.3, 0.7] },
    Neon: { l: [0.5, 1] },
    Gold: { h: [40, 60], s: [0.5, 1], l: [0.5, 0.8] },
    Light: { l: [0.7, 1] },
    Dark: { l: [0, 0.3] },
    Warm: { h: [0, 60] },
    Cold: { h: [180, 300] },
    Summer: { h: [30, 90], s: [0.5, 1], l: [0.5, 0.8] },
    Fall: { h: [0, 60], l: [0.4, 0.7] },
    Winter: { h: [180, 240], s: [0.5, 1], l: [0.3, 0.7] },
    Spring: { h: [60, 150], s: [0.5, 1], l: [0.5, 0.8] },
    Happy: { l: [0.7, 1] },
    Nature: { h: [80, 160], s: [0.3, 0.8], l: [0.3, 0.7] },
    Earth: { h: [20, 40], s: [0.3, 0.6], l: [0.3, 0.7] },
    Night: { l: [0, 0.3] },
    Space: { h: [210, 270], s: [0.5, 1], l: [0, 0.3] },
    Rainbow: { s: [0.5, 1], l: [0.5, 0.8] },
    Gradient: { s: [0.5, 1], l: [0.3, 0.7] },
    Sunset: { h: [10, 40], s: [0.5, 1], l: [0.5, 0.8] },
    Sky: { h: [180, 240], s: [0.3, 0.8], l: [0.7, 1] },
    Sea: { h: [180, 240], s: [0.3, 0.8], l: [0.3, 0.7] },
    Kids: { s: [0.7, 1], l: [0.7, 1] },
    Skin: { h: [10, 30], s: [0.3, 0.8], l: [0.7, 1] },
    Food: { h: [20, 60], s: [0.5, 1], l: [0.4, 0.8] },
    Cream: { h: [30, 60], s: [0, 0.3], l: [0.8, 1] },
    Coffee: { h: [20, 40], s: [0.3, 0.8], l: [0.2, 0.6] },
    Wedding: { h: [210, 270], s: [0.3, 0.8], l: [0.8, 1] },
    Christmas: { h: [0, 60], s: [0.7, 1], l: [0.3, 0.7] },
    Halloween: { h: [20, 50], s: [0.7, 1], l: [0.1, 0.5] },
  };

  for (const category in thresholds) {
    const {
      h: hThreshold,
      s: sThreshold,
      l: lThreshold,
    } = thresholds[category];
    const hInRange = !hThreshold || (h >= hThreshold[0] && h <= hThreshold[1]);
    const sInRange = !sThreshold || (s >= sThreshold[0] && s <= sThreshold[1]);
    const lInRange = !lThreshold || (l >= lThreshold[0] && l <= lThreshold[1]);

    if (hInRange && sInRange && lInRange) {
      return category;
    }
  }

  return "Unknown";
}

export default getColorCategory;
