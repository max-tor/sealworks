# Sealworks

## Building locally

The following instructions guide you on how to build the Sealworks project locally:
```
npm run build
```

## Building the Project with GitLab CI/CD

This project uses GitLab CI/CD for building and deploying the project. The build process is defined in the `.gitlab-ci.yml` file, and it is broken into two stages: build, and release.

The file is configured to use a Node.js LTS Alpine image (`node:lts-alpine`).

### Caching

The `.npm/` and `.cache/` directories are cached to speed up subsequent builds. The cache key is set to the GitLab CI/CD Commit ref slug (`${CI_COMMIT_REF_SLUG}`).

### Build Stage

The build stage contains a `deploy_to_s3` job:

1. It first installs AWS CLI (`apk add --no-cache aws-cli`).
2. Next, it installs the project dependencies (`npm ci --cache .npm --prefer-offline`).
3. The build then runs the Gatsby build command with development settings (`GATSBY_ACTIVE_ENV=development ./node_modules/.bin/gatsby build --prefix-paths`).
4. After the build, it deploys the build output to an AWS S3 bucket (`./node_modules/.bin/gatsby-plugin-s3 deploy --yes`).
5. Lastly, it creates an invalidation on AWS CloudFront to refresh the served content (`aws cloudfront create-invalidation --distribution-id E151NETYZO2LSM --paths "/*"`).

This build job will be triggered only if the commit is on the default branch.

### Release Stage

The release stage contains a `create_build` job:

1. It first installs AWS CLI (`apk add --no-cache aws-cli`).
2. Next, it installs the project dependencies (`npm ci --cache .npm --prefer-offline`).
3. The script then creates a release build (`./node_modules/.bin/gatsby build --prefix-paths`).

The build artifacts (from the `public` directory) are saved and can be downloaded from GitLab after the build. This build job will be triggered only if the commit is on the master branch.

The Docker runner is used to run these jobs.