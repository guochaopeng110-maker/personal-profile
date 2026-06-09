# Issue tracker: GitHub

本仓库的 Issues 和 PRD 使用 GitHub Issues 进行管理。相关操作使用 `gh` CLI。

仓库地址：`https://github.com/guochaopeng110-maker/personal-profile`

## 约定

- 创建 issue：`gh issue create --title "..." --body "..."`
- 查看 issue：`gh issue view <number> --comments`
- 列出 issue：`gh issue list`
- 评论 issue：`gh issue comment <number> --body "..."`
- 增删标签：`gh issue edit <number> --add-label "..."` 或 `--remove-label "..."`
- 关闭 issue：`gh issue close <number> --comment "..."`

在仓库克隆目录内执行时，`gh` 会根据 Git 远程自动识别当前仓库。

## 当技能说“发布到 issue tracker”时

创建一个 GitHub issue。

## 当技能说“获取相关 ticket”时

执行 `gh issue view <number> --comments` 读取对应的 GitHub issue。
