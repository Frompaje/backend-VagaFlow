import { vi } from "vitest";

export const mockRepository = {
  create: vi.fn(),
  findByEmail: vi.fn(),
};
