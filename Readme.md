 

 

 

基于隐语义模型的短视频推荐系统应用研究

# 一、软件介绍

## 1.1软件概要

近年来,电子平台的数据呈海量增长趋势,导致系统推荐的正确率下降、误差增大、效率降低,因此对个性化推荐算法的研究分析尤为必要。”拾刻短视频”软件基于微信小程序和隐语义模型在短视频推荐算法的研究应用，致力于推荐给用户真正符合用户需求和兴趣的视频内容。
   本软件的前端依托于微信小程序,后端在腾讯云服务器上部署, 采用SpringBoot搭建，JDK版本为1.8,实现用户浏览视频、关注视频号主、基于隐语义算法的视频推荐、附近地域视频筛选、评论、点赞、互动等功能。用户在微信中搜索拾刻短视频小程序即可打开本软件,无需下载。

## 1.2软件前后端部署

### 1.2.1前端部署

前端开发框架基于uni-app组件库,采用MVVM模式，利用不同组件之间的相互结合与配套样式表的使用来开发，通过微信小程序官方的API与uni-app组件库的API来进行数据存储、页面路由、网络请求,完成项目编写。

![image-20220709133434190](C:\Users\Shaojie\AppData\Roaming\Typora\typora-user-images\image-20220709133434190.png)
 

编写完的项目通过微信开发者工具自动打包到微信公众平台，经由微信官方审核通过后,即可上线。

![image-20220709133525262](C:\Users\Shaojie\AppData\Roaming\Typora\typora-user-images\image-20220709133525262.png)

上线后可在微信公众平台对小程序进行程序管理、流量监控、数据统计、广告主添加。

![image-20220709133532900](C:\Users\Shaojie\AppData\Roaming\Typora\typora-user-images\image-20220709133532900.png)

### 1.2.2后端部署

1. 在您自己的电脑里或第三方云服务器安装CentOS7系统，并安装宝塔面板，方便管理

![image-20220709133549603](C:\Users\Shaojie\AppData\Roaming\Typora\typora-user-images\image-20220709133549603.png)

2. 安装Mysql，版本要求为8.0以上，导入数据库

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image009.png)

字符集选择utf8mb4

排序规则选择utf8mb4_general_ci

3. 在宝塔面板->软件商店下载并安装Redis6.2.6

![image-20220709133608363](C:\Users\Shaojie\AppData\Roaming\Typora\typora-user-images\image-20220709133608363.png)



对于配置，无需进行过多的操作，只需设置Redis的访问密码即可

![image-20220709133614396](C:\Users\Shaojie\AppData\Roaming\Typora\typora-user-images\image-20220709133614396.png)

4. 下载并安装MongoDB 4.4.6

![image-20220709133620697](C:\Users\Shaojie\AppData\Roaming\Typora\typora-user-images\image-20220709133620697.png)

 

5. 打开终端，手动安装MinIO组件

1) 使用以下命令在运行 64 位 Intel/AMD 架构的 Linux 主机上运行独立的 MinIO 服务器。将/data 替换为您希望 MinIO 存储数据的驱动器或目录的路径。

将/data 替换为您希望 MinIO 存储数据的驱动器或目录的路径。

  wget http://dl.minio.org.cn/server/minio/release/linux-amd64/minio  chmod +x minio  ./minio server /data  

 

2) 下表列出了支持的架构。 将 wget URL 替换为您的 Linux 主机的架构。

| Architecture                | URL                                                          |
| --------------------------- | ------------------------------------------------------------ |
| 64-bit Intel/AMD            | http://dl.minio.org.cn/server/minio/release/linux-amd64/minio |
| 64-bit ARM                  | http://dl.minio.org.cn/server/minio/release/linux-arm64/minio |
| 64-bit PowerPC LE (ppc64le) | http://dl.minio.org.cn/server/minio/release/linux-ppc64le/minio |
| IBM Z-Series (S390X)        | http://dl.minio.org.cn/server/minio/release/linux-s390x/minio |

3) MinIO 部署开始使用默认的 root 凭据 minioadmin:minioadmin。您可以使用 MinIO 控制台测试部署，这是一个内置在 MinIO 服务器中的基于 Web 的嵌入式对象浏览器。将主机上运行的 Web 浏览器指向 http://127.0.0.1:9000 并使用 root 凭据登录。您可以使用浏览器来创建桶、上传对象以及浏览 MinIO 服务器的内容。

4) 后台启动MinIO指令

nohup /home/www/minio(您的Minio路径) server /home/www/miniodir(MinIO的文件存储路径) > /home/www/miniodir/minio.log(MinIO的日志文件路径) --console-address :9111(设置控制台的静态端口，否则为动态端口，不方便管理) 2>&1 &

6. 打开工程文件->skr-api模块->application-prod.yml文件，进行生产环境的环境配置，如下图所示

![img](file:///D:\qqfile\742727571\Image\C2C\Image1\Q01CEGM47_T6G3KM5]@VT@H.png)

您可以修改后端项目的端口、数据库的URL，用户名及密码等具体配置

![image-20220709133732380](C:\Users\Shaojie\AppData\Roaming\Typora\typora-user-images\image-20220709133732380.png)

7. 打包jar

1) 

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image001.png)

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)

2) 

 

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image022.jpg)

\3)    运行jar包

先将打包好的jar包上传至服务器您指定的路径，然后使用宝塔面板添加Java项目，如图所示

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image024.jpg)

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image026.jpg)

\4)    运行成功后，访问Knife4j接口文档进行测试

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image028.jpg)



 

# 二、数据库设计

## 2.1数据库操作

将对数据库的操作封装为一个模块。各个模块都要进行数据的存储，将数据的存储单独划分出来做成一个模块的好处是显而易见的，实现了系统模块间的弱耦合，方便数据的写入、读取等操作。

使用了Mybatis Generator工具自动生成Mapper文件,使SpringBoot能够更方便地对数据进行增删改查操作。

本项目使用的是MYSQL8.0版本,支持表情符号。

在对手机短信验证码的处理方面，采用了Redis。

RedisOperator.java

功能：进行简单的Key-Value操作、设置Key的剩余生存时间、判断Key是否存在、进行批量查询

 

## 2.2数据库结构

数据库设计如下表

 

| 数据库   | 表            |
| -------- | ------------- |
| skrvideo | comment       |
|          | fans          |
|          | my_liked_vlog |
|          | users         |
|          | vlog          |

 

## 2.3表结构

表名：comment  主键：id    描述：评论表

| 字段名            | 中文描述                                     | 数据类型 |
| ----------------- | -------------------------------------------- | -------- |
| id                |                                              | varchar  |
| vloger_id         | 评论的视频是哪个作者（vloger）的关联id       | varchar  |
| father_comment_id | 如果是回复留言，则本条为子留言，需要关联查询 | varchar  |
| vlog_id           | 回复的那个视频id                             | varchar  |
| comment_user_id   | 发布留言的用户id                             | varchar  |
| content           | 留言内容                                     | varchar  |
| like_counts       | 留言的点赞总数                               | int      |
| create_time       | 留言时间                                     | datetime |

 

表名：fans  主键：id    描述：粉丝表

| 字段名                | 中文描述                                                     | 数据类型 |
| --------------------- | ------------------------------------------------------------ | -------- |
| id                    |                                                              | varchar  |
| vloger_id             | 作家用户id                                                   | varchar  |
| fan_id                | 粉丝用户id                                                   | varchar  |
| is_fan_friend_of_mine | 粉丝是否是vloger的朋友，如果成为朋友，则本表的双方此字段都需要设置为1，如果有一人取关，则两边都需要设置为0 | int      |

 

表名：my_liked_vlog  主键：id    描述：点赞短视频关联表

| 字段名  | 中文描述       | 数据类型 |
| ------- | -------------- | -------- |
| id      |                | varchar  |
| user_id | 用户id         | varchar  |
| vlog_id | 喜欢的短视频id | varchar  |

 

表名：users  主键：id    描述：用户表

| 字段名                   | 中文描述                                                     | 数据类型 |
| ------------------------ | ------------------------------------------------------------ | -------- |
| id                       |                                                              | varchar  |
| mobile                   | 手机号                                                       | varchar  |
| nickname                 | 昵称，媒体号                                                 | varchar  |
| imooc_num                | 拾刻号，类似头条号，抖音号，公众号，唯一标识，需要限制修改次数，比如终生1次，每年1次，每半年1次等，可以用于付费修改。 | varchar  |
| face                     | 头像                                                         | varchar  |
| sex                      | 性别 1:男 0:女 2:保密                                        | int      |
| birthday                 | 生日                                                         | date     |
| country                  | 国家                                                         | varchar  |
| province                 | 省份                                                         | varchar  |
| city                     | 城市                                                         | varchar  |
| district                 | 区县                                                         | varchar  |
| description              | 简介                                                         | varchar  |
| bg_img                   | 个人介绍的背景图                                             | varchar  |
| can_imooc_num_be_updated | 拾刻号能否被修改，1：默认，可以修改；0，无法修改             | int      |
| created_time             | 创建时间 创建时间                                            | datetime |
| updated_time             | 更新时间 更新时间                                            | datetime |

 

表名vlog    主键：id    描述：短视频表

| 字段名          | 中文描述                                           | 数据类型 |
| --------------- | -------------------------------------------------- | -------- |
| id              |                                                    | varchar  |
| vloger_id       | 对应用户表id，vlog视频发布者                       | varchar  |
| url             | 视频播放地址                                       | varchar  |
| cover           | 视频封面                                           | varchar  |
| title           | 视频标题，可以为空                                 | varchar  |
| width           | 视频width                                          | int      |
| height          | 视频height                                         | int      |
| like_counts     | 点赞总数                                           | int      |
| comments_counts | 评论总数                                           | int      |
| is_private      | 是否私密，用户可以设置私密，如此可以不公开给比人看 | int      |
| created_time    | 创建时间 创建时间                                  | datetime |
| updated_time    | 更新时间 更新时间                                  | datetime |
| province        | 地理位置-省份,默认是11(浙江)                       | int      |
| city            | 地理位置-市,默认是88(宁波)                         | int      |

 



 

# 三、小程序界面设计与功能交互

## 1.首页界面：

在首页显示推荐视频列表，可以实现上滑下滑浏览视频，顶部可切换视频列表，同城视频列表浏览同地区作者发布的视频，好友视频列表浏览互关注（好友）发布的视频。一个视频的显示包括视频标题、视频简介、视频内容、作者头像、点赞数量和视频评论。用户可以给视频进行点赞、查看视频评论和查看作者主页。如图4-1所示。

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif)

图4-1 首页界面

##   2.评论界面：

点击首页的评论按钮会出现显示视频评论的详细界面，包括评论用户头像、评论用户昵称、评论时间和评论内容。用户可以对评论的内容进行点赞、发布评论和对自己的评论进行删除。如图4.2所示。

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image004.gif)

图4-2 评论界面

##   3.粉丝界面：

在粉丝界面可以查看所有关注了当前用户的其他用户和点击顶部切换查看当前用户的所有关注，可以对这些用户进行回关或者取关的操作，点击用户信息可以跳转对应用户的首页。如图4-3所示。

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image006.gif)

图4-3 粉丝界面

##   4.发布界面：

在发布界面可以设置发布视频的标题、简介和上传要发布的视频内容。如图4-4所示。

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image008.gif)

图4-4 发布界面

##   5.个人界面：

在个人界面可以查看自己的基本信息、粉丝数量、获赞数量、关注数量、发布的作品、点赞的视频和私密作品。在此页面可以编辑自己的资料，和删除自己发布的作品。如图4-5所示。

![img](file:///C:/Users/Shaojie/AppData/Local/Temp/msohtmlclip1/01/clip_image010.gif)

图4-5 个人界面