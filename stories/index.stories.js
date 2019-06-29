/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import ChatSetup from './ChatSetup'

storiesOf('BottomBar', module)
  .add('Basic', () => ({
    components: { ChatSetup },
    template: `
  <ChatSetup/>
  `
  }))
