// Custom Dashboard Color Palette: #0B1D51, #725CAD, #8CCDEB, #FFE3A9
export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#fafafa", 
    50: "#f5f5f5",
    100: "#eeeeee",
    200: "#e0e0e0",
    300: "#bdbdbd",
    400: "#9e9e9e",
    500: "#757575",
    600: "#616161",
    700: "#424242",
    800: "#2c2c2c",
    900: "#1a1a1a",
    1000: "#0d0d0d",
  },
  primary: {
    // Based on #0B1D51 (Dark Blue) - Main brand color
    100: "#e8edf7", // Very light blue
    200: "#d1dbef",
    300: "#a3b7df",
    400: "#7593cf",
    500: "#476fbf",
    600: "#2d4a8f", // Lighter version of #0B1D51
    700: "#1a3366",
    800: "#0B1D51", // Main color
    900: "#081640",
  },
  secondary: {
    // Based on #725CAD (Purple) - Secondary brand color
    50: "#f3f1f8",
    100: "#e7e3f1",
    200: "#cfc7e3",
    300: "#b7abd5",
    400: "#9f8fc7",
    500: "#725CAD", // Main secondary color
    600: "#5b4a8a",
    700: "#443767",
    800: "#2d2544",
    900: "#161222",
  },
  accent: {
    // Based on #8CCDEB (Light Blue) - Accent color
    100: "#f0f8fc",
    200: "#e1f1f9",
    300: "#c3e3f3",
    400: "#a5d5ed",
    500: "#8CCDEB", // Main accent color
    600: "#6bb8d9",
    700: "#4a9bc0",
    800: "#357a94",
    900: "#1f4a5a",
  },
  highlight: {
    // Based on #FFE3A9 (Light Yellow) - Highlight/Warning color
    100: "#fffcf5",
    200: "#fff9eb",
    300: "#fff3d7",
    400: "#ffedc3",
    500: "#FFE3A9", // Main highlight color
    600: "#ffd580",
    700: "#ffc757",
    800: "#e6a642",
    900: "#b8852d",
  },
  success: {
    // Green tones for success states
    100: "#e8f5e8",
    200: "#c8e6c9",
    300: "#a5d6a7",
    400: "#81c784",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  error: {
    // Red tones for error states
    100: "#ffebee",
    200: "#ffcdd2",
    300: "#ef9a9a",
    400: "#e57373",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// Custom Dashboard Theme Settings with Selected Palette
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // Dark Mode - Using Custom Palette
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[600], // #2d4a8f - Lighter blue for dark mode
              light: tokensDark.primary[500],
              dark: tokensDark.primary[800], // #0B1D51 - Main dark blue
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500], // #725CAD - Purple
              light: tokensDark.secondary[400],
              dark: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[300], // Light grey for visibility
            },
            background: {
              default: tokensDark.primary[900], // Very dark blue background
              paper: tokensDark.primary[800], // #0B1D51 for cards
              alt: tokensDark.primary[700], // Alternative background
            },
            text: {
              primary: tokensDark.grey[50], // Light text
              secondary: tokensDark.accent[500], // #8CCDEB - Light blue for secondary text
            },
            // Custom palette colors
            accent: {
              ...tokensDark.accent,
              main: tokensDark.accent[500], // #8CCDEB - Light blue accent
            },
            highlight: {
              ...tokensDark.highlight,
              main: tokensDark.highlight[500], // #FFE3A9 - Light yellow
            },
            success: {
              ...tokensDark.success,
              main: tokensDark.success[400],
            },
            warning: {
              ...tokensDark.highlight,
              main: tokensDark.highlight[600], // Using highlight colors for warnings
            },
            error: {
              ...tokensDark.error,
              main: tokensDark.error[400],
            },
          }
        : {
            // Light Mode - Using Custom Palette
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[800], // #0B1D51 - Main dark blue
              light: tokensDark.primary[600],
              dark: tokensDark.primary[900],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[500], // #725CAD - Purple
              light: tokensDark.secondary[300],
              dark: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[600],
            },
            background: {
              default: tokensDark.grey[50], // Light background
              paper: tokensDark.grey[0], // White for cards
              alt: tokensDark.accent[100], // Very light blue alternative
            },
            text: {
              primary: tokensDark.primary[800], // #0B1D51 for main text
              secondary: tokensDark.secondary[600], // Purple for secondary text
            },
            // Custom palette colors
            accent: {
              ...tokensLight.accent,
              main: tokensDark.accent[600], // Darker light blue for contrast
            },
            highlight: {
              ...tokensLight.highlight,
              main: tokensDark.highlight[700], // Darker yellow for contrast
            },
            success: {
              ...tokensLight.success,
              main: tokensDark.success[600],
            },
            warning: {
              ...tokensLight.highlight,
              main: tokensDark.highlight[800], // Darker yellow for warnings
            },
            error: {
              ...tokensLight.error,
              main: tokensDark.error[600],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 600,
        color: mode === "dark" ? tokensDark.grey[50] : tokensDark.primary[800],
      },
      h2: {
        fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 600,
        color: mode === "dark" ? tokensDark.grey[100] : tokensDark.primary[800],
      },
      h3: {
        fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 500,
        color: mode === "dark" ? tokensDark.accent[500] : tokensDark.secondary[500],
      },
      h4: {
        fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 500,
      },
      h5: {
        fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 500,
      },
      h6: {
        fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 500,
      },
    },
    components: {
      // Enhanced component styling with custom palette
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 500,
            '&.MuiButton-containedPrimary': {
              backgroundColor: tokensDark.primary[800], // #0B1D51
              '&:hover': {
                backgroundColor: tokensDark.primary[700],
              },
            },
            '&.MuiButton-containedSecondary': {
              backgroundColor: tokensDark.secondary[500], // #725CAD
              '&:hover': {
                backgroundColor: tokensDark.secondary[600],
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: mode === 'dark' 
              ? '0 4px 12px rgba(11, 29, 81, 0.3)' 
              : '0 4px 12px rgba(11, 29, 81, 0.1)',
            border: mode === 'dark' 
              ? `1px solid ${tokensDark.accent[800]}` 
              : `1px solid ${tokensDark.accent[200]}`,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' 
              ? tokensDark.primary[800] 
              : tokensDark.grey[0],
            color: mode === 'dark' 
              ? tokensDark.grey[50] 
              : tokensDark.primary[800],
          },
        },
      },
    },
  };
};
