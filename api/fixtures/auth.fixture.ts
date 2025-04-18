import { AuthService, MockData } from "@api-infra"
import { User } from "@api-infra";
import { test as base } from '@playwright/test';

type AuthFixtures = {
  authenticationService: AuthService;
  mockUser: User;
  mockCredentials: { username: string, password: string }
}

export const authFixtures = base.extend<AuthFixtures>({
  authenticationService: async ({ request }, use) => {
    const authService = new AuthService(request);
    await use(authService);
  },

  mockUser: async ({ }, use) => {
    const mockData = new MockData();
    const mockUser = mockData.generateMockUser();
    await use(mockUser);
  },

  mockCredentials: async ({ authenticationService: authService, mockUser }, use) => {
    const response = await authService.register(mockUser);
    const responseBody = await response.json();
    await use({
      username: responseBody.username,
      password: responseBody.password
    })
  }
})