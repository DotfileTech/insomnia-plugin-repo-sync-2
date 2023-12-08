class WorkspaceRepo {
  constructor(context, workspace) {
    this.context = context;
    this.storeKey = 'insomnia-plugin-repo-sync-workspace-' + workspace._id;
  }

  async getPath() {
    return await this.context.store.getItem(this.storeKey);
  }

  async setPath(path) {
    return await this.context.store.setItem(this.storeKey, path);
  }

  async isConfigured() {
    return await this.context.store.hasItem(this.storeKey);
  }
}

module.exports = WorkspaceRepo;
