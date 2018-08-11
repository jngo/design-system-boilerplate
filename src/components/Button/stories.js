import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';

const sizesKeys = Object.keys(Button.sizes);
const intentsKeys = Object.keys(Button.intents);
const variations = [{}, { disabled: true }, { link: true }];

sizesKeys.forEach(size =>
  storiesOf('Button', module).add(size, () => (
    <React.Fragment>
      {intentsKeys.map(intent => (
        <section>
          {variations.map((props, index) => [
            <Button
              key={index}
              intent={intent}
              size={size}
              {...props}>
              {intent} {Object.keys(props).join(' ')}
            </Button>,
          ])}
        </section>
      ))}
    </React.Fragment>
  ))
);

