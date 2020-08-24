/**
 * Utils
 *
 * @author Dominique Rau [domi.github@gmail.com](mailto:domi.github@gmail.com)
 * @version 0.0.1
 */

import { Range, workspace } from 'vscode';
const clearModule = require('clear-module');
import setting from './settings';
import { watchFile } from 'fs';
const localPath = __dirname + '/settings';
// const settings = existsSync(localPath) ? require(localPath).default : {};

let settings = require(localPath).default || [];

export const EXTENSION_NAME = 'regreplace';

watchFile(localPath + '.js', reloadSettings);

export function reloadSettings() {
  clearModule(localPath);
  settings = require(localPath).default || [];
}

export function getConfiguration<T>(key: string): T {
  return settings;
}

export function getMaxRange(): Range {
  return new Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
}
