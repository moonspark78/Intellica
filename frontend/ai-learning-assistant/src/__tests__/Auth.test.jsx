import { describe, it, expect, vi, beforeEach } from 'vitest'
import authService from '../services/authService'
import axiosInstance from '../utils/axiosInstance'

vi.mock('../utils/axiosInstance', () => ({
  default: {
    post: vi.fn(),
    get: vi.fn(),
  },
}))

describe('authService - login', () => {

  beforeEach(() => vi.clearAllMocks())

  it('retourne les données si login réussi', async () => {
    axiosInstance.post.mockResolvedValue({ data: { token: 'abc123' } })
    const result = await authService.login('alice@test.com', 'mdp')
    expect(result.token).toBe('abc123')
  })

  it('envoie bien email et password', async () => {
    axiosInstance.post.mockResolvedValue({ data: {} })
    await authService.login('alice@test.com', 'mdp')
    expect(axiosInstance.post).toHaveBeenCalledWith(
      expect.any(String),
      { email: 'alice@test.com', password: 'mdp' }
    )
  })

  it('lance une erreur si login échoue', async () => {
    axiosInstance.post.mockRejectedValue({
      response: { data: { message: 'Identifiants invalides' } }
    })
    await expect(authService.login('x@x.com', 'faux'))
      .rejects.toMatchObject({ message: 'Identifiants invalides' })
  })

})