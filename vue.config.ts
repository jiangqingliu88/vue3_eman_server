js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/vue3_eman_server/'  // 用你的仓库名替换 'your-repo-name'
    : './'
};
