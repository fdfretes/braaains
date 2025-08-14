/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSProperties } from 'react';
import { Theme, type ColorsTheme } from './theme.js';
import { SemanticColors } from './semantic-tokens.js';

const colors: ColorsTheme = {
  type: 'dark',
  Background: '#1A1B1E',
  Foreground: '#E6E6E6',
  LightBlue: '#00BFFF',
  AccentBlue: '#00BFFF',
  AccentPurple: '#FF1493',
  AccentCyan: '#00BFFF',
  AccentGreen: '#7FFF00',
  AccentYellow: '#F9E56A',
  AccentRed: '#FF6B6B',
  DiffAdded: '#19340A',
  DiffRemoved: '#3B0C0C',
  Comment: '#8B8D91',
  Gray: '#8B8D91',
  GradientColors: ['#FF1493', '#00BFFF', '#7FFF00'],
};

const semanticColors: SemanticColors = {
  text: {
    primary: colors.Foreground,
    secondary: colors.Gray,
    link: colors.AccentBlue,
    accent: colors.AccentPurple,
  },
  background: {
    primary: colors.Background,
    diff: {
      added: colors.DiffAdded,
      removed: colors.DiffRemoved,
    },
  },
  border: {
    default: colors.Gray,
    focused: colors.AccentBlue,
  },
  ui: {
    comment: colors.Comment,
    symbol: colors.Gray,
    gradient: colors.GradientColors,
  },
  status: {
    error: colors.AccentRed,
    success: colors.AccentGreen,
    warning: colors.AccentYellow,
  },
};

const rawMappings: Record<string, CSSProperties> = {
  hljs: {
    display: 'block',
    overflowX: 'auto',
    padding: '0.5em',
    background: colors.Background,
    color: colors.Foreground,
  },
  'hljs-keyword': { color: colors.AccentBlue },
  'hljs-literal': { color: colors.AccentBlue },
  'hljs-symbol': { color: colors.AccentBlue },
  'hljs-name': { color: colors.AccentBlue },
  'hljs-link': { color: colors.AccentBlue, textDecoration: 'underline' },
  'hljs-built_in': { color: colors.AccentCyan },
  'hljs-type': { color: colors.AccentCyan },
  'hljs-number': { color: colors.AccentGreen },
  'hljs-class': { color: colors.AccentGreen },
  'hljs-string': { color: colors.AccentYellow },
  'hljs-meta-string': { color: colors.AccentYellow },
  'hljs-regexp': { color: colors.AccentRed },
  'hljs-template-tag': { color: colors.AccentRed },
  'hljs-subst': { color: colors.Foreground },
  'hljs-function': { color: colors.Foreground },
  'hljs-title': { color: colors.Foreground },
  'hljs-params': { color: colors.Foreground },
  'hljs-formula': { color: colors.Foreground },
  'hljs-comment': { color: colors.Comment, fontStyle: 'italic' },
  'hljs-quote': { color: colors.Comment, fontStyle: 'italic' },
  'hljs-doctag': { color: colors.Comment },
  'hljs-meta': { color: colors.Gray },
  'hljs-meta-keyword': { color: colors.Gray },
  'hljs-tag': { color: colors.Gray },
  'hljs-variable': { color: colors.AccentPurple },
  'hljs-template-variable': { color: colors.AccentPurple },
  'hljs-attr': { color: colors.LightBlue },
  'hljs-attribute': { color: colors.LightBlue },
  'hljs-builtin-name': { color: colors.LightBlue },
  'hljs-section': { color: colors.AccentYellow },
  'hljs-emphasis': { fontStyle: 'italic' },
  'hljs-strong': { fontWeight: 'bold' },
  'hljs-bullet': { color: colors.AccentYellow },
  'hljs-selector-tag': { color: colors.AccentYellow },
  'hljs-selector-id': { color: colors.AccentYellow },
  'hljs-selector-class': { color: colors.AccentYellow },
  'hljs-selector-attr': { color: colors.AccentYellow },
  'hljs-selector-pseudo': { color: colors.AccentYellow },
  'hljs-addition': {
    backgroundColor: colors.AccentGreen,
    display: 'inline-block',
    width: '100%',
  },
  'hljs-deletion': {
    backgroundColor: colors.AccentRed,
    display: 'inline-block',
    width: '100%',
  },
};

export const Future = new Theme('Future', 'dark', rawMappings, colors, semanticColors);
