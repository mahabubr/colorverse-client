type ColorVariations = {
  primary: string;
  secondary: string;
  accent: string;
  light: string;
  dark: string;
};

function generateRandomColor(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateColorVariations(): ColorVariations {
  return {
    primary: generateRandomColor(),
    secondary: generateRandomColor(),
    accent: generateRandomColor(),
    light: generateRandomColor(),
    dark: generateRandomColor(),
  };
}

export default generateColorVariations;
