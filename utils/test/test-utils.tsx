import { RunOptions } from 'axe-core'
import { axe, toHaveNoViolations } from 'jest-axe'
import * as React from 'react'

import {
  fireEvent,
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'

expect.extend(toHaveNoViolations)

// type UI = Parameters<typeof rtlRender>[0]

// UI-less passthrough fallback to prevent using conditional logic in render
function ChildrenPassthrough({ children }: { children: React.ReactElement }) {
  return children
}

export interface TestOptions extends Omit<RenderOptions, 'wrapper'> {
  /**
   * optional additional wrapper, e.g. Context
   *
   * @example
   * ```ts
   * // single wrapper
   * render(<MyConponent />, {
   *  wrapper: MyContext
   * });
   *
   * // multiple wrapper
   * render(<MyConponent />, {
   *  wrapper: ({ children }) => (
   *    <ContextA>
   *      <ContextB>
   *        {children}
   *      <ContextB />
   *    <ContextA />
   *  )
   * });
   *
   * ```
   */
  wrapper?: typeof ChildrenPassthrough
}

/**
 * Custom render for @testing-library/react
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @param component the component under test
 * @param options customized test options
 */
export const render = (
  ui,
  { wrapper: Wrapper = ChildrenPassthrough, ...options }: TestOptions = {}
): RenderResult =>
  rtlRender(
    <>
      <Wrapper>{ui}</Wrapper>
    </>,
    options
  )

export { rtlRender }
export { axe }

export * from '@testing-library/react'
export type {
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-hooks'
export { act as invoke, renderHook } from '@testing-library/react-hooks'
export { default as userEvent } from '@testing-library/user-event'

export const escape = (ui: HTMLElement) =>
  fireEvent.keyDown(ui, { key: 'Escape', keyCode: 27 })

type TestA11YOptions = TestOptions & { axeOptions?: RunOptions }

/**
 * Validates against common a11y mistakes.
 *
 * Wrapper for jest-axe
 *
 * @example
 * ```jsx
 * it('passes a11y test', async () => {
 *  await testA11Y(<MyComponent />, options);
 * });
 *
 * // sometimes we need to perform interactions first to render conditional UI
 * it('passes a11y test when open', async () => {
 *  const { container } = render(<MyComponent />, options);
 *
 *  fireEvent.click(screen.getByRole('button'));
 *
 *  await testA11Y(container, options);
 * });
 * ```
 *
 * @see https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library
 */
export const testA11y = async (
  ui,
  { axeOptions, ...options }: TestA11YOptions = {}
) => {
  const container = React.isValidElement(ui)
    ? render(ui, options).container
    : ui

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const results = await axe(container, axeOptions)

  expect(results).toHaveNoViolations()
}
