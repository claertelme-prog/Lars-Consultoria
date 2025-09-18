[build]
  command = "pnpm run build"
  publish = "dist"
  base = "/"

[build.environment]
  PNPM_VERSION = "8"
