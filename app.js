let express = require("express");
let app = express();
let cookieParser = require("cookie-parser");
//レンダーの指定
app.set("view engine", "ejs");
//静的ファイルの読み込み
app.use('/public', express.static(__dirname + '/public'));
//クッキーパーサーの設定。
app.use(cookieParser());
//ボーディーパーサーの設定。
app.use(express.urlencoded(true));
app.use(express.json())
//ルーティングの実施
app.use("/", require("./routes/index.js"));

app.listen(3000);;