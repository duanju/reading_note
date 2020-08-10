# git commit format

<header>:<type> [scope] <subject]>

subject 以第一人称现在时描述，长度不超过50字。结尾不加任何标点符号。

[body]

以第一人称现在时描述。Body部分应该清楚包括当前改的的原因和前后行为的对比。

[footer]:[Breaks] [Close]

## typs

1. feat: 新功能
2. fix
3. docs
4. style
5. refactor
6. build
7. perf
8. test
9. chore
10. ci
11. revert

# commitlint

https://commitlint.js.org/#/guides-local-setup

## add commitlint locally

` npm install --save-dev @commitlint/{cli,config-conventional} `

    echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

## add git hooks for lint check before creating git commit

` npm install --save-dev husky`

add config in package.json

```
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## Integrate lintcommit in CI

https://commitlint.js.org/#/guides-ci-setup
