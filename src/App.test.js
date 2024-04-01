import { render, screen } from '@testing-library/react'
import App from './App'

test('renders a header', () => {
  render(<App />)
  const header = document.querySelector('header')
  expect(header).toBeInTheDocument()
})

test('renders app (React) logo', () => {
  render(<App />)
  const appLogo = document.querySelector('img.App-logo')
  expect(appLogo).toBeInTheDocument()
})

test('renders app (React) logo with value in alt attribute', () => {
  render(<App />)
  const appLogo = document.querySelector('img.App-logo')
  expect(appLogo).toHaveAttribute('alt', 'logo')
})

test('renders custom tagline', () => {
  render(<App />)
  const tagline = screen.getByText('This app will soon be another React tic-tac-toe game.')
  expect(tagline).toBeInTheDocument()
})

test('does not render any links', () => {
  render(<App />)
  const learnReactLink = document.querySelector('a')
  expect(learnReactLink).not.toBeInTheDocument()
})