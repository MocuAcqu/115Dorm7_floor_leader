const wardenProfiles = {
    "劉祐豪": {
        bg: "linear-gradient(135deg, #f3e8ff 0%, #8556b8 100%)", // 紫色調柔和漸層
        shadow: "rgba(139, 92, 246, 0.3)",
        stickers: ["rabbit.png", "magic.png", ] 
    },
    "呂伊綾": {
        bg: "linear-gradient(135deg, #fce7f3 0%, #eeb6d6 100%)", // 淡粉色調柔和漸層
        shadow: "rgba(236, 72, 153, 0.2)",
        stickers: ["volleyball.png", "flower.png", ]
    },
    "林宜宣": {
        bg: "linear-gradient(135deg, #ffedd5 0%, #feccaa 100%)", // 粉橘色調柔和漸層
        shadow: "rgba(249, 115, 22, 0.2)",
        stickers: ["sushi.png", "tabletennis.png", ]
    },
    "林冠廷": {
        bg: "linear-gradient(135deg, #e0f2fe55 0%, #24b1fd88 100%)", // 水藍色調柔和漸層
        shadow: "rgba(2, 132, 199, 0.2)",
        stickers: []
    }
};

const floorData = {
    2: {
        title: "2 樓 性別友善樓層",
        themeColor: "linear-gradient(90deg, #7b54d4, #ff95ca)",
        wardens: [
            { name: "劉祐豪", title: "樓長 (2, 3, 4 樓)", bio: "各位香魚們大家好！我是學七舍 2、3、4 樓的樓長劉祐豪。因為 2 樓是性別友善樓層，所以會配置一男一女兩位樓長，而我就是其中一位～兩位樓長都是對於性別議題有一定的瞭解，不用對我們抱有害怕喔~<br><br>我來自化學系博士班，算一算也已經累積大約 10 年的住宿經驗。從大學、研究所一路住到博士班，宿舍生活中大大小小的事情多少都遇過一些，所以不管是房間設備、公共空間、住宿規定、室友相處，還是一些不知道到底該找誰處理的生活疑難雜症，只要我幫得上忙，都很歡迎來找我。如果我不知道答案，也可以陪你一起想想看該找誰、要怎麼處理，不然一起甩鍋。<br><br>我自己其實滿喜歡住宿舍的，因為我覺得宿舍不只是晚上回來睡覺的地方，也是很多人每天生活很長時間的空間。尤其對剛搬進來、第一次住宿，或是第一次離家生活的人來說，可能會有很多不習慣，甚至有些事情會覺得「這種小問題真的可以問嗎？」——可以，真的可以。只要不是叫我幫你寫博士論文，基本上都可以先來問問看。<br><br>我本人非常 E，也很喜歡跟大家聊天，所以不管是宿舍問題、生活問題、課業上的抱怨，還是今天單純很無聊想找人講話，都可以來找我。路上遇到我也可以直接打招呼，不用擔心我認不出你，因為我是重度臉盲，一定認不出你，我會露出「我是不是在哪裡看過你」的表情。<br><br>不過有件事要先自首，我大學不是讀師大的，所以有些「師大生才知道的事」，像是某些校內傳說、特殊用語，或是哪棟樓到底在哪裡，我可能反而比你們還不熟。如果你發現樓長竟然不知道，也不要太震驚，歡迎順便教育我一下，我也很樂意聽你們分享。<br><br>至於興趣嘛……有點多，基本上屬於什麼都會想碰一下的類型。攝影、剪輯、塔羅、料理、遊戲、動畫、魔術、3C、影音設備……很多東西我都感興趣。有時候可能前一天還在研究相機，隔天就突然跑去研究怎麼煮東西，再過幾天又不知道為什麼開始玩魔術。<br><br>所以總之，只要你敢來找我，我就有本事跟你聊下去。而且不一定要有什麼重要的事才來找我，有時候只是想分享今天發生了什麼、最近在追什麼作品、買了什麼奇怪的東西，也都完全 OK。<br><br>唯一需要注意的是，因為博士班的生活比較不固定，我白天有很高的機率會消失在實驗室裡，有時候看到訊息也不一定能馬上處理，所以我的訊息常常會到 22:00 之後才比較有空慢慢回覆。如果是一般問題，可能要稍微給我一點時間；但如果是宿舍的緊急狀況、安全問題或需要立即處理的事情，就不要傻傻等到晚上，請直接依照宿舍的緊急聯絡方式處理，也可以想辦法直接聯絡樓長或相關人員。<br><br>所以——<br>你願意等我到 22:00 後嗎？<br><br>對了，最後還有一件非常重要的事：<br>我很喜歡聊天用顏文字 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧<br><br>如果你不喜歡顏文字、覺得太多很吵，也可以跟我說一聲，我會努力克制一下（大概）。<br><br>總之，接下來這一年請大家多多指教！希望大家在學七舍都可以住得舒服、住得安心，也希望哪天在走廊、電梯或公共空間遇到我的時候，可以很自然地跟我說聲嗨～我會用「你誰啊」的表情回應你的。歡迎來找樓長聊天，也歡迎來找樓長解決問題！解決不了就一起解決有提出問題的人 。", quote: "宿舍是一個很特別的地方。<br><br>我們來自不同的科系、不同的年級、不同的地方，有著完全不同的生活習慣，最後卻因為一個住宿床位，被放進同一棟建築裡生活。<br><br>你可能會在這裡認識未來很多年都還會聯絡的朋友，也可能只是每天跟某個人一起搭電梯，直到退宿那天都還是不知道對方叫什麼名字。<br><br>但不管是哪一種，我都希望大家不要只是把學七舍當成一個「晚上回來睡覺的地方」。<br><br>台積電創辦人、前董事長張忠謀曾經提到：<br>「一流大學學生應該100%住校，學生住宿有許多競爭與合作機會，不是非住宿學生可學得到。」<br><br>我自己覺得有點誇張啦，但住宿最大的價值，從來不只是離教室比較近、晚上不用通勤，或是有一張床可以睡覺而已。<br><br>宿舍本身就是一個學習的地方。<br><br>你會學著怎麼跟生活習慣完全不同的人相處、怎麼溝通、怎麼合作、怎麼表達自己的需求，也會慢慢發現，不是所有事情都會照著自己習慣的方式運作。<br><br>有人十二點準時睡覺，有人十二點才剛開始人生；<br>有人洗澡十分鐘解決，有人進浴室後彷彿開始另一段人生；<br>有人喜歡熱鬧，有人只想安安靜靜地待在自己的世界裡。<br><br>這些差異有時候會很有趣，有時候也真的會讓你很想掐死對方。<br><br>但怎麼在這些差異裡找到彼此都能接受的方式，我覺得就是住宿生活最珍貴的地方之一。<br><br>所以我希望大家可以對「我是學七舍的住宿生」這件事情多一點認同感。<br><br>學七舍不只是你房間門牌上面的那個地址，而是我們這一年一起生活的地方。<br><br>如果有活動，有空可以出來看看；<br>在公共空間遇到其他住宿生，可以認識一下；<br>如果你有什麼專長、興趣或奇怪的技能，也很歡迎分享。<br><br>甚至如果你只是某天晚上不知道要幹嘛，也可以來找樓長。<br><br>除了前面自介提到的一堆興趣之外，我甚至可以提供——<br>樓長限定塔羅服務 ( •̀ ω •́ )✧（恭喜你有好好看到這裡，這是給看到這裡的你們獎勵）<br><br>感情、課業、人生、研究、今天到底要不要吃宵夜，都可以來問。<br><br>至於準不準嘛……<br><br>塔羅牌負責回答問題，我本人不負責後續發生的事情。<br><br>但至少可以保證你會得到一個心靈的寄託或聊天的機會。<br><br>我也希望這一年大家可以多利用宿舍裡提供的資源與活動。很多學習其實不一定發生在教室裡，有時候是跟室友的一次爭執、有時候是活動中認識一個不同科系的人、有時候只是半夜在公共空間跟某個人聊了一個小時。<br><br>可能當下覺得沒什麼，但很多年之後你真正記得的大學生活，搞不好反而就是這些東西。<br><br>所以如果可以，希望一年之後回頭看，你不是只記得：<br><br>「喔，我以前住過學七舍。」<br><br>而是可以說：<br><br>「我以前在學七舍生活過。」<br><br>不過——<br><br>溫馨的話講完了，接下來還是要先把醜話說在前頭。<br><br>我很好聊天，也很願意幫大家處理問題；很多事情只要可以溝通，我都非常願意先跟大家好好講。<br><br>但是如果是明確違反宿舍規定、影響其他住宿生權益、安全，或已經達到必須處理的程度，那我還是會依照宿舍規定及相關規範處理。<br><br>不要到時候跟我說：<br><br>「樓長我們不是朋友嗎 QAQ」<br><br>朋友歸朋友，規定歸規定。<br><br>你可以找我聊天、找我抱怨、找我算塔羅，甚至一起研究這個規定到底為什麼存在；但是當我穿上樓長這個身分的時候，該處理的事情我還是會處理。<br><br>因為我覺得「性別友善」、「住宿友善」或是「大家好好相處」，並不代表什麼事情都沒關係。<br><br>真正的友善，是讓每一個住在這裡的人，都可以在不影響別人的前提下，安心地生活。<br><br>所以如果你遇到室友、公共空間、設備、噪音、安全、性別議題或任何讓你覺得不舒服的事情，都不用煩惱「這個可以跟樓長講嗎？」<br><br>總之先講再說。<br><br>如果是我的業務，我來處理；<br>如果不是我的業務，我幫你找人；<br>如果我們兩個都不知道——<br><br>那就一起研究這個鍋到底應該甩給誰。<br><br>最後，希望大家這一年都可以在學七舍找到屬於自己的生活方式。<br><br>認識一些人、參加一些活動、學到一些課堂裡不一定會教你的東西，也留下一些多年以後還會記得的故事。<br><br>宿舍可以只是四面牆、一張床和一張書桌。<br><br>但我更希望，<br>我們可以一起讓它成為一個值得被記住的地方。<br><br>歡迎來到學七舍。<br><br>有事歡迎找樓長，沒事也可以來。<br><br>真的不知道要聊什麼的話——<br><br>我牌都準備好了，你人來就好。 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", img: "nn.jpg" },
            { name: "呂伊綾", title: "樓長 (2, 11, 12 樓)", bio: "嗨～大家好！我是這學期2、11、12樓的樓長伊綾，在我擔任樓長的期間，我會盡力幫助大家解決住宿時遇到的問題。<br><br>所以有任何問題歡迎在樓群群組提出，或者私訊我也可以，我會盡快回覆和處理的！", quote: "學七舍這學期會辦許多活動，歡迎大家多多參與！也祝大家在學七舍的住宿生活一切順利、開心！", img: "10.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://https://line.me/R/ti/g/ettzQPZAZP",
        lineLink: "https://line.me/R/ti/g/ettzQPZAZP",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    3: {
        title: "3 樓 男生樓層",
        themeColor: "#643ac7",
        wardens: [
            { name: "劉祐豪", title: "樓長 (2, 3, 4 樓)", bio: "各位香魚們大家好！我是學七舍 2、3、4 樓的樓長劉祐豪。因為 2 樓是性別友善樓層，所以會配置一男一女兩位樓長，而我就是其中一位～兩位樓長都是對於性別議題有一定的瞭解，不用對我們抱有害怕喔~<br><br>我來自化學系博士班，算一算也已經累積大約 10 年的住宿經驗。從大學、研究所一路住到博士班，宿舍生活中大大小小的事情多少都遇過一些，所以不管是房間設備、公共空間、住宿規定、室友相處，還是一些不知道到底該找誰處理的生活疑難雜症，只要我幫得上忙，都很歡迎來找我。如果我不知道答案，也可以陪你一起想想看該找誰、要怎麼處理，不然一起甩鍋。<br><br>我自己其實滿喜歡住宿舍的，因為我覺得宿舍不只是晚上回來睡覺的地方，也是很多人每天生活很長時間的空間。尤其對剛搬進來、第一次住宿，或是第一次離家生活的人來說，可能會有很多不習慣，甚至有些事情會覺得「這種小問題真的可以問嗎？」——可以，真的可以。只要不是叫我幫你寫博士論文，基本上都可以先來問問看。<br><br>我本人非常 E，也很喜歡跟大家聊天，所以不管是宿舍問題、生活問題、課業上的抱怨，還是今天單純很無聊想找人講話，都可以來找我。路上遇到我也可以直接打招呼，不用擔心我認不出你，因為我是重度臉盲，一定認不出你，我會露出「我是不是在哪裡看過你」的表情。<br><br>不過有件事要先自首，我大學不是讀師大的，所以有些「師大生才知道的事」，像是某些校內傳說、特殊用語，或是哪棟樓到底在哪裡，我可能反而比你們還不熟。如果你發現樓長竟然不知道，也不要太震驚，歡迎順便教育我一下，我也很樂意聽你們分享。<br><br>至於興趣嘛……有點多，基本上屬於什麼都會想碰一下的類型。攝影、剪輯、塔羅、料理、遊戲、動畫、魔術、3C、影音設備……很多東西我都感興趣。有時候可能前一天還在研究相機，隔天就突然跑去研究怎麼煮東西，再過幾天又不知道為什麼開始玩魔術。<br><br>所以總之，只要你敢來找我，我就有本事跟你聊下去。而且不一定要有什麼重要的事才來找我，有時候只是想分享今天發生了什麼、最近在追什麼作品、買了什麼奇怪的東西，也都完全 OK。<br><br>唯一需要注意的是，因為博士班的生活比較不固定，我白天有很高的機率會消失在實驗室裡，有時候看到訊息也不一定能馬上處理，所以我的訊息常常會到 22:00 之後才比較有空慢慢回覆。如果是一般問題，可能要稍微給我一點時間；但如果是宿舍的緊急狀況、安全問題或需要立即處理的事情，就不要傻傻等到晚上，請直接依照宿舍的緊急聯絡方式處理，也可以想辦法直接聯絡樓長或相關人員。<br><br>所以——<br>你願意等我到 22:00 後嗎？<br><br>對了，最後還有一件非常重要的事：<br>我很喜歡聊天用顏文字 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧<br><br>如果你不喜歡顏文字、覺得太多很吵，也可以跟我說一聲，我會努力克制一下（大概）。<br><br>總之，接下來這一年請大家多多指教！希望大家在學七舍都可以住得舒服、住得安心，也希望哪天在走廊、電梯或公共空間遇到我的時候，可以很自然地跟我說聲嗨～我會用「你誰啊」的表情回應你的。歡迎來找樓長聊天，也歡迎來找樓長解決問題！解決不了就一起解決有提出問題的人 。", quote: "宿舍是一個很特別的地方。<br><br>我們來自不同的科系、不同的年級、不同的地方，有著完全不同的生活習慣，最後卻因為一個住宿床位，被放進同一棟建築裡生活。<br><br>你可能會在這裡認識未來很多年都還會聯絡的朋友，也可能只是每天跟某個人一起搭電梯，直到退宿那天都還是不知道對方叫什麼名字。<br><br>但不管是哪一種，我都希望大家不要只是把學七舍當成一個「晚上回來睡覺的地方」。<br><br>台積電創辦人、前董事長張忠謀曾經提到：<br>「一流大學學生應該100%住校，學生住宿有許多競爭與合作機會，不是非住宿學生可學得到。」<br><br>我自己覺得有點誇張啦，但住宿最大的價值，從來不只是離教室比較近、晚上不用通勤，或是有一張床可以睡覺而已。<br><br>宿舍本身就是一個學習的地方。<br><br>你會學著怎麼跟生活習慣完全不同的人相處、怎麼溝通、怎麼合作、怎麼表達自己的需求，也會慢慢發現，不是所有事情都會照著自己習慣的方式運作。<br><br>有人十二點準時睡覺，有人十二點才剛開始人生；<br>有人洗澡十分鐘解決，有人進浴室後彷彿開始另一段人生；<br>有人喜歡熱鬧，有人只想安安靜靜地待在自己的世界裡。<br><br>這些差異有時候會很有趣，有時候也真的會讓你很想掐死對方。<br><br>但怎麼在這些差異裡找到彼此都能接受的方式，我覺得就是住宿生活最珍貴的地方之一。<br><br>所以我希望大家可以對「我是學七舍的住宿生」這件事情多一點認同感。<br><br>學七舍不只是你房間門牌上面的那個地址，而是我們這一年一起生活的地方。<br><br>如果有活動，有空可以出來看看；<br>在公共空間遇到其他住宿生，可以認識一下；<br>如果你有什麼專長、興趣或奇怪的技能，也很歡迎分享。<br><br>甚至如果你只是某天晚上不知道要幹嘛，也可以來找樓長。<br><br>除了前面自介提到的一堆興趣之外，我甚至可以提供——<br>樓長限定塔羅服務 ( •̀ ω •́ )✧（恭喜你有好好看到這裡，這是給看到這裡的你們獎勵）<br><br>感情、課業、人生、研究、今天到底要不要吃宵夜，都可以來問。<br><br>至於準不準嘛……<br><br>塔羅牌負責回答問題，我本人不負責後續發生的事情。<br><br>但至少可以保證你會得到一個心靈的寄託或聊天的機會。<br><br>我也希望這一年大家可以多利用宿舍裡提供的資源與活動。很多學習其實不一定發生在教室裡，有時候是跟室友的一次爭執、有時候是活動中認識一個不同科系的人、有時候只是半夜在公共空間跟某個人聊了一個小時。<br><br>可能當下覺得沒什麼，但很多年之後你真正記得的大學生活，搞不好反而就是這些東西。<br><br>所以如果可以，希望一年之後回頭看，你不是只記得：<br><br>「喔，我以前住過學七舍。」<br><br>而是可以說：<br><br>「我以前在學七舍生活過。」<br><br>不過——<br><br>溫馨的話講完了，接下來還是要先把醜話說在前頭。<br><br>我很好聊天，也很願意幫大家處理問題；很多事情只要可以溝通，我都非常願意先跟大家好好講。<br><br>但是如果是明確違反宿舍規定、影響其他住宿生權益、安全，或已經達到必須處理的程度，那我還是會依照宿舍規定及相關規範處理。<br><br>不要到時候跟我說：<br><br>「樓長我們不是朋友嗎 QAQ」<br><br>朋友歸朋友，規定歸規定。<br><br>你可以找我聊天、找我抱怨、找我算塔羅，甚至一起研究這個規定到底為什麼存在；但是當我穿上樓長這個身分的時候，該處理的事情我還是會處理。<br><br>因為我覺得「性別友善」、「住宿友善」或是「大家好好相處」，並不代表什麼事情都沒關係。<br><br>真正的友善，是讓每一個住在這裡的人，都可以在不影響別人的前提下，安心地生活。<br><br>所以如果你遇到室友、公共空間、設備、噪音、安全、性別議題或任何讓你覺得不舒服的事情，都不用煩惱「這個可以跟樓長講嗎？」<br><br>總之先講再說。<br><br>如果是我的業務，我來處理；<br>如果不是我的業務，我幫你找人；<br>如果我們兩個都不知道——<br><br>那就一起研究這個鍋到底應該甩給誰。<br><br>最後，希望大家這一年都可以在學七舍找到屬於自己的生活方式。<br><br>認識一些人、參加一些活動、學到一些課堂裡不一定會教你的東西，也留下一些多年以後還會記得的故事。<br><br>宿舍可以只是四面牆、一張床和一張書桌。<br><br>但我更希望，<br>我們可以一起讓它成為一個值得被記住的地方。<br><br>歡迎來到學七舍。<br><br>有事歡迎找樓長，沒事也可以來。<br><br>真的不知道要聊什麼的話——<br><br>我牌都準備好了，你人來就好。 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", img: "nn.jpg" },
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/tPJLfb7TG5",
        lineLink: "https://line.me/R/ti/g/tPJLfb7TG5",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    4: {
        title: "4 樓 男生樓層",
        themeColor: "#643ac7",
        wardens: [
            { name: "劉祐豪", title: "樓長 (2, 3, 4 樓)", bio: "各位香魚們大家好！我是學七舍 2、3、4 樓的樓長劉祐豪。因為 2 樓是性別友善樓層，所以會配置一男一女兩位樓長，而我就是其中一位～兩位樓長都是對於性別議題有一定的瞭解，不用對我們抱有害怕喔~<br><br>我來自化學系博士班，算一算也已經累積大約 10 年的住宿經驗。從大學、研究所一路住到博士班，宿舍生活中大大小小的事情多少都遇過一些，所以不管是房間設備、公共空間、住宿規定、室友相處，還是一些不知道到底該找誰處理的生活疑難雜症，只要我幫得上忙，都很歡迎來找我。如果我不知道答案，也可以陪你一起想想看該找誰、要怎麼處理，不然一起甩鍋。<br><br>我自己其實滿喜歡住宿舍的，因為我覺得宿舍不只是晚上回來睡覺的地方，也是很多人每天生活很長時間的空間。尤其對剛搬進來、第一次住宿，或是第一次離家生活的人來說，可能會有很多不習慣，甚至有些事情會覺得「這種小問題真的可以問嗎？」——可以，真的可以。只要不是叫我幫你寫博士論文，基本上都可以先來問問看。<br><br>我本人非常 E，也很喜歡跟大家聊天，所以不管是宿舍問題、生活問題、課業上的抱怨，還是今天單純很無聊想找人講話，都可以來找我。路上遇到我也可以直接打招呼，不用擔心我認不出你，因為我是重度臉盲，一定認不出你，我會露出「我是不是在哪裡看過你」的表情。<br><br>不過有件事要先自首，我大學不是讀師大的，所以有些「師大生才知道的事」，像是某些校內傳說、特殊用語，或是哪棟樓到底在哪裡，我可能反而比你們還不熟。如果你發現樓長竟然不知道，也不要太震驚，歡迎順便教育我一下，我也很樂意聽你們分享。<br><br>至於興趣嘛……有點多，基本上屬於什麼都會想碰一下的類型。攝影、剪輯、塔羅、料理、遊戲、動畫、魔術、3C、影音設備……很多東西我都感興趣。有時候可能前一天還在研究相機，隔天就突然跑去研究怎麼煮東西，再過幾天又不知道為什麼開始玩魔術。<br><br>所以總之，只要你敢來找我，我就有本事跟你聊下去。而且不一定要有什麼重要的事才來找我，有時候只是想分享今天發生了什麼、最近在追什麼作品、買了什麼奇怪的東西，也都完全 OK。<br><br>唯一需要注意的是，因為博士班的生活比較不固定，我白天有很高的機率會消失在實驗室裡，有時候看到訊息也不一定能馬上處理，所以我的訊息常常會到 22:00 之後才比較有空慢慢回覆。如果是一般問題，可能要稍微給我一點時間；但如果是宿舍的緊急狀況、安全問題或需要立即處理的事情，就不要傻傻等到晚上，請直接依照宿舍的緊急聯絡方式處理，也可以想辦法直接聯絡樓長或相關人員。<br><br>所以——<br>你願意等我到 22:00 後嗎？<br><br>對了，最後還有一件非常重要的事：<br>我很喜歡聊天用顏文字 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧<br><br>如果你不喜歡顏文字、覺得太多很吵，也可以跟我說一聲，我會努力克制一下（大概）。<br><br>總之，接下來這一年請大家多多指教！希望大家在學七舍都可以住得舒服、住得安心，也希望哪天在走廊、電梯或公共空間遇到我的時候，可以很自然地跟我說聲嗨～我會用「你誰啊」的表情回應你的。歡迎來找樓長聊天，也歡迎來找樓長解決問題！解決不了就一起解決有提出問題的人 。", quote: "宿舍是一個很特別的地方。<br><br>我們來自不同的科系、不同的年級、不同的地方，有著完全不同的生活習慣，最後卻因為一個住宿床位，被放進同一棟建築裡生活。<br><br>你可能會在這裡認識未來很多年都還會聯絡的朋友，也可能只是每天跟某個人一起搭電梯，直到退宿那天都還是不知道對方叫什麼名字。<br><br>但不管是哪一種，我都希望大家不要只是把學七舍當成一個「晚上回來睡覺的地方」。<br><br>台積電創辦人、前董事長張忠謀曾經提到：<br>「一流大學學生應該100%住校，學生住宿有許多競爭與合作機會，不是非住宿學生可學得到。」<br><br>我自己覺得有點誇張啦，但住宿最大的價值，從來不只是離教室比較近、晚上不用通勤，或是有一張床可以睡覺而已。<br><br>宿舍本身就是一個學習的地方。<br><br>你會學著怎麼跟生活習慣完全不同的人相處、怎麼溝通、怎麼合作、怎麼表達自己的需求，也會慢慢發現，不是所有事情都會照著自己習慣的方式運作。<br><br>有人十二點準時睡覺，有人十二點才剛開始人生；<br>有人洗澡十分鐘解決，有人進浴室後彷彿開始另一段人生；<br>有人喜歡熱鬧，有人只想安安靜靜地待在自己的世界裡。<br><br>這些差異有時候會很有趣，有時候也真的會讓你很想掐死對方。<br><br>但怎麼在這些差異裡找到彼此都能接受的方式，我覺得就是住宿生活最珍貴的地方之一。<br><br>所以我希望大家可以對「我是學七舍的住宿生」這件事情多一點認同感。<br><br>學七舍不只是你房間門牌上面的那個地址，而是我們這一年一起生活的地方。<br><br>如果有活動，有空可以出來看看；<br>在公共空間遇到其他住宿生，可以認識一下；<br>如果你有什麼專長、興趣或奇怪的技能，也很歡迎分享。<br><br>甚至如果你只是某天晚上不知道要幹嘛，也可以來找樓長。<br><br>除了前面自介提到的一堆興趣之外，我甚至可以提供——<br>樓長限定塔羅服務 ( •̀ ω •́ )✧（恭喜你有好好看到這裡，這是給看到這裡的你們獎勵）<br><br>感情、課業、人生、研究、今天到底要不要吃宵夜，都可以來問。<br><br>至於準不準嘛……<br><br>塔羅牌負責回答問題，我本人不負責後續發生的事情。<br><br>但至少可以保證你會得到一個心靈的寄託或聊天的機會。<br><br>我也希望這一年大家可以多利用宿舍裡提供的資源與活動。很多學習其實不一定發生在教室裡，有時候是跟室友的一次爭執、有時候是活動中認識一個不同科系的人、有時候只是半夜在公共空間跟某個人聊了一個小時。<br><br>可能當下覺得沒什麼，但很多年之後你真正記得的大學生活，搞不好反而就是這些東西。<br><br>所以如果可以，希望一年之後回頭看，你不是只記得：<br><br>「喔，我以前住過學七舍。」<br><br>而是可以說：<br><br>「我以前在學七舍生活過。」<br><br>不過——<br><br>溫馨的話講完了，接下來還是要先把醜話說在前頭。<br><br>我很好聊天，也很願意幫大家處理問題；很多事情只要可以溝通，我都非常願意先跟大家好好講。<br><br>但是如果是明確違反宿舍規定、影響其他住宿生權益、安全，或已經達到必須處理的程度，那我還是會依照宿舍規定及相關規範處理。<br><br>不要到時候跟我說：<br><br>「樓長我們不是朋友嗎 QAQ」<br><br>朋友歸朋友，規定歸規定。<br><br>你可以找我聊天、找我抱怨、找我算塔羅，甚至一起研究這個規定到底為什麼存在；但是當我穿上樓長這個身分的時候，該處理的事情我還是會處理。<br><br>因為我覺得「性別友善」、「住宿友善」或是「大家好好相處」，並不代表什麼事情都沒關係。<br><br>真正的友善，是讓每一個住在這裡的人，都可以在不影響別人的前提下，安心地生活。<br><br>所以如果你遇到室友、公共空間、設備、噪音、安全、性別議題或任何讓你覺得不舒服的事情，都不用煩惱「這個可以跟樓長講嗎？」<br><br>總之先講再說。<br><br>如果是我的業務，我來處理；<br>如果不是我的業務，我幫你找人；<br>如果我們兩個都不知道——<br><br>那就一起研究這個鍋到底應該甩給誰。<br><br>最後，希望大家這一年都可以在學七舍找到屬於自己的生活方式。<br><br>認識一些人、參加一些活動、學到一些課堂裡不一定會教你的東西，也留下一些多年以後還會記得的故事。<br><br>宿舍可以只是四面牆、一張床和一張書桌。<br><br>但我更希望，<br>我們可以一起讓它成為一個值得被記住的地方。<br><br>歡迎來到學七舍。<br><br>有事歡迎找樓長，沒事也可以來。<br><br>真的不知道要聊什麼的話——<br><br>我牌都準備好了，你人來就好。 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", img: "nn.jpg" },
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/8ya4SHXvDB",
        lineLink: "https://line.me/R/ti/g/8ya4SHXvDB",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    5: {
        title: "5 樓 男生樓層",
        themeColor: "#0284c7",
        wardens: [
            { name: "林冠廷", title: "樓長 (5, 6, 7 樓)", bio: "我是567樓樓長，有宿舍相關問題請私訊，謝謝", quote: "希望大家住宿都能遇到理想的室友，有住宿問題都能在line上找這張照片的頭像跟我抱怨，我會幫你們回報處理，謝謝。", img: "GT.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/nVddWSRjM3",
        lineLink: "https://line.me/R/ti/g/nVddWSRjM3",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    6: {
        title: "6 樓 男生樓層",
        themeColor: "#0284c7",
        wardens: [
            { name: "林冠廷", title: "樓長 (5, 6, 7 樓)", bio: "我是567樓樓長，有宿舍相關問題請私訊，謝謝", quote: "希望大家住宿都能遇到理想的室友，有住宿問題都能在line上找這張照片的頭像跟我抱怨，我會幫你們回報處理，謝謝。", img: "GT.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/7npsDBRaeE",
        lineLink: "https://line.me/R/ti/g/7npsDBRaeE",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    7: {
        title: "7 樓 男生樓層",
        themeColor: "#0284c7",
        wardens: [
            { name: "林冠廷", title: "樓長 (5, 6, 7 樓)", bio: "我是567樓樓長，有宿舍相關問題請私訊，謝謝", quote: "希望大家住宿都能遇到理想的室友，有住宿問題都能在line上找這張照片的頭像跟我抱怨，我會幫你們回報處理，謝謝。", img: "GT.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/f-ntCQYZ9B",
        lineLink: "https://line.me/R/ti/g/f-ntCQYZ9B",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    8: {
        title: "8 樓 女生樓層",
        themeColor: "#ff6f61",
        wardens: [
            { name: "林宜宣", title: "樓長 (8, 9, 10 樓)", bio: "搭好！我是 8-10 的樓長，目前就讀營養系大四。<br>不知不覺在學校也生活到第四年了，宿舍生活的大小事大致上也都算熟悉了。<br>如果遇到任何宿舍相關問題或疑問，都歡迎隨時找我！可以直接在樓群 @ 我，或私訊找我也沒問題，我會盡快回覆的！", quote: "歡迎大家入住！宿舍不只是休息睡覺的空間，更是認識新朋友、創造大學回憶的重要地方。因此，這學期我們也會舉辦一些活動，歡迎大家揪室友一起來參加，一起留下滿滿的回憶ㄛ！另外，記得如果有宿舍相關的問題可以直接跟我說ㄛ！祝大家住宿生活順利、每天開心，然後這學期都歐趴！", img: "01.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/pT8NmCh57a",
        lineLink: "https://line.me/R/ti/g/pT8NmCh57a",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    9: {
        title: "9 樓 女生樓層",
        themeColor: "#ff6f61",
        wardens: [
            { name: "林宜宣", title: "樓長 (8, 9, 10 樓)", bio: "搭好！我是 8-10 的樓長，目前就讀營養系大四。<br>不知不覺在學校也生活到第四年了，宿舍生活的大小事大致上也都算熟悉了。<br>如果遇到任何宿舍相關問題或疑問，都歡迎隨時找我！可以直接在樓群 @ 我，或私訊找我也沒問題，我會盡快回覆的！", quote: "歡迎大家入住！宿舍不只是休息睡覺的空間，更是認識新朋友、創造大學回憶的重要地方。因此，這學期我們也會舉辦一些活動，歡迎大家揪室友一起來參加，一起留下滿滿的回憶ㄛ！另外，記得如果有宿舍相關的問題可以直接跟我說ㄛ！祝大家住宿生活順利、每天開心，然後這學期都歐趴！", img: "01.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/tbZLBUWRCd",
        lineLink: "https://line.me/R/ti/g/tbZLBUWRCd",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    10: {
        title: "10 樓 女生樓層",
        themeColor: "#ff6f61",
        wardens: [
            { name: "林宜宣", title: "樓長 (8, 9, 10 樓)", bio: "搭好！我是 8-10 的樓長，目前就讀營養系大四。<br>不知不覺在學校也生活到第四年了，宿舍生活的大小事大致上也都算熟悉了。<br>如果遇到任何宿舍相關問題或疑問，都歡迎隨時找我！可以直接在樓群 @ 我，或私訊找我也沒問題，我會盡快回覆的！", quote: "歡迎大家入住！宿舍不只是休息睡覺的空間，更是認識新朋友、創造大學回憶的重要地方。因此，這學期我們也會舉辦一些活動，歡迎大家揪室友一起來參加，一起留下滿滿的回憶ㄛ！另外，記得如果有宿舍相關的問題可以直接跟我說ㄛ！祝大家住宿生活順利、每天開心，然後這學期都歐趴！", img: "01.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/EvGUQLEnFp",
        lineLink: "https://line.me/R/ti/g/EvGUQLEnFp",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    11: {
        title: "11 樓 女生樓層",
        themeColor: "#ff95ca",
        wardens: [
            { name: "呂伊綾", title: "樓長 (2, 11, 12 樓)", bio: "嗨～大家好！我是這學期2、11、12樓的樓長伊綾，在我擔任樓長的期間，我會盡力幫助大家解決住宿時遇到的問題。<br><br>所以有任何問題歡迎在樓群群組提出，或者私訊我也可以，我會盡快回覆和處理的！", quote: "學七舍這學期會辦許多活動，歡迎大家多多參與！也祝大家在學七舍的住宿生活一切順利、開心！", img: "10.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/MdetDsdXsV",
        lineLink: "https://line.me/R/ti/g/MdetDsdXsV",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    },
    12: {
        title: "12 樓 女生樓層",
        themeColor: "#ff95ca",
        wardens: [
            { name: "呂伊綾", title: "樓長 (2, 11, 12 樓)", bio: "嗨～大家好！我是這學期2、11、12樓的樓長伊綾，在我擔任樓長的期間，我會盡力幫助大家解決住宿時遇到的問題。<br><br>所以有任何問題歡迎在樓群群組提出，或者私訊我也可以，我會盡快回覆和處理的！", quote: "學七舍這學期會辦許多活動，歡迎大家多多參與！也祝大家在學七舍的住宿生活一切順利、開心！", img: "10.jpg" }
        ],
        lineQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/R/ti/g/44H9QA_LdT",
        lineLink: "https://line.me/R/ti/g/44H9QA_LdT",
        notice: "請了解相關住宿須知，包含宿舍修繕系統使用、用電限制與安全、夜間安寧、樓層安全衛生維護、郵寄資訊與更多相關法規。<br><br><a href='https://dorm.sa.ntnu.edu.tw/' target='_blank'>>> 詳細法規和宿舍資訊，請查閱「住服中心官網」</a>"
    }
};

function switchFloor(targetFloor) {
    const data = floorData[targetFloor];
    if (!data) return;

    document.documentElement.style.setProperty('--theme-color', data.themeColor);

    document.querySelectorAll('.nav-btn').forEach((btn, idx) => {
        if (idx + 2 === targetFloor) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    let wardensHtml = '';
    data.wardens.forEach((w, index) => {
        const profile = wardenProfiles[w.name] || { bg: "#ffffff", shadow: "rgba(0,0,0,0.1)", stickers: [] };
        
        // 產生貼紙圖片 HTML
        let stickersHtml = '';
        profile.stickers.forEach(imgName => {
            // 假設圖片放在跟 html 同一層，如果有開資料夾可改成 `images/${imgName}`
            stickersHtml += `<img src="${imgName}" class="sticker-img" alt="貼紙裝飾" onerror="this.style.display='none'">`;
        });

        const isLongBio = w.bio.length > 55;

        let tarotBtnHtml = '';
        if (w.name === "劉祐豪") {
            tarotBtnHtml = `<button class="tarot-egg-btn" onclick="openTarotModal()"><i class="fa-solid fa-wand-magic-sparkles"></i></button>`;
        }

        wardensHtml += `
            <div class="warden-box" style="--warden-bg: ${profile.bg}; --warden-shadow: ${profile.shadow};">
                ${stickersHtml}
                <img src="${w.img}" alt="${w.name}" class="avatar">
                <div class="warden-desc">
                    <h3>${w.name}</h3>
                    <span class="w-title"><i class="fa-solid fa-id-badge"></i> ${w.title}</span>
                     ${tarotBtnHtml}
                    
                    <div class="bio-container">
                        <p class="bio-text ${!isLongBio ? 'expanded' : ''}" id="bio-${targetFloor}-${index}">${w.bio}</p>
                        ${isLongBio ? `<button class="read-more-btn" onclick="toggleBio('${targetFloor}-${index}')" id="btn-${targetFloor}-${index}">顯示全文</button>` : ''}
                    </div>

                    <div class="message-accordion" id="acc-${targetFloor}-${index}">
                        <button class="accordion-header" onclick="toggleAccordion('acc-${targetFloor}-${index}')">
                            <span><i class="fa-solid fa-envelope-open-text"></i> 給住宿生的一段話</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="accordion-content">
                            "${w.quote}"
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    const area = document.getElementById('floor-display-area');
    area.innerHTML = `
        <div class="floor-detail-card">
            <div class="floor-title-banner">
                <h2> ${data.title}</h2>
            </div>
            
            <div class="wardens-grid">
                ${wardensHtml}
            </div>

            <div class="floor-resources">
                <div class="qr-box">
                    <h3><i class="fa-brands fa-line" style="color:#00B900"></i> 本樓層 LINE 官方群</h3>
                    <p>掃描加入群組接收最新動態</p>
                    <img src="${data.lineQr}" alt="LINE QR Code">
                    <br><br>
                    <a href="${data.lineLink}" target="_blank" class="pdf-btn">點擊直接加入群組</a>
                </div>

                <div class="notice-box">
                    <h3><i class="fa-solid fa-circle-exclamation" style="color:#e11d48"></i> 樓層須知與公告</h3>
                    <p>${data.notice}</p>
                    <br>
                    <a href="your-announcement.pdf" target="_blank" class="pdf-btn">
                        <i class="fa-solid fa-file-pdf"></i> 下載完整版 PDF 公告
                    </a>
                </div>
            </div>
        </div>
    `;
}

function openTarotModal() {
    document.getElementById("tarot-modal").classList.add("show");
}

function closeTarotModal() {
    document.getElementById("tarot-modal").classList.remove("show");
}

function toggleBio(id) {
    const textElem = document.getElementById(`bio-${id}`);
    const btnElem = document.getElementById(`btn-${id}`);
    
    textElem.classList.toggle('expanded');
    if (textElem.classList.contains('expanded')) {
        btnElem.textContent = "收起";
    } else {
        btnElem.textContent = "顯示全文";
    }
}

function toggleAccordion(accId) {
    const accElem = document.getElementById(accId);
    accElem.classList.toggle('active');
}

// 初始化 Particles.js 氣泡浮動特效
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#ffffff", "#38bdf8", "#0284c7"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.6, "random": true },
        "size": { "value": 5, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#38bdf8",
            "opacity": 0.25,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "top",
            "random": true,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "bubble": { "distance": 200, "size": 8, "duration": 2, "opacity": 0.8 },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

// 電梯互動邏輯
document.addEventListener("DOMContentLoaded", () => {
    const elevatorScreen = document.getElementById("elevator-screen");
    const mainContent = document.getElementById("main-content");
    const floorNumberDisplay = document.getElementById("floor-number");
    const elevatorStatus = document.getElementById("elevator-status");
    const callElevatorBtn = document.getElementById("call-elevator-btn");

    const floorKeys = document.querySelectorAll(".floor-key");
    floorKeys.forEach(key => {
        key.addEventListener("click", () => {
            const selectedFloor = parseInt(key.getAttribute("data-floor"));
            
            elevatorScreen.classList.add("vibrating");
            elevatorStatus.textContent = `正在前往 ${selectedFloor} 樓...`;

            let current = 1;
            const step = selectedFloor > current ? 1 : -1;
            const interval = setInterval(() => {
                if (current !== selectedFloor) {
                    current += step;
                    floorNumberDisplay.textContent = current;
                } else {
                    clearInterval(interval);
                }
            }, 100);

            setTimeout(() => {
                elevatorScreen.classList.remove("vibrating");
                elevatorScreen.classList.add("open");
                mainContent.classList.remove("hidden");
                switchFloor(selectedFloor);
            }, 1500);

            setTimeout(() => {
                elevatorScreen.classList.add("fade-out");
            }, 2500);
        });
    });

    callElevatorBtn.addEventListener("click", () => {
        elevatorScreen.classList.remove("fade-out", "open");
        elevatorStatus.textContent = "請選擇您的目的地樓層";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    switchFloor(1);
});