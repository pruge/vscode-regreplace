/**
 * Utils
 *
 * @author Dominique Rau [domi.github@gmail.com](mailto:domi.github@gmail.com)
 * @version 0.0.1
 */

import { Range, workspace } from 'vscode';
import { parse } from 'hjson';
const clearModule = require('clear-module');
import { watchFile, readFileSync } from 'fs';
const localPath = __dirname + '/settings.json';

let settings = parse(readFileSync(localPath).toString()).settings || [];

export const EXTENSION_NAME = 'regreplace';

watchFile(localPath, reloadSettings);

export function reloadSettings() {
  clearModule(localPath);
  settings = parse(readFileSync(localPath).toString()).settings || [];
}

export function getConfiguration<T>(key: string): T {
  return settings;
}

export function getMaxRange(): Range {
  return new Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
}
