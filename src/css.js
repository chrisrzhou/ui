export const boxShadowStyle = '0 2px 8px rgba(0, 0, 0, 0.25)';

export const textTruncateCSS = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const hoverCSS = `
  :hover {
    box-shadow: ${boxShadowStyle};
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
