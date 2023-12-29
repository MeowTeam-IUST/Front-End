// DefaultDashboard.test.js
import { expect } from 'vitest'
import { render } from '@testing-library/react'
import DefaultDashboard from './DefaultDashboard'

describe('DefaultDashboard Component', () => {
  

  it('renders last order section correctly', async () => {
    const { getByText } = render(<DefaultDashboard />)
    
    // Assert that the last order section is rendered correctly
    expect(getByText('وضعیت آخرین سفارش')).toBeVisible()
    expect(getByText('در انتظار پرداخت')).toBeVisible()
    expect(getByText('پیگیری سفارش')).toBeVisible()
  })

  it('renders repeated purchases section correctly', async () => {
    const { getByText } = render(<DefaultDashboard />)
    
    // Assert that the repeated purchases section is rendered correctly
    expect(getByText('خریدهای پرتکرار شما')).toBeVisible()
  })

  it('renders the shopping cart icon', async () => {
    const { getByAltText } = render(<DefaultDashboard />)
    
    // Assert that the shopping cart icon is present
    expect(getByAltText('Shopping Cart')).toBeVisible()
  })
  
  // You can add more tests based on your specific requirements
})
