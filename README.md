# Git Branch Deletion Script

This script (`remove.mjs`) helps you delete Git branches locally or remotely. Before using the script, please ensure that you have `zx` installed globally on your system.

## Prerequisites

- **zx**: Install `zx` globally using the following command:

   ```bash
   npm install -g zx
   ```

## How to Use

1. Clone the Git repository or download the script (`remove.mjs`) to your local system.

2. Run the script using `zx` in your repository's root directory. For example:

   ```bash
   cd my-project
   zx /path/to/script/remove.mjs
   ```

## Options

The script supports the following options:

- `--remote`: Use this flag to delete remote branches instead of local branches. For example:

  ```bash
  zx /path/to/script/remove.mjs --remote
  ```

- `--exclude`: You can exclude specific branches from deletion, by default the script will not delete the `main, master, develop, development, and test` branches. For example:

  ```bash
  zx /path/to/script/remove.mjs --exclude=feature-x,bugfix-y
  ```

## Important Notes

- Certain branches (`main`, `master`, `develop`, `development`, and `test`) are considered permanent and will not be deleted to prevent accidental removal of important branches.

- Attempting to delete the `main` branch will result in an error message, and the script will terminate to protect against accidental deletion.

---

Feel free to use and modify this script to suit your specific requirements. If you encounter any issues or have suggestions for improvements, please create an issue or submit a pull request on [GitHub](https://github.com/your-repo-url).

Happy branching and coding! 😄
