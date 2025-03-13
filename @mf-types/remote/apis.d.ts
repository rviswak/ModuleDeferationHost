
    export type RemoteKeys = 'remote/Counter' | 'remote/ImgMediaCard';
    type PackageType<T> = T extends 'remote/ImgMediaCard' ? typeof import('remote/ImgMediaCard') :T extends 'remote/Counter' ? typeof import('remote/Counter') :any;