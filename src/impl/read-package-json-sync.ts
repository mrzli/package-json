import { join } from 'node:path';
import { readTextSync } from '@gmjs/fs-sync';
import { PackageJson } from '../types';

export function readPackageJsonSync(packageJsonDirectory: string): PackageJson {
  return JSON.parse(readTextSync(join(packageJsonDirectory, 'package.json')));
}
