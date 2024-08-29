import { create } from 'zustand'

interface AuthState {
  accessToken: string | null
  campusCode: string | null
  refreshToken: string | null
  csrfToken: string | null
  setAuthData: (
    accessToken: string,
    campusCode: string,
    refreshToken: string,
    csrfToken: string,
  ) => void
  clearTokens: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  campusCode: null,
  refreshToken: null,
  csrfToken: null,

  setAuthData: (accessToken: string, campusCode: string, refreshToken: string, csrfToken: string) =>
    set({
      accessToken,
      campusCode,
      refreshToken,
      csrfToken,
    }),

  clearTokens: () =>
    set({
      accessToken: null,
      campusCode: null,
      refreshToken: null,
      csrfToken: null,
    }),
}))

export default useAuthStore
