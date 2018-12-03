export const hoverCSS = `
  :hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

export const clickCSS = `
  cursor: pointer;
  transition: all 0.125s ease;
  :active {
    transform: scale(0.9);
    :disabled {
      transform: none;
    }
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  ${hoverCSS}
`;
