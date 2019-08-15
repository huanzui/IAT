# 接口自动化任务配置

## 新建任务

定时任务和即时任务的新建任务，都是到这个新建任务页面。

| 字段名 | 字段描述 |
| :-- | :--  |
| 项目名称 | 这里取的是项目配置处可用的项目，下面的版本和用例都依赖这里所选的项目 |
| 任务类型 | **即时任务**：即时任务可立即执行 <br />**定时任务**：只会在指定的时间每日执行  |
| 任务名称 | 该任务的名称 |
| 任务描述 | 该任务的描述 |
| 参数类型 | **正式版**：默认是用的正式版全局参数 <br />**测试版**：任务用例中的变量值则为测试版本参数 |
| 测试域名 | 这里可以指定全局的测试域名，如果用例中单独制定了域名，优先使用用例的域名 |
| 代理设置 | 全局的代理 |
| 请求头设置 | 全局的请求头设置，对于有此特殊设置需求，可以在此设置。用例中也可以单独设置。 |
| 默认参数 | 全局请求的默认参数，常见的如接口版本号等等，可以在此设置。 |
| 用例数据 | 用例是根据项目来的，只有在用例详情表里有数据的才会显示 <br />执行的顺序根据勾选的顺序来的 |
| 操作 | **提交**：创建任务 |

## 即时任务

即时任务列表，显示的是创建的即时任务。

| 字段名 | 字段描述 |
| :-- | :--  |
| 任务名称 | 任务的名称，点击进入任务详情页面。<br />如果任务未执行过，则可以对任务信息进行编辑 |
| 新建人 | 任务创建人 |
| 新建时间 | 任务新建时间 |
| 任务状态 | 显示当前任务的执行状态，任务列表采用的socket长连接。<br />所以这边的任务状态是会实时更新的 |
| 操作 | **开始执行**：新建的任务会显示此操作，点击后服务端开始执行该任务 <br />**查看报告**：点击进入任务报告页面，只有执行完成才会显示 <br />**删除**：点击删除该任务 |


## 定时任务

定时任务，显示的是创建的定时任务。只有关闭的定时任务才能编辑。

![ui](/img/timing.png)

| 字段名 | 字段描述 |
| :-- | :--  |
| 任务名称 | 任务的名称，点击进入任务详情页面。<br />如果任务未执行过，则可以对任务信息进行编辑 |
| 创建信息 | 任务创建人，任务新建时间 |
| 删除 | 删除当前定时任务 |
| 任务报告 | 点击进入任务报告页面 <br />定时任务默认显示最后一次的执行报告，可以通过执行日期查看指定日期的报告 |