import { fade } from "@material-ui/core/styles";
import type { Overrides } from "@material-ui/core/styles/overrides";

import { SaleorThemeColors } from "../types";

export const inputOverrides = (colors: SaleorThemeColors): Overrides => ({
  MuiInput: {
    input: {
      "&:-webkit-autofill": {
        WebkitTextFillColor: colors.font.default,
        boxShadow: `inset 0 0 0px 9999px ${colors.autofill}`,
      },
      "&::placeholder": {
        opacity: "1 !important" as any,
      },
      color: colors.font.default,
    },
    underline: {
      "&:after": {
        borderBottomColor: colors.primary,
      },
    },
  },
  MuiInputBase: {
    input: {
      "&$disabled": {
        color: colors.input.disabledText,
      },
      "&::placeholder": {
        color: colors.font.gray,
        opacity: "1 !important" as any,
      },
    },
  },
  MuiInputLabel: {
    formControl: {
      transform: "translate(0, 1.5px) scale(0.75)",
      transformOrigin: "top left" as "top left",
      width: "100%",
    },
    outlined: {
      "&$shrink": {
        transform: "translate(12px, 9px) scale(0.75)",
      },
      transform: "translate(14px, 18px) scale(1)",
    },
    root: {
      "&$disabled": {
        color: `${fade(colors.primary, 0.4)} !important` as any,
      },
      "&$error": {
        "&$focused": {
          color: colors.error,
        },
        color: colors.error,
      },
      "&&$focused": {
        "&:not($error)": {
          color: colors.primary,
        },
      },
      color: fade(colors.input.text, 0.6),
    },
    shrink: {
      // Negates x0.75 scale
      width: "133%",
    },
  },
  MuiOutlinedInput: {
    input: {
      "&:-webkit-autofill": {
        borderRadius: 4,
        boxShadow: "0 0 0px 1000px rgba(19, 190, 187, 0.1) inset",
      },
      color: colors.input.text,
      padding: "23px 12px 10px 12px",
    },
    inputMultiline: {
      left: -2,
      padding: "10px 0",
      position: "relative",
    },
    root: {
      "& fieldset": {
        "&&:not($error)": {
          borderColor: colors.input.border,
        },
        top: 0,
      },
      "& legend": {
        display: "none",
      },
      "&$disabled": {
        "& fieldset": {
          borderColor: [[colors.input.disabled], "!important"] as any,
        },
        "& input": {
          backgroundColor: colors.input.disabledBackground,
          color: colors.input.disabledText,
        },
      },
      "&$error": {
        "&$focused": {
          "& fieldset": {
            borderColor: colors.error,
          },
          "& input": {
            color: colors.error,
          },
        },
        "&:hover": {
          "& fieldset": {
            borderColor: colors.error,
          },
          "& input": {
            color: colors.error,
          },
        },
      },
      "&$focused": {
        "& input": {
          "& fieldset": {
            borderColor: colors.primary,
          },
          "&::placeholder": {
            opacity: [[1], "!important"] as any,
          },
          color: colors.font.default,
        },
      },
      "&:hover": {
        "& input": {
          color: colors.font.default,
        },
        "&&&": {
          "& fieldset": {
            borderColor: colors.primary,
          },
          "&$error fieldset": {
            borderColor: colors.input.error,
          },
        },
      },
      backgroundColor: colors.background.paper,
      borderColor: colors.input.border,
      top: 0,
    },
  },
});
