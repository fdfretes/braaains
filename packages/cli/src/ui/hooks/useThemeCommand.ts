/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback } from 'react';
import { SettingScope } from '../../config/settings.js';

interface UseThemeCommandReturn {
  isThemeDialogOpen: boolean;
  openThemeDialog: () => void;
  handleThemeSelect: (themeName: string | undefined, scope: SettingScope) => void;
  handleThemeHighlight: (themeName: string | undefined) => void;
}

export const useThemeCommand = (): UseThemeCommandReturn => {
  const openThemeDialog = useCallback(() => {}, []);
  const handleThemeSelect = useCallback((_themeName: string | undefined, _scope: SettingScope) => {}, []);
  const handleThemeHighlight = useCallback((_themeName: string | undefined) => {}, []);

  return {
    isThemeDialogOpen: false,
    openThemeDialog,
    handleThemeSelect,
    handleThemeHighlight,
  };
};
