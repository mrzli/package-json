// see https://docs.npmjs.com/cli/v6/configuring-npm/package-json

export type ReadonlyRecord<TValue> = Readonly<Record<string, TValue>>;

export type PackageJson = PackageJsonStrict & ReadonlyRecord<unknown>;

export interface PackageJsonStrict {
  readonly name?: string;
  readonly version?: string;
  readonly description?: string;
  readonly keywords?: readonly string[];
  readonly homepage?: string;
  readonly bugs?: PackageJsonBugs;
  readonly license?: string;
  readonly author?: PackageJsonPerson;
  readonly contributors?: readonly PackageJsonPerson[];
  readonly funding?: PackageJsonFunding;
  readonly files?: readonly string[];
  readonly main?: string;
  readonly browser?: string;
  readonly bin?: PackageJsonBin;
  readonly man?: readonly string[] | string;
  readonly directories?: PackageJsonDirectories;
  readonly repository?: PackageJsonRepository;
  readonly scripts?: PackageJsonScripts;
  readonly config?: ReadonlyRecord<unknown>;
  readonly dependencies?: ReadonlyRecord<string>;
  readonly devDependencies?: ReadonlyRecord<string>;
  readonly peerDependencies?: ReadonlyRecord<string>;
  readonly bundledDependencies?: readonly string[];
  readonly optionalDependencies?: ReadonlyRecord<string>;
  readonly peerDependenciesMeta?: ReadonlyRecord<unknown>;
  readonly engines?: PackageJsonEngines;
  readonly os?: readonly string[];
  readonly cpu?: readonly string[];
  readonly private?: boolean;
  readonly publishConfig?: ReadonlyRecord<unknown>;
}

export interface PackageJsonBugsObj {
  readonly url?: string;
  readonly email?: string;
}

export type PackageJsonBugs = PackageJsonBugsObj | string;

export interface PackageJsonPersonObj {
  readonly name?: string;
  readonly email?: string;
  readonly url?: string;
}

export type PackageJsonPerson = PackageJsonPersonObj | string;

export interface PackageJsonFundingObj {
  readonly type?: string;
  readonly url?: string;
}

export type PackageJsonFunding = PackageJsonFundingObj | string;

export interface PackageJsonDirectories {
  readonly lib?: string;
  readonly bin?: string;
  readonly man?: string;
  readonly doc?: string;
  readonly example?: string;
  readonly test?: string;
}

export type PackageJsonBin = ReadonlyRecord<string> | string;

export interface PackageJsonRepositoryObj {
  readonly type?: string;
  readonly url?: string;
  readonly directory?: string;
}

export type PackageJsonRepository = PackageJsonRepositoryObj | string;

export interface PackageJsonScriptsSpecial {
  readonly prepare?: string;
  readonly prepublishOnly?: string;
  readonly prepack?: string;
  readonly postpack?: string;
}

export type PackageJsonScripts = PackageJsonScriptsSpecial &
  ReadonlyRecord<string>;

export interface PackageJsonEnginesStrict {
  readonly node?: string;
  readonly npm?: string;
  readonly yarn?: string;
}

export type PackageJsonEngines = PackageJsonEnginesStrict & ReadonlyRecord<string>;
