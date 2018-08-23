import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button, Box, Flex, Icon } from '../src'

storiesOf('Button', module)
  .add(
    'Basic',
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
          <Button mr={10}>Button</Button>
          <Button bg="success" mr={10}>
            Success
          </Button>
          <Button bg="danger" mr={10}>
            Danger
          </Button>
          <Button bg="warning" mr={10}>
            Warning
          </Button>
          <Button bg="help" mr={10}>
            Help
          </Button>
        </Box>
        <Box w={1} mt={20}>
          <Button mr={10}>默认</Button>
          <Button bg="success" mr={10}>
            成功
          </Button>
          <Button bg="danger" mr={10}>
            失败
          </Button>
          <Button bg="warning" mr={10}>
            警告
          </Button>
          <Button bg="help" mr={10}>
            帮助
          </Button>
        </Box>
        <Box w={1} mt={20}>
          <Button bg="success" inverted mr={10}>
            Success
          </Button>
          <Button bg="danger" inverted mr={10}>
            Danger
          </Button>
          <Button bg="warning" inverted mr={10}>
            Warning
          </Button>
          <Button bg="help" inverted mr={10}>
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
        <Button mr={10} f={1}>
          Size 1
        </Button>
        <Button bg="success" mr={10} f={2}>
          Size 2
        </Button>
        <Button bg="danger" mr={10} f={3}>
          Size 3
        </Button>
        <Button bg="warning" mr={10} f={4}>
          Size 4
        </Button>
        <Button bg="help" mr={10} f={5}>
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
        <Button bg="warning" w={250}>
          Full Width
        </Button>
      </Flex>
    ))
  )
  .add(
    'Disabled',
    withInfo({
      inline: true,
      text: 'Disabled buttons'
    })(() => (
      <Flex>
        <Button disabled mr={10}>
          Disabled
        </Button>
        <Button disabled bg="success" mr={10}>
          成功
        </Button>
        <Button disabled bg="danger" mr={10}>
          失败
        </Button>
        <Button disabled bg="warning" mr={10}>
          警告
        </Button>
        <Button disabled bg="help" mr={10}>
          帮助
        </Button>
      </Flex>
    ))
  )
  .add('Scale', () => <Button scale>Scale</Button>)
  .add('Icon', () => (
    <Flex wrap>
      <Button mr={10} icon="github">
        Back
      </Button>
      <Button bg="danger" mr={10}>
        哈哈
      </Button>
      <Button bg="success" chevronRight>
        Forward
      </Button>
    </Flex>
  ))
