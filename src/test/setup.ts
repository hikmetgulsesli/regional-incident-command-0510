import { beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';

// jsdom localStorage mock is automatic, but we clear it before each test.
beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});
