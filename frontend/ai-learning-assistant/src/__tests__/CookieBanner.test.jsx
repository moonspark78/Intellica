import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import CookieBanner from '../components/CookieBanner'

const renderBanner = (onAccept = vi.fn(), onRefuse = vi.fn()) =>
  render(
    <MemoryRouter>
      <CookieBanner onAccept={onAccept} onRefuse={onRefuse} />
    </MemoryRouter>
  )

describe('CookieBanner', () => {

  it('affiche le titre Gestion des cookies', () => {
    renderBanner()
    expect(screen.getByText('Gestion des cookies')).toBeInTheDocument()
  })

  it('appelle onAccept quand on clique Accepter', () => {
    const onAccept = vi.fn()
    renderBanner(onAccept)
    fireEvent.click(screen.getByText('Accepter'))
    expect(onAccept).toHaveBeenCalledOnce()
  })

  it('appelle onRefuse quand on clique Refuser', () => {
    const onRefuse = vi.fn()
    renderBanner(vi.fn(), onRefuse)
    fireEvent.click(screen.getByText('Refuser'))
    expect(onRefuse).toHaveBeenCalledOnce()
  })

  it('affiche le lien politique de confidentialité', () => {
    renderBanner()
    expect(screen.getByText('En savoir plus')).toBeInTheDocument()
  })

})