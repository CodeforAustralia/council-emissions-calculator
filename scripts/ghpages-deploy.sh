#!/bin/bash
set -euo pipefail

# N.B: script needs a `gh-pages` branch in `origin` for successful execution.
# Follow instructions below to initialise one if necessary:
# ```
# git checkout --orphan gh-pages
# git rm -rf .
# git commit --allow-empty -m "Initializing gh-pages branch"
# git push origin gh-pages
# ```
# Don't forget to checkout to main branch once done!


trap 'cleanup' EXIT

cd $(dirname $0)/..

cleanup() {
  echo "cleaning up"
  echo "checking out main branch."
  git checkout main
}

commit_sha=$(git rev-parse --short HEAD)
branch_name=$(git branch --show-current)

if [[ -d "out" ]]; then
  rm -rf out
fi

npm run export

# Initialize a gh-pages branch... GitHub expects this branch to exist to publish a project website from it.
git checkout --orphan gh-pages

# clean out all the other files in gh-pages branch
git rm -rf .

git pull origin gh-pages --commit

out_contents=$(ls out)

for f in $out_contents; do
  if [[ -f $f ]]; then
    git rm -f $f
  elif [[ -d $f ]]; then
    git rm -rf $f
  fi
done

mv out/* .

echo scripts/ > .gitignore
echo out/ >> .gitignore
echo node_modules >> .gitignore
echo .next/ >> .gitignore

git add .

git commit -m "deploying static files from ${branch_name} branch commit sha ${commit_sha} to gh-pages"

git push origin gh-pages

rm -rf .next out _next