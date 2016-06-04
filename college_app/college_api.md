#### 服务端短信验证接口 
                + 方法:`POST`   接口:`/sms/verify`

                + 请求(Request)  (application/x-www-form-urlencoded
                )

                                appkey=f71152e118aa&phone=13653858031&zone=86&code=1083

                + 响应(Response) 状态码:200   响应类型: (text/plain; charset=utf-8)

                        + 响应头-Headers

                                        Expires: 0

                        + 响应体-Body

                                        {"status":468}


                #### 首页滚动条 
                + 方法:`GET`   接口:`/api/school/slider?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取滑块成功",
                                                "data": [
                                                        {
                                                                "school_slider_id": 1,
                                                                "school_slider_title": "滑动图1",
                                                                "school_slider_url": "static/res/slider/slider_160517_195800.jpg",
                                                                "school_position_type": "1",
                                                                "school_slider_url_ab": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_195800.jpg"
                                                        },
                                                        {
                                                                "school_slider_id": 2,
                                                                "school_slider_title": "滑动图2",
                                                                "school_slider_url": "static/res/slider/slider_160517_195900.jpg",
                                                                "school_position_type": "1",
                                                                "school_slider_url_ab": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_195900.jpg"
                                                        },
                                                        {
                                                                "school_slider_id": 3,
                                                                "school_slider_title": "滑动图3",
                                                                "school_slider_url": "static/res/slider/slider_160517_200000.jpg",
                                                                "school_position_type": "1",
                                                                "school_slider_url_ab": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_200000.jpg"
                                                        }
                                                ]
                                        }


                #### 学校概况 
                + 方法:`GET`   接口:`/api/school/info?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (text/html)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                                <html>
                                                <head>
                                                        <meta charset="utf-8">
                                                        <title></title>
                                                </head>
                                                <body>
                                                     
                                                        <ul>
                                                                <li>
                                                                    郑州大学(简称郑大，英文简称：ZZU)是国家“211工程”重点建设高校、国家“中西部高校提升综合实力计划”入选高校、河南省人民政府与教育部共建高校。学校总占地面积5700余亩，校本部四个校区分别是：主校区（郑州市科学大道100号）、南校区（郑州市大学北路75号）、北校区（郑州市文化路97号）和东校区（郑州市大学北路40号）。学校面向全国招生，现有全日制普通本科生5.6万人、各类在校研究生1.5万人，以及来自60余个国家和地区的留学生1600余人。
                                        
                                        郑州大学(简称郑大，英文简称：ZZU)是国家“211工程”重点建设高校、国家“中西部高校提升综合实力计划”入选高校、河南省人民政府与教育部共建高校。学校总占地面积5700余亩，校本部四个校区分别是：主校区（郑州市科学大道100号）、南校区（郑州市大学北路75号）、北校区（郑州市文化路97号）和东校区（郑州市大学北路40号）。学校面向全国招生，现有全日制普通本科生5.6万人、各类在校研究生1.5万人，以及来自60余个国家和地区的留学生1600余人。
                                        
                                        郑州大学(简称郑大，英文简称：ZZU)是国家“211工程”重点建设高校、国家“中西部高校提升综合实力计划”入选高校、河南省人民政府与教育部共建高校。学校总占地面积5700余亩，校本部四个校区分别是：主校区（郑州市科学大道100号）、南校区（郑州市大学北路75号）、北校区（郑州市文化路97号）和东校区（郑州市大学北路40号）。学校面向全国招生，现有全日制普通本科生5.6万人、各类在校研究生1.5万人，以及来自60余个国家和地区的留学生1600余人。
                                        
                                                                </li>
                                                        </ul>
                                                </body>
                                        </html>
                                        


                #### 首页小图新闻 
                + 方法:`GET`   接口:`/api/school/simgnewslist?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取新闻成功",
                                                "data": [
                                                        {
                                                                "school_news_id": 7,
                                                                "school_news_title": "我校劳模疗养团平安返校",
                                                                "school_news_thumb": "static/res/news/160518/110723192521850222.jpg",
                                                                "school_news_thumb_ab": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/110723192521850222.jpg"
                                                        },
                                                        {
                                                                "school_news_id": 6,
                                                                "school_news_title": "校领导看望慰问春节期间坚守一线工作人员",
                                                                "school_news_thumb": "static/res/news/160518/1191623930.jpg",
                                                                "school_news_thumb_ab": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/1191623930.jpg"
                                                        },
                                                        {
                                                                "school_news_id": 3,
                                                                "school_news_title": "郑州大学庆祝合校十五周年“郑大情 中国梦”教职工文艺汇演成功举办",
                                                                "school_news_thumb": "static/res/news/160518/8397062890.jpg",
                                                                "school_news_thumb_ab": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/8397062890.jpg"
                                                        },
                                                        {
                                                                "school_news_id": 1,
                                                                "school_news_title": "全省规范化司法所长培训班在郑州大学举办",
                                                                "school_news_thumb": "static/res/news/160518/1191623930.jpg",
                                                                "school_news_thumb_ab": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/1191623930.jpg"
                                                        }
                                                ]
                                        }


                #### 历史沿革 
                + 方法:`GET`   接口:`/api/school/schoolhistory?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (text/html)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                                <html>
                                                <head>
                                                        <meta charset="utf-8">
                                                        <title></title>
                                                </head>
                                                <body>
                                                     
                                                        <ul>
                                                                <li>
                                                                    原郑州大学创建于1956年，是新中国成立后国家创办的第一所综合性大学。1991年黄河大学并入。1996年11月通过国家“211工程”部门预审，1996年6月国家发展计划委员会正式批复，将郑州大学列入国家“211工程”项目院校进行重点建设。合校前已基本形成了文理渗透、理工兼容，文、理、工、财经、政法等学科门类齐全的综合性大学。            </li>
                                                        </ul>
                                                </body>
                                        </html>
                                        


                #### 现任领导 
                + 方法:`GET`   接口:`/api/school/schoolleader?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (text/html)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                                <html>
                                                <head>
                                                        <meta charset="utf-8">
                                                        <title></title>
                                                </head>
                                                <body>
                                                     
                                                        <ul>
                                                                <li>
                                                                    原郑州工业大学成立于1963年，是原化工部直属的重点院校。原名郑州工学院，1996年4月更名为郑州工业大学。经过37年的建设和发展，合校前已成为以工为主，文、理、经多学科协调发展的高等工科学校。             </li>
                                                        </ul>
                                                </body>
                                        </html>
                                        


                #### 院系专业 
                + 方法:`GET`   接口:`/api/school/schoolmajor?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取学院专业成功",
                                                "data": [
                                                        {
                                                                "school_news_title": "中文系",
                                                                "school_news_addtime": null,
                                                                "detail": "/api/schoolnews/newsdetail/signature/ad569e516e5d6d1b10e607956fd7059f/id/11"
                                                        },
                                                        {
                                                                "school_news_title": "计算机科学技术",
                                                                "school_news_addtime": null,
                                                                "detail": "/api/schoolnews/newsdetail/signature/ad569e516e5d6d1b10e607956fd7059f/id/12"
                                                        },
                                                        {
                                                                "school_news_title": "生物系",
                                                                "school_news_addtime": null,
                                                                "detail": "/api/schoolnews/newsdetail/signature/ad569e516e5d6d1b10e607956fd7059f/id/10"
                                                        }
                                                ]
                                        }


                #### 院系新闻 
                + 方法:`GET`   接口:`/api/school/schoolnews?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取学院新闻成功",
                                                "data": [
                                                        {
                                                                "school_news_title": "全省规范化司法所长培训班在郑州大学举办",
                                                                "school_news_addtime": null,
                                                                "school_news_thumb": [
                                                                        "static/res/news/160518/1191623930.jpg"
                                                                ],
                                                                "school_news_thumb_ab": null,
                                                                "detail": "/api/schoolnews/newsdetail/signature/ad569e516e5d6d1b10e607956fd7059f/id/1"
                                                        }
                                                ]
                                        }


                #### 社会新闻 
                + 方法:`GET`   接口:`/api/schoolnews/socialnews?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取社会新闻成功",
                                                "data": [
                                                        {
                                                                "school_news_id": 4,
                                                                "school_news_title": "郑州大学举办“祖国颂”摄影展",
                                                                "school_news_addtime": null,
                                                                "school_news_thumb": [
                                                                        "static/res/news/160518/6443118400.jpg",
                                                                        "static/res/news/160518/110723192521850222.jpg",
                                                                        "static/res/news/160518/6443118400.jpg"
                                                                ],
                                                                "school_news_type": "3",
                                                                "detail": "/api/schoolnews/newsdetail/id/4"
                                                        },
                                                        {
                                                                "school_news_id": 7,
                                                                "school_news_title": "我校劳模疗养团平安返校",
                                                                "school_news_addtime": null,
                                                                "school_news_thumb": [
                                                                        "static/res/news/160518/110723192521850222.jpg"
                                                                ],
                                                                "school_news_type": "1",
                                                                "detail": "/api/schoolnews/newsdetail/id/7"
                                                        },
                                                        {
                                                                "school_news_id": 8,
                                                                "school_news_title": "我校2011年“阳光体育运动”田径运动会开幕式图片集锦",
                                                                "school_news_addtime": null,
                                                                "school_news_thumb": [
                                                                        "static/res/news/160518/6443118400.jpg"
                                                                ],
                                                                "school_news_type": "2",
                                                                "detail": "/api/schoolnews/newsdetail/id/8"
                                                        }
                                                ]
                                        }


                #### 通知公告 
                + 方法:`GET`   接口:`/api/schoolnews/notice?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取通知公告成功",
                                                "data": [
                                                        {
                                                                "school_news_id": 15,
                                                                "school_news_title": "智集是什么，怎么加入智集",
                                                                "school_news_addtime": null,
                                                                "school_news_thumb": [
                                                                        ""
                                                                ],
                                                                "detail": "/api/schoolnews/newsdetail/signature/ad569e516e5d6d1b10e607956fd7059f/id/15"
                                                        },
                                                        {
                                                                "school_news_id": 16,
                                                                "school_news_title": "丰富资源，稳健成长",
                                                                "school_news_addtime": null,
                                                                "school_news_thumb": [
                                                                        ""
                                                                ],
                                                                "detail": "/api/schoolnews/newsdetail/signature/ad569e516e5d6d1b10e607956fd7059f/id/16"
                                                        }
                                                ]
                                        }


                #### 忘记密码 
                + 方法:`POST`   接口:`/api/sign/forget?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        username=18516260377&password=111111&sms_code=asdf

                + 响应(Response) 状态码:200   响应类型: (text/html)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                                {"status":2034,"message":"验证码错误","data":null}


                #### 注册帐号 
                + 方法:`POST`   接口:`/api/sign/signup?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (text/plain; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        username=18516260377&password=111111&sms_code=7038

                + 响应(Response) 状态码:200   响应类型: (text/html)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                                {"status":2034,"message":"验证码错误","data":null}


                #### 登录帐号 
                + 方法:`POST`   接口:`/api/sign/signin?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        username=18516260377&password=111111

                + 响应(Response) 状态码:200   响应类型: (text/html)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Set-Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4; expires=Sun, 05-Jun-2016 13:05:17 GMT; path=/
                                        Vary: Accept-Encoding
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                                {"status":2000,"message":"登录成功","data":{"student_token":"pnkpe3u4hcueaa51ld1b67lfe4","student":{"student_id":14,"student_school_id":4,"student_username":"18516260377","student_password":"3d4f2bf07dc1be38b20cd6e46949a1071f9d0e3d","student_status":null,"student_truename":null,"student_id_no":null,"student_sex":null,"student_birthday":null,"student_household_registration":null,"student_residence":null,"student_phone":null,"student_education_level":null,"student_professional_category":null,"student_professional_name":null,"student_graduate_school":null,"student_graduate_time":null,"student_marital_status":null,"student_political_status":null,"student_health_status":null,"student_email":null,"student_introducation":null,"student_last_modified":null,"student_modifier":null,"student_technique":null,"student_sno":null,"student_headerurl":null,"student_last_logintime":null,"student_lat":null,"student_lng":null},"ease_user":{"action":"get","path":"\/users","uri":"http:\/\/a1.easemob.com\/0xcb\/0xcb\/users\/18516260377","entities":[{"uuid":"aa694c6a-29f6-11e6-8abd-8fb22ee2bf6d","type":"user","created":1465005007910,"modified":1465005007910,"username":"18516260377","activated":true}],"timestamp":1465045519575,"duration":2,"count":1}}}


                #### 生活页面 
                + 方法:`GET`   接口:`/api/life/index?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "生活数据请求成功",
                                                "data": {
                                                        "ads_image": [
                                                                {
                                                                        "image_url": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_195900.jpg"
                                                                },
                                                                {
                                                                        "image_url": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_200000.jpg"
                                                                },
                                                                {
                                                                        "image_url": "https://studentapp-kblog.rhcloud.com/static/res/activity/160510/16052R3354.jpg"
                                                                }
                                                        ],
                                                        "activity": [
                                                                {
                                                                        "appoint_count": null,
                                                                        "activity_title": "“死亡咖啡馆”活动 大学生轻松探讨死亡议题",
                                                                        "activity_des": "南华大学表示，生死学系历年来对生死议题探讨与研究有贡献，也逐渐打破民众忌讳谈论生死观念，培养民众以正念面对生死，同时更提出“生命的永续经营观”，让民众重新认识“死亡”，并深入了解生与死意义。\n　　南华大学校园18日登场的“死亡咖啡馆”，不仅师生踊跃参与，也有不少校外人士前来参加，一起喝咖啡聊生死，用轻松的方式与坦然的态度探讨死亡议题，副校长慧开法师及生死学系主任蔡昌雄也一同畅谈生命观。\n　　慧开法师表示，“死亡不是人生的终点，而是另一个转折点”，藉由“死亡咖啡馆”意见交流，可以让参与者以开放的胸怀与思维谈论死亡，进而助于了解死亡的各个面向，让民众更珍惜生命中值得重视的事物，并把握当下每一刻。\n　　南华大学指出，“死亡咖啡馆”4年前起源于英国，是一个探讨死亡理念与态度的活动，让与会者打开心胸讨论死亡相关议题，后来获得响应，目前全球已举办超过1200场。",
                                                                        "comment_count": 1,
                                                                        "addtime": "2016-05-31 09:22:23+00",
                                                                        "thumb": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg",
                                                                        "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                        "nickname": "宣传部",
                                                                        "activity_type": "1",
                                                                        "activity_id": 4
                                                                },
                                                                {
                                                                        "appoint_count": null,
                                                                        "activity_title": "“憨鼠杯”井盖创意彩绘大赛",
                                                                        "activity_des": "       此次活动总共分为80个井盖区，比赛中，选手们拿出早已准备好的图案聚精会神的对比着大小比例，用颜料或喷漆一点一点的在井盖上渲染着，时间一点一滴的过去了然而选手们很快就把学校各区的井盖彩绘成各种图案，使单调的井盖变得生动。星眼、多啦A梦、熊猫、玫瑰花、太极、鹿、日落、泡面…当这些图案成为井盖的外衣，“星眼”来自的灵感是黑洞没成，成了星际之眼。“太极”-至简至极。“日落”-莫名的安静吸引了不少观看者的目光。                         \n\n       这次活动，不仅令校园更加靓丽多彩，赢得了广大师生的赞誉。更加强了同学们之间的合作，让同学各施所长，也锻炼了大学生们绘画创作能力，有利于培养了我院学生的创新创作能力。",
                                                                        "comment_count": 1,
                                                                        "addtime": "2016-05-31 08:15:47+00",
                                                                        "thumb": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg",
                                                                        "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                        "nickname": "宣传部",
                                                                        "activity_type": "1",
                                                                        "activity_id": 3
                                                                },
                                                                {
                                                                        "appoint_count": null,
                                                                        "activity_title": "有趣的百“嗑”知识竞赛",
                                                                        "activity_des": "校团委组织部部长王鹰老师、办公室主任谢蓓老师、校团委贾宁老师、校学生会叶维颖主席、部分学院学生会主席以及校学生会各部门部长出席本次比赛。\n      本次大赛共分四个环节，“唾手可得”比底气，选手答题的同时，必须嗑完规定数量的瓜子，四题见分晓；“你追我赶”拼速度，选手须嗑完十个瓜子才能抢答题目;“扭转乾坤”靠勇气，选手从四种分值的题框中任选一题，答对得相应分，答错扣相应分；附加题比团结，一人嗑瓜子，两人思考答案，嗑完答题。\n\n      比赛亮点良多。参赛选手在回答问题的同时，必须嗑完相应数量的瓜子。所谓一心两用，既有脑力又有体力，还考验团队之间的协作能力。现场观众被选手们的精彩比拼深深吸引，纷纷跃跃欲试，比赛中途还有精彩的嘉宾表演、观众抢答，现场气氛相当活跃。\n\n      大赛持续一个多小时。活动尾声，王鹰老师点评说：“大赛举办得相当成功，题目、背景、邀请嘉宾等细节都考虑到位；但比赛也暴露一点，许多题目似曾相识却答不出来，说明同学们平时积累的知识还不够；希望大家要珍惜四年的大学时光，多读书，不断扩大知识面。”",
                                                                        "comment_count": 1,
                                                                        "addtime": "2016-05-30 07:22:12+00",
                                                                        "thumb": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg",
                                                                        "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                        "nickname": "宣传部",
                                                                        "activity_type": "2",
                                                                        "activity_id": 2
                                                                },
                                                                {
                                                                        "appoint_count": null,
                                                                        "activity_title": "\n大学生发呆比赛\n",
                                                                        "activity_des": "为了缓解同学们紧张的学习压力，使同学们充分解放自我，放空心灵，8日，哈尔滨医科大学口腔年级秘书部于口腔医院负三教室成功举办发呆大赛。\n　　发呆是正常人的一种心理调节，偶尔发呆无伤大雅，还有利于健康。比赛开始后，同学以各种妙趣横生的姿势开始了自己的发呆。只见他们形态各异，表情微妙，像是缅怀着、幸福着，又像是天真着，孤独着。在比赛过程中，工作人员还设置了相当多的干扰来增加比赛的难度和趣味性。例如学长积极献身，绞尽脑汁想出各种逗趣的语言，摆出各种好笑的姿势来吸引我们的参赛同学，然而仍有相当多的同学依旧不为所动。最终，仅有一位参赛同学心无旁骛，完全不受搞笑视频、笑话、电话等任何因素的干扰，超乎寻常的坚持了40分钟以上，从本次比赛中脱颖而出，将比赛冠军收入囊中。\n　　比赛结束后，相当多的同学仍意犹未尽，一名同学不禁感言“这是一个有趣的经历，让人真正地把自己从快节奏的生活中跳出来。”此次发呆大赛的完美举办，成功凸显了口腔学子劳逸结合的高效学习精神以及口腔学生年级以人为本，促进学生全面发展的年级精神。口腔学生年级将再接再厉，创办更多精彩有益的特色活动，推进年级文化建设更上一层楼！ ",
                                                                        "comment_count": 3,
                                                                        "addtime": "2016-05-30 07:14:09+00",
                                                                        "thumb": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg",
                                                                        "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                        "nickname": "宣传部",
                                                                        "activity_type": "2",
                                                                        "activity_id": 1
                                                                }
                                                        ]
                                                }
                                        }


                #### 投票活动详情 
                + 方法:`POST`   接口:`/api/life/actdetail/index?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        activity_id=1

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取投票详情成功",
                                                "data": {
                                                        "activity": {
                                                                "appoint_count": null,
                                                                "activity_title": "\n大学生发呆比赛\n",
                                                                "activity_des": "为了缓解同学们紧张的学习压力，使同学们充分解放自我，放空心灵，8日，哈尔滨医科大学口腔年级秘书部于口腔医院负三教室成功举办发呆大赛。\n　　发呆是正常人的一种心理调节，偶尔发呆无伤大雅，还有利于健康。比赛开始后，同学以各种妙趣横生的姿势开始了自己的发呆。只见他们形态各异，表情微妙，像是缅怀着、幸福着，又像是天真着，孤独着。在比赛过程中，工作人员还设置了相当多的干扰来增加比赛的难度和趣味性。例如学长积极献身，绞尽脑汁想出各种逗趣的语言，摆出各种好笑的姿势来吸引我们的参赛同学，然而仍有相当多的同学依旧不为所动。最终，仅有一位参赛同学心无旁骛，完全不受搞笑视频、笑话、电话等任何因素的干扰，超乎寻常的坚持了40分钟以上，从本次比赛中脱颖而出，将比赛冠军收入囊中。\n　　比赛结束后，相当多的同学仍意犹未尽，一名同学不禁感言“这是一个有趣的经历，让人真正地把自己从快节奏的生活中跳出来。”此次发呆大赛的完美举办，成功凸显了口腔学子劳逸结合的高效学习精神以及口腔学生年级以人为本，促进学生全面发展的年级精神。口腔学生年级将再接再厉，创办更多精彩有益的特色活动，推进年级文化建设更上一层楼！ ",
                                                                "comment_count": 3,
                                                                "addtime": "2016-05-30 07:14:09+00",
                                                                "activity_select": null,
                                                                "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                "nickname": "宣传部",
                                                                "activity_type": "2",
                                                                "vote": 1,
                                                                "is_mult": 0,
                                                                "activity_id": 1
                                                        },
                                                        "comment": null
                                                }
                                        }


                #### 投票活动列表 
                + 方法:`GET`   接口:`/api/life/list/index?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "请求投票活动成功",
                                                "data": [
                                                        {
                                                                "appoint_count": null,
                                                                "activity_title": "“死亡咖啡馆”活动 大学生轻松探讨死亡议题",
                                                                "activity_des": "南华大学表示，生死学系历年来对生死议题探讨与研究有贡献，也逐渐打破民众忌讳谈论生死观念，培养民众以正念面对生死，同时更提出“生命的永续经营观”，让民众重新认识“死亡”，并深入了解生与死意义。\n　　南华大学校园18日登场的“死亡咖啡馆”，不仅师生踊跃参与，也有不少校外人士前来参加，一起喝咖啡聊生死，用轻松的方式与坦然的态度探讨死亡议题，副校长慧开法师及生死学系主任蔡昌雄也一同畅谈生命观。\n　　慧开法师表示，“死亡不是人生的终点，而是另一个转折点”，藉由“死亡咖啡馆”意见交流，可以让参与者以开放的胸怀与思维谈论死亡，进而助于了解死亡的各个面向，让民众更珍惜生命中值得重视的事物，并把握当下每一刻。\n　　南华大学指出，“死亡咖啡馆”4年前起源于英国，是一个探讨死亡理念与态度的活动，让与会者打开心胸讨论死亡相关议题，后来获得响应，目前全球已举办超过1200场。",
                                                                "comment_count": 1,
                                                                "addtime": "2016-05-31 09:22:23+00",
                                                                "thumb": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg",
                                                                "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                "nickname": "宣传部",
                                                                "activity_type": "1",
                                                                "activity_id": 4
                                                        },
                                                        {
                                                                "appoint_count": null,
                                                                "activity_title": "“憨鼠杯”井盖创意彩绘大赛",
                                                                "activity_des": "       此次活动总共分为80个井盖区，比赛中，选手们拿出早已准备好的图案聚精会神的对比着大小比例，用颜料或喷漆一点一点的在井盖上渲染着，时间一点一滴的过去了然而选手们很快就把学校各区的井盖彩绘成各种图案，使单调的井盖变得生动。星眼、多啦A梦、熊猫、玫瑰花、太极、鹿、日落、泡面…当这些图案成为井盖的外衣，“星眼”来自的灵感是黑洞没成，成了星际之眼。“太极”-至简至极。“日落”-莫名的安静吸引了不少观看者的目光。                         \n\n       这次活动，不仅令校园更加靓丽多彩，赢得了广大师生的赞誉。更加强了同学们之间的合作，让同学各施所长，也锻炼了大学生们绘画创作能力，有利于培养了我院学生的创新创作能力。",
                                                                "comment_count": 1,
                                                                "addtime": "2016-05-31 08:15:47+00",
                                                                "thumb": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg",
                                                                "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                "nickname": "宣传部",
                                                                "activity_type": "1",
                                                                "activity_id": 3
                                                        },
                                                        {
                                                                "appoint_count": null,
                                                                "activity_title": "有趣的百“嗑”知识竞赛",
                                                                "activity_des": "校团委组织部部长王鹰老师、办公室主任谢蓓老师、校团委贾宁老师、校学生会叶维颖主席、部分学院学生会主席以及校学生会各部门部长出席本次比赛。\n      本次大赛共分四个环节，“唾手可得”比底气，选手答题的同时，必须嗑完规定数量的瓜子，四题见分晓；“你追我赶”拼速度，选手须嗑完十个瓜子才能抢答题目;“扭转乾坤”靠勇气，选手从四种分值的题框中任选一题，答对得相应分，答错扣相应分；附加题比团结，一人嗑瓜子，两人思考答案，嗑完答题。\n\n      比赛亮点良多。参赛选手在回答问题的同时，必须嗑完相应数量的瓜子。所谓一心两用，既有脑力又有体力，还考验团队之间的协作能力。现场观众被选手们的精彩比拼深深吸引，纷纷跃跃欲试，比赛中途还有精彩的嘉宾表演、观众抢答，现场气氛相当活跃。\n\n      大赛持续一个多小时。活动尾声，王鹰老师点评说：“大赛举办得相当成功，题目、背景、邀请嘉宾等细节都考虑到位；但比赛也暴露一点，许多题目似曾相识却答不出来，说明同学们平时积累的知识还不够；希望大家要珍惜四年的大学时光，多读书，不断扩大知识面。”",
                                                                "comment_count": 1,
                                                                "addtime": "2016-05-30 07:22:12+00",
                                                                "thumb": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg",
                                                                "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                "nickname": "宣传部",
                                                                "activity_type": "2",
                                                                "activity_id": 2
                                                        },
                                                        {
                                                                "appoint_count": null,
                                                                "activity_title": "\n大学生发呆比赛\n",
                                                                "activity_des": "为了缓解同学们紧张的学习压力，使同学们充分解放自我，放空心灵，8日，哈尔滨医科大学口腔年级秘书部于口腔医院负三教室成功举办发呆大赛。\n　　发呆是正常人的一种心理调节，偶尔发呆无伤大雅，还有利于健康。比赛开始后，同学以各种妙趣横生的姿势开始了自己的发呆。只见他们形态各异，表情微妙，像是缅怀着、幸福着，又像是天真着，孤独着。在比赛过程中，工作人员还设置了相当多的干扰来增加比赛的难度和趣味性。例如学长积极献身，绞尽脑汁想出各种逗趣的语言，摆出各种好笑的姿势来吸引我们的参赛同学，然而仍有相当多的同学依旧不为所动。最终，仅有一位参赛同学心无旁骛，完全不受搞笑视频、笑话、电话等任何因素的干扰，超乎寻常的坚持了40分钟以上，从本次比赛中脱颖而出，将比赛冠军收入囊中。\n　　比赛结束后，相当多的同学仍意犹未尽，一名同学不禁感言“这是一个有趣的经历，让人真正地把自己从快节奏的生活中跳出来。”此次发呆大赛的完美举办，成功凸显了口腔学子劳逸结合的高效学习精神以及口腔学生年级以人为本，促进学生全面发展的年级精神。口腔学生年级将再接再厉，创办更多精彩有益的特色活动，推进年级文化建设更上一层楼！ ",
                                                                "comment_count": 3,
                                                                "addtime": "2016-05-30 07:14:09+00",
                                                                "thumb": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg",
                                                                "header_url": "https://studentapp-kblog.rhcloud.com/",
                                                                "nickname": "宣传部",
                                                                "activity_type": "2",
                                                                "activity_id": 1
                                                        }
                                                ]
                                        }


                #### 一起玩组详情 
                + 方法:`POST`   接口:`/api/play/groupdetail/index?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        group_cre_id=group_cre_id

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "一起玩群组详情请求成功",
                                                "data": {
                                                        "group_name": "篮球兴趣群                                                                                               ",
                                                        "group_id": "24123452",
                                                        "group_intro": "你的课外时间都是怎么度过的呢？睡觉？玩电脑？长此以往身体怎么能行，一起感运动觉篮球的",
                                                        "group_membercount": 3,
                                                        "group_condition": "为什么加群",
                                                        "group_type": "运动->篮球",
                                                        "group_adminName": null,
                                                        "group_adminSex": null,
                                                        "group_headerurl": null,
                                                        "group_school": null,
                                                        "group_address": "学校操场",
                                                        "group_otherinfo": "2016-05-30 07:47:45+00",
                                                        "group_message": [
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_195800.jpg"
                                                                },
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_200000.jpg"
                                                                },
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg"
                                                                },
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/110723192521850222.jpg"
                                                                },
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg"
                                                                }
                                                        ],
                                                        "group_member": [
                                                                {
                                                                        "member_headerurl": "https://studentapp-kblog.rhcloud.comstatic/res/slider/slider_160517_200000.jpg",
                                                                        "member_name": "王五"
                                                                },
                                                                {
                                                                        "member_headerurl": "https://studentapp-kblog.rhcloud.comstatic/res/news/160518/6443118400.jpg",
                                                                        "member_name": "李四"
                                                                },
                                                                {
                                                                        "member_headerurl": "https://studentapp-kblog.rhcloud.comstatic/res/news/160518/110723192521850222.jpg",
                                                                        "member_name": "张三"
                                                                }
                                                        ]
                                                }
                                        }


                #### 一起玩群组成员 
                + 方法:`POST`   接口:`/api/play/groupdetail/index?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        group_cre_id=group_cre_id

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "一起玩群组详情请求成功",
                                                "data": {
                                                        "group_name": "篮球兴趣群                                                                                               ",
                                                        "group_id": "24123452",
                                                        "group_intro": "你的课外时间都是怎么度过的呢？睡觉？玩电脑？长此以往身体怎么能行，一起感运动觉篮球的",
                                                        "group_membercount": 3,
                                                        "group_condition": "为什么加群",
                                                        "group_type": "运动->篮球",
                                                        "group_adminName": null,
                                                        "group_adminSex": null,
                                                        "group_headerurl": null,
                                                        "group_school": null,
                                                        "group_address": "学校操场",
                                                        "group_otherinfo": "2016-05-30 07:47:45+00",
                                                        "group_message": [
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_195800.jpg"
                                                                },
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/slider/slider_160517_200000.jpg"
                                                                },
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg"
                                                                },
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/110723192521850222.jpg"
                                                                },
                                                                {
                                                                        "messageurl": "https://studentapp-kblog.rhcloud.com/static/res/news/160518/6443118400.jpg"
                                                                }
                                                        ],
                                                        "group_member": [
                                                                {
                                                                        "member_headerurl": "https://studentapp-kblog.rhcloud.comstatic/res/slider/slider_160517_200000.jpg",
                                                                        "member_name": "王五"
                                                                },
                                                                {
                                                                        "member_headerurl": "https://studentapp-kblog.rhcloud.comstatic/res/news/160518/6443118400.jpg",
                                                                        "member_name": "李四"
                                                                },
                                                                {
                                                                        "member_headerurl": "https://studentapp-kblog.rhcloud.comstatic/res/news/160518/110723192521850222.jpg",
                                                                        "member_name": "张三"
                                                                }
                                                        ]
                                                }
                                        }


                #### 一起玩个人信息 
                + 方法:`POST`   接口:`/api/play/playinfo?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        student_id=18516260377

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2001,
                                                "message": "一起玩个人资料请求失败",
                                                "data": false
                                        }


                #### 树洞首页 
                + 方法:`GET`   接口:`/api/treehole/index?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Transfer-Encoding: chunked

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 树洞详情 
                + 方法:`POST`   接口:`/api/treehole/treeholedetail?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        treehole_id=1

                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Transfer-Encoding: chunked

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 淘渔 
                + 方法:`GET`   接口:`/api/schooltao/index?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Transfer-Encoding: chunked

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 淘渔详情 
                + 方法:`POST`   接口:`/api/schooltao/goodsdetail?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        goods_id=1

                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Transfer-Encoding: chunked

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 兼职 
                + 方法:`GET`   接口:`/api/parttime/index?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request) 

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4



                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取兼职成功",
                                                "data": [
                                                        {
                                                                "life_parttime_type": "1",
                                                                "life_parttime_id": 1,
                                                                "life_parttime_title": "兼职信息",
                                                                "life_parttime_date": "6/2---6/5",
                                                                "life_parttime_salary": "80",
                                                                "life_parttime_map": "郑州市经开区",
                                                                "life_parttime_day": "天"
                                                        }
                                                ]
                                        }


                #### 兼职详情 
                + 方法:`POST`   接口:`/api/parttime/partdetail?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        parttime_id=1

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取兼职详情成功",
                                                "data": {
                                                        "life_parttime_title": "兼职信息",
                                                        "life_parttime_date": "6/2---6/5",
                                                        "life_parttime_time": "9：00--12：00",
                                                        "life_parttime_people": 5,
                                                        "life_parttime_endtime": "截至日期5-2",
                                                        "life_parttime_salary": "80",
                                                        "life_parttime_map": "郑州市经开区",
                                                        "life_parttime_day": "天",
                                                        "life_parttime_content": "商场促销",
                                                        "life_parttime_addtime": "2016-06-02 06:51:44+00",
                                                        "life_parttime_name": "张女士",
                                                        "life_parttime_telephone": "13234231211"
                                                }
                                        }


                #### 删除注册用户和环信 
                + 方法:`POST`   接口:`/api/student/delstudent?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        username=18516260377

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Vary: Accept-Encoding

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "注销用户成功",
                                                "data": ""
                                        }


                #### 朋友创建群组-json 
                + 方法:`POST`   接口:`/api/friendgroup/addgroup?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/json; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        {
                                                "group_name": "HelloWorld",
                                                "group_desc": "群组描述信息",
                                                "group_public": "true",
                                                "student_approval": "true",
                                                "student_token": "pnkpe3u4hcueaa51ld1b67lfe4",
                                                "members": []
                                        }

                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Transfer-Encoding: chunked
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 朋友创建群组-form 
                + 方法:`POST`   接口:`/api/friendgroup/addgroup?signature=ad569e516e5d6d1b10e607956fd7059f`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        group_name=HelloWorld1&group_desc=hellojack&group_public=1&student_approval=1&student_token=pnkpe3u4hcueaa51ld1b67lfe4&members=0xcb%2Ctest%2Ctest1

                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Set-Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4; path=/
                                        Transfer-Encoding: chunked
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 修改群组 
                + 方法:`POST`   接口:`/api/friendgroup/editfriendgroup?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        group_id=0xcb&group_name=Hello&group_desc=true+is+...+

                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Transfer-Encoding: chunked
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 删除群组 
                + 方法:`POST`   接口:`/api/friendgroup/delgroup?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        group_id=0xcb

                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Transfer-Encoding: chunked
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 退出群组 
                + 方法:`POST`   接口:`/api/friendgroup/quitgroup?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        group_id=0xcb&username=Hello

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Vary: Accept-Encoding
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        {
                                                "status": 2001,
                                                "message": "退出群组失败",
                                                "data": {
                                                        "error": "illegal_argument",
                                                        "timestamp": 1465045649509,
                                                        "duration": 0,
                                                        "exception": "java.lang.IllegalArgumentException",
                                                        "error_description": "0xcb is not a valid group id"
                                                }
                                        }


                #### 添加好友 
                + 方法:`POST`   接口:`/api/friendgroup/addfriend?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        friend_name=0xcb

                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Transfer-Encoding: chunked
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 删除好友 
                + 方法:`POST`   接口:`/api/friendgroup/addfriend?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        friend_name=0xcb

                + 响应(Response) 状态码:500   响应类型: (text/html)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Transfer-Encoding: chunked
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        ❌系统发生错误😭


                #### 加入黑名单 
                + 方法:`POST`   接口:`/api/friendgroup/addbalck?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        friend_names=0xcb%2Ctest

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Vary: Accept-Encoding
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        {
                                                "status": 2001,
                                                "message": "加入黑名单失败",
                                                "data": {
                                                        "error": "web_application",
                                                        "timestamp": 1465045664911,
                                                        "duration": 0,
                                                        "exception": "javax.ws.rs.WebApplicationException"
                                                }
                                        }


                #### 查询用户 
                + 方法:`POST`   接口:`/api/friendgroup/getusername?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        friend_name=0xcb

                + 响应(Response) 状态码:200   响应类型: (application/json; charset=utf-8)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Vary: Accept-Encoding
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                        {
                                                "status": 2000,
                                                "message": "获取用户成功",
                                                "data": {
                                                        "username": null,
                                                        "headerurl": ""
                                                }
                                        }


                #### 发送文本信息 
                + 方法:`POST`   接口:`/api/friendgroup/sendtext?signature=ad569e516e5d6d1b10e607956fd7059f&limit=8`

                + 请求(Request)  (application/x-www-form-urlencoded; charset=utf-8)

                        + 请求头-Headers

                                        Cookie: PHPSESSID=pnkpe3u4hcueaa51ld1b67lfe4

                        + 请求体-Body

                                        target=0xcb%2Ctest%2Ctest1%2Cchangbiao001&target_type=users&content=Hello%2CTesting%21

                + 响应(Response) 状态码:200   响应类型: (text/html)

                        + 响应头-Headers

                                        Pragma: no-cache
                                        Vary: Accept-Encoding
                                        Expires: Thu, 19 Nov 1981 08:52:00 GMT
                                        Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0

                        + 响应体-Body

                                                {"status":"2000","message":"文本信息发送成功","data":null}


