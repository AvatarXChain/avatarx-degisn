import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button, Box, Flex } from '../src'

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text: 'Use the <Button /> component to render a primitive button.'
    })(() => <Button>Button</Button>)
  )
  .add(
    'Colors',
    withInfo({
      inline: true,
      text: 'Button component with different color.'
    })(() => (
      <Flex wrap>
        <Box w={1}>
          <Button mr={2}>Button</Button>
          <Button bg="success" mr={2}>
            Success
          </Button>
          <Button bg="danger" mr={2}>
            Danger
          </Button>
          <Button bg="warning" mr={2}>
            Warning
          </Button>
          <Button bg="help" mr={2}>
            Help
          </Button>
        </Box>
        <Box w={1} mt={20}>
          <Button mr={2}>
            默认
          </Button>
          <Button bg="success" mr={2}>
            成功
          </Button>
          <Button bg="danger" mr={2}>
            失败
          </Button>
          <Button bg="warning" mr={2}>
            警告
          </Button>
          <Button bg="help" mr={2}>
            帮助
          </Button>
        </Box>
        <Box w={1} mt={20}>
          <Button bg="success" inverted mr={2}>
            Success
          </Button>
          <Button bg="danger" inverted mr={2}>
            Danger
          </Button>
          <Button bg="warning" inverted mr={2}>
            Warning
          </Button>
          <Button bg="help" inverted mr={2}>
            Help
          </Button>
        </Box>
      </Flex>
    ))
  )
  .add(
    'Font size',
    withInfo({
      inline: true,
      text: 'Different size of buttons.'
    })(() => (
      <Flex align="baseline" wrap>
        <Button mr={2} f={1}>
          Size 1
        </Button>
        <Button bg="success" mr={2} f={2}>
          Size 2
        </Button>
        <Button bg="danger" mr={2} f={3}>
          Size 3
        </Button>
        <Button bg="warning" mr={2} f={4}>
          Size 4
        </Button>
        <Button bg="help" mr={2} f={5}>
          Size 5
        </Button>
      </Flex>
    ))
  )
  .add(
    'Width',
    withInfo({
      inline: true,
      text: 'Different width of buttons.'
    })(() => (
      <Flex flex="column">
        <Button w={1}>Full Width</Button>
        <Button bg="warning" w={250}>Full Width</Button>
      </Flex>
    ))
  )
  .add('Disabled',
    withInfo({
      inline: true,
      text: 'Disabled buttons',
    })(() => (
      <Flex>
        <Button disabled mr={2}>Disabled</Button>
        <Button disabled bg="success" mr={2}>
          成功
        </Button>
        <Button disabled bg="danger" mr={2}>
          失败
        </Button>
        <Button disabled bg="warning" mr={2}>
          警告
        </Button>
        <Button disabled bg="help" mr={2}>
          帮助
        </Button>
      </Flex>
    ))
  )
  .add('Scale', () => <Button scale>Scale</Button>)
  .add('Chevrons', () => (
    <Flex wrap>
      <Button bg="danger" mr={3} chevronLeft>
        Back
      </Button>
      <Button bg="success" chevronRight>
        Forward
      </Button>
    </Flex>
  ))
