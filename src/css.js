export const hoverFadeCSS = `
  :hover {
    opacity: 0.7;
  }
`;

export const hoverActiveClickCSS = `
  cursor: pointer;
  transition: all 0.125s ease;
  :active {
    transform: scale(0.9);
    :disabled {
      transform: none;
    }
  }
  :hover {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08),
      0 8px 8px 0 rgba(0, 0, 0, 0.08);
  }
`;

export const disabledClickCSS = `
  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
