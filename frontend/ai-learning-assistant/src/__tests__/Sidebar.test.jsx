import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../context/AuthContext', () => ({
  useAuth: () => ({ logout: vi.fn() }),
}))

vi.mock('../hooks/useCookieConsent', () => ({
  default: () => ({ resetConsent: vi.fn() }),
}))

import Sidebar from '../components/layout/Sidebar'

describe('Sidebar', () => {

  const renderSidebar = () =>
    render(
      <MemoryRouter>
        <Sidebar isSidebarOpen={true} toggleSidebar={vi.fn()} />
      </MemoryRouter>
    )

  it('affiche le lien Dashboard', () => {
    renderSidebar()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('affiche le lien Documents', () => {
    renderSidebar()
    expect(screen.getByText('Documents')).toBeInTheDocument()
  })

  it('affiche le bouton Logout', () => {
    renderSidebar()
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })

  it('contient une balise nav', () => {
    const { container } = renderSidebar()
    expect(container.querySelector('nav')).not.toBeNull()
  })

})