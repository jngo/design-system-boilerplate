import { colors } from '../../lib/colors';
import { typography } from '../../lib/typography';
import styled, { css } from 'styled-components';
import { shade, tint } from 'polished';

const stylesSize = size => {
  switch (size) {
    case 'large':
      return `
        height: 2rem;
      `;
    default:
      return `
        height: 1.5rem;
      `;
  }
};

const stylesBase = css`
  ${props => stylesSize(props.size)} display: ${({ block }) =>
      block ? 'block' : 'inline-block'};
  border: none;
  border-radius: 0.1875rem;
  font: ${typography.label.small.font};
  line-height: 1rem;
  padding: ${props => (props.size === 'large' ? '0.5rem 1rem' : '0.25rem 0.75rem')};
  text-transform: ${typography.label.small.textTransform};

  &:focus {
    outline: none;
  }
`;

const stylesBoxShadow = (color = colors.ui.shadow.default) => {
  return `
    box-shadow:
      0 0.125rem 0.125rem ${colors.ui.shadow.default},
      inset 0 -0.125rem 0 ${color};
  `;
};

const stylesColor = (color, customProperty = null) => {
  var styles = `color: ${color};`;

  if (customProperty) {
    styles += `color: var(--${customProperty}, ${color});`;
  }

  return `
    ${styles}
  `;
};

const stylesBackgroundColor = (
  color,
  variation = 'default',
  customProperty = null
) => {
  var backgroundColor = 'transparent',
    backgroundColorHover = 'transparent';

  switch (variation) {
    case 'link':
      backgroundColorHover = tint(0.48, color);
      break;
    default:
      backgroundColor = color;
      backgroundColorHover = shade(0.84, color);
  }

  if (customProperty) {
    return `
      background-color: ${backgroundColor};
      background-color: var(--${customProperty}, ${backgroundColor});

      &:hover {
        background-color: ${backgroundColorHover};
        background-color: var(--${customProperty}-shade, ${backgroundColorHover});
      }
    `;
  } else {
    return `
      background-color: ${backgroundColor};

      &:hover {
        background-color: ${backgroundColorHover};
      }
    `;
  }
};

const defaultStyling = css`
  ${stylesBase} ${props => {
      if (props.link) {
        return `
        ${stylesBackgroundColor(colors.intent.active.light, 'link')}
        ${stylesColor(colors.intent.active.default, 'intent-active')}
      `;
      } else {
        return `
        ${stylesBoxShadow()}
        ${stylesBackgroundColor(
          colors.intent.active.default,
          'default',
          'intent-active'
        )}
        ${stylesColor(colors.typography.inverted.default)}
      `;
      }
    }};
`;

const disabledStyling = css`
  &:disabled {
    ${stylesBase} ${props => {
        if (props.link) {
          return `
          ${stylesColor(colors.typography.font.lighter)}
        `;
        } else {
          return `
          ${stylesBackgroundColor(colors.ui.background.default)}
          ${stylesColor(colors.typography.font.light)}

          &:hover {
            background-color: ${colors.ui.background.default};
          }
        `;
        }
      }};
  }
`;

const mutedStyling = css`
  ${stylesBase} ${props => {
      if (props.link) {
        return `
        ${stylesBackgroundColor(colors.ui.background.default, 'link')}
        ${stylesColor(colors.typography.font.light)}
      `;
      } else {
        return `
        ${stylesBoxShadow()}
        ${stylesBackgroundColor(colors.ui.background.dark)}
        ${stylesColor(colors.typography.inverted.default)}
      `;
      }
    }};
`;

const successStyling = css`
  ${stylesBase} ${props => {
      if (props.link) {
        return `
        ${stylesBackgroundColor(colors.intent.success.light, 'link')}
        ${stylesColor(colors.intent.success.default, 'intent-success')}
      `;
      } else {
        return `
        ${stylesBoxShadow()}
        ${stylesBackgroundColor(
          colors.intent.success.default,
          'default',
          'intent-success'
        )}
        ${stylesColor(colors.typography.inverted.default)}
      `;
      }
    }};
`;

const warningStyling = css`
  ${stylesBase} ${props => {
      if (props.link) {
        return `
        ${stylesBackgroundColor(colors.intent.warning.light, 'link')}
        ${stylesColor(colors.intent.warning.default, 'intent-warning')}
      `;
      } else {
        return `
        ${stylesBoxShadow()}
        ${stylesBackgroundColor(
          colors.intent.warning.default,
          'default',
          'intent-warning'
        )}
        ${stylesColor(colors.typography.inverted.default)}
      `;
      }
    }};
`;

const dangerStyling = css`
  ${stylesBase} ${props => {
      if (props.link) {
        return `
        ${stylesBackgroundColor(colors.intent.danger.light, 'link')}
        ${stylesColor(colors.intent.danger.default, 'intent-danger')}
      `;
      } else {
        return `
        ${stylesBoxShadow()}
        ${stylesBackgroundColor(
          colors.intent.danger.default,
          'default',
          'intent-danger'
        )}
        ${stylesColor(colors.typography.inverted.default)}
      `;
      }
    }};
`;

// Different browsers may use different default types for the <button> element.
const DEFAULT_TYPE = 'button';

const intents = {
  default: defaultStyling,
  danger: dangerStyling,
  muted: mutedStyling,
  success: successStyling,
  warning: warningStyling,
};

export const Button = styled.button.attrs({
  type: props => props.type || DEFAULT_TYPE,
})`
  ${disabledStyling};
  ${({ intent = 'default' }) => intents[intent]};
`;

Button.intents = {};
Object.keys(intents).forEach(key => {
  Button.intents[key] = key;
});

Button.sizes = {
  default: 'default',
  large: 'large',
};

export default Button;
