import * as React from 'react'

import Footer from '../src/components/footer/Footer'
import Navigation from '../src/components/navigation/Navigation'

import { storiesOf } from '@storybook/react'
import { Welcome } from '@storybook/react/demo'

storiesOf('TypeScript and Storybook', module)
  .add('Sample Widget', () => <Footer />)
  .add('Navigation', () => <Navigation />)
