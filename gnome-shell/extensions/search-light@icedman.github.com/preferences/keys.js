'use strict';

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { PrefKeys } = Me.imports.preferences.prefKeys;

var schemaId = 'org.gnome.shell.extensions.search-light';

var SettingsKeys = new PrefKeys();
SettingsKeys.setKeys({
  'border-radius': {
    default_value: 0,
    widget_type: 'scale',
  },
  'border-thickness': {
    default_value: 0,
    widget_type: 'dropdown',
    test: { values: [0, 1, 2, 3] },
  },
  'border-color': {
    default_value: [1, 1, 1, 1],
    widget_type: 'color',
  },
  'scale-width': {
    default_value: 0.2,
    widget_type: 'scale',
  },
  'scale-height': {
    default_value: 0.2,
    widget_type: 'scale',
  },
  'background-color': {
    default_value: [0, 0, 0, 0.5],
    widget_type: 'color',
  },
  'preferred-monitor': {
    default_value: 0,
    widget_type: 'dropdown',
    test: { values: [0, 1, 2] },
  },
  'msg-to-ext': {
    default_value: '',
    widget_type: 'string',
  },
  'shortcut-search': {
    default_value: [],
    widget_type: 'shortcut',
  },
  'popup-at-cursor-monitor': {
    default_value: false,
    widget_type: 'switch',
  },
  'blur-background': {
    default_value: false,
    widget_type: 'switch',
  },
  'blur-sigma': {
    default_value: 30,
    widget_type: 'scale',
  },
  'blur-brightness': {
    default_value: 0.6,
    widget_type: 'scale',
  },
  'font-size': {
    default_value: 0,
    widget_type: 'dropdown',
    options: [0, 16, 18, 20, 22, 24],
  },
  'entry-font-size': {
    default_value: 1,
    widget_type: 'dropdown',
    options: [0, 16, 18, 20, 22, 24],
  },
  'text-color': {
    default_value: [1, 1, 1, 0],
    widget_type: 'color',
  },
  'entry-text-color': {
    default_value: [1, 1, 1, 0],
    widget_type: 'color',
  },
  'show-panel-icon': {
    default_value: false,
    widget_type: 'switch',
  },
});
