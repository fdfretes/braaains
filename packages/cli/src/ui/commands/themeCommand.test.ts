/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest';
import { themeCommand } from './themeCommand.js';

describe('themeCommand', () => {
  it('is disabled in this fork', () => {
    expect(themeCommand).toBeNull();
  });
});
