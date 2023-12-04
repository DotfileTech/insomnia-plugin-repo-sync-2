> [!WARNING]
> This plugin is no longer maintained and probably doesn't work with latest Insomnia version.  
> To easily synchronize requests in a local folder / git repository, we recommand to give [bruno](https://github.com/usebruno/bruno) a try!

---

# Insomnia Core Repo Sync Plugin 3

This plugin was developed to make it easier to sync workspaces in a given repository.

To use it, just install in your Insomnia Core application and go to > `Repo Sync - Configure` and set at the folder where you want your workspace config files to be exported/imported from.

Then you can go to `Repo Sync - Export Workspace` to instantly export your current workspace to your repo and can use `Repo Sync - Import Workspace` to import any repository changes on the current workspace. Each workspace will generate a `<workspace-name>.json` file inside your repository.

We suggest you to use it with a git repository where you can create versions of your workspaces configs.

## Changelog

See [Releases](https://github.com/DotfileTech/insomnia-plugin-repo-sync-3/releases)

## History

This plugin was forked from [insomnia-plugin-repo-sync-v2](https://github.com/Atlas-LiftTech/insomnia-plugin-repo-sync-2) due to lack of active maintenance, which was itself forked from [insomnia-plugin-repo-sync](https://github.com/klickpages/insomnia-plugin-repo-sync) due to lack of active maintenance.

At Dotfile, we synchronize our Insomnia workspace in our mono-repo, code and Insomnia requests changes are reviewed together. To make the review easier, we needed to clean the export by moving to json format and removing noisy changes like the `modified` attribute getting updated even when the request hasn't been updated.

## Contributions

Contributions are welcome. Please open an issue to discuss your idea prior to sending a PR.

## MIT License

See <https://github.com/DotfileTech/insomnia-plugin-repo-sync-3/blob/master/LICENSE>.

## About Dotfile

This library is sponsored by [Dotfile](https://www.dotfile.com/). Dotfile is the onboarding orchestration platform that helps you onboard clients and suppliers 10x faster while staying compliant.
