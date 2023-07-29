#!/usr/bin/env zx

$.verbose = false

const isRemote = !!argv.remote
const exclude = argv.exclude

const excludeBranchs = exclude 
  ? exclude.split(',').map(branch => branch.trim())
  : ['main', 'master', 'develop', 'development', 'test']


const currentBranch = await $`git branch --show-current`

const branchs = isRemote ? await $`git branch -r` : await $`git branch`

const branchesToDelete = branchs
  .toString()
  .split('\n')
  .map(branch => branch.trim())
  .filter(branch => branch.startsWith('*') === false) // remove current branch
  .map(branch => branch.replace('origin/', '')) // remove origin/ prefix
  .filter(branch => branch.startsWith('HEAD') === false) // remove HEAD
  .filter(branch => branch !== '' && !excludeBranchs.includes(branch)) // remove empty and permanent branches
  .filter(branch => branch !== currentBranch) // remove current branch

// make sure that not includes main branch
if (branchesToDelete.includes('main')) {
  console.log('Cannot delete main branch')
  process.exit(1)
}

if (branchesToDelete.length === 0) {
  console.log('No branches to delete')
  process.exit(0)
}

await Promise.all(branchesToDelete.map(async branch => {

  if (isRemote) {
    await $`git push origin --delete ${branch}`
  } else {
    await $`git branch -D ${branch}`
  }

  console.log(`Deleted branch ${branch}`)
}))

console.log(`Deleted ${branchesToDelete.length} branches`)
