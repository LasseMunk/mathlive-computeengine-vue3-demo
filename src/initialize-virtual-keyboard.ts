import { VirtualKeyboardKeycap } from "mathlive";

export const initializeVirtualKeyboard = () => {
  // check https://cortexjs.io/mathlive/guides/virtual-keyboards/ for more information
  // and this https://cortexjs.io/mathlive/reference/commands/
  const keyboardDefault: (string | Partial<VirtualKeyboardKeycap>)[][] = [
    ["1", "2", "3", "/"],
    ["4", "5", "6", "*"],
    ["7", "8", "9", "-"],
    [
      {
        latex: "\\sin", // the LaTeX command
        insert: "\\sin(#?)" // #? is a placeholder for the argument
      },
      "0",
      {
        latex: "\\cos",
        insert: "\\cos(#?)"
      },
      "+"
    ]
  ];

  window.mathVirtualKeyboard.layouts = {
    layers: [
      {
        style: " .MLK__keycap:hover { color: #FFFFFF; } .MLK__keycap { color: #000000; }",
        rows: keyboardDefault
      }
    ]
  };

  document.body.style.setProperty("--keyboard-background", "#FFFFFF");
  document.body.style.setProperty("--keycap-background", "#FFFFFF");
  document.body.style.setProperty("--keycap-background-hover", "#FF0000");
};
