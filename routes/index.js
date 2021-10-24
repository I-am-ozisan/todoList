let router = require("express").Router();

/**
 * 初期表示
 */
router.get("/init", (req, res) => {
    //クッキー取得
    let arrayCookie = new Array();
    let cookieFlg = "0"
    if(req.cookies.key !== "undefined"){
        arrayCookie = JSON.parse(req.cookies.key);
        cookieFlg = "1"
    }
    //レスポンスデータ作成
    let resData ={
        taskArray : arrayCookie,
        cookieFlg : cookieFlg
    }
            
    res.render("top.ejs", resData);
});

/**
 * 追加ボタン押下時
 */
router.post("/add", (req, res) => {
    //クッキー設定
    res.cookie('key', JSON.stringify(req.body.taskArray));

    res.send();
});

/**
 * 削除ボタン押下時
 */
router.post("/delete", (req, res) => {
    //クッキー設定
    res.cookie('key', JSON.stringify(req.body.taskArray));

    res.send();
});

module.exports = router;