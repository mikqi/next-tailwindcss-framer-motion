import { render, screen, testA11y } from '@/utils/test'

import { Button } from './Button'

test('renders Button component', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button')).toHaveTextContent('Click me')
})

test('renders Button component with left icon', () => {
  const LeftIcon = () => <svg role="img" />
  render(<Button leftIcon={LeftIcon}>Click me</Button>)
  expect(screen.getByRole('button')).toHaveTextContent('Click me')
  expect(screen.getByRole('img')).toBeInTheDocument()
})

test('renders Button component with right icon', () => {
  const RightIcon = () => <svg role="img" />
  render(<Button rightIcon={RightIcon}>Click me</Button>)
  expect(screen.getByRole('button')).toHaveTextContent('Click me')
  expect(screen.getByRole('img')).toBeInTheDocument()
})

test('Button should pass a11y test', async () => {
  const LeftIcon = () => <svg />
  const RightIcon = () => <svg />
  const { container } = render(
    <Button size="xs" leftIcon={LeftIcon} rightIcon={RightIcon}>
      Click me
    </Button>
  )
  await testA11y(container)
})
