import { join } from 'node:path';
import { readTextAsync } from '@gmjs/fs-async';
import { PackageJson } from './package-json';

export async function readPackageJsonAsync(
  packageJsonDirectory: string,
): Promise<PackageJson> {
  return JSON.parse(
    await readTextAsync(join(packageJsonDirectory, 'package.json')),
  );
}
