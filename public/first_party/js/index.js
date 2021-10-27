
const addUrl = "/add";
const deleteUrl = "/delete";
const addErrorMessage = "追加したいタスクを入力してください";
const deleteErrorMessage = "削除したいタスクを選択してください";

/**
 * 追加ボタン押下時
 */
$(".add-btn").on("click", () => {
    invisibleErrorMessage();
    //追加タスク取得
    let addTask = $(".form-control").val();
    //入力チェック
    if(!addTask){
        visibleErrorMessage(addErrorMessage);
        return false;
    }
    const checkBoxStr = '<input class="form-check-input me-1" type="checkbox" value="" aria-label="..."></input>';

    //要素追加
    $("ul").append('<li class="list-group-item"> ' + checkBoxStr + "<label>" + addTask + "</label>" + "</li>");

    //リクエスト送信
    reqAjax(createRequest() , addUrl);
});


/**
 * 削除ボタン押下時
 */
$(".delete-btn").on("click",() =>{
    invisibleErrorMessage();
    let deleteFlg = 0;
    //要素削除
    $(":checkbox:checked").each((index, element) => {
        $(element).parent("li").remove();
        deleteFlg = 1;
    });
    //入力チェック
    if(!deleteFlg){
        visibleErrorMessage(deleteErrorMessage);
        return false;
    }
    //リクエスト送信
    reqAjax(createRequest(),deleteUrl);
});

/**
 * リクエスト情報作成
 */
function createRequest(){
     //リクエスト情報作成
     let arrayReqData = {
         taskArray: []
     };
     $(".list-group-item label").each((index, element) => {
        arrayReqData.taskArray.push($(element).text());
    });

    return arrayReqData;
}

/**
 * リクエスト送信
 */
function reqAjax(reqData,url) {
    $.ajax({
        async: false,
        url: url,
        type: "post",
        data: reqData,
        dataType: "text"
    }).done((res) => {
        console.log(res);
    }).fail((XMLHttpRequest, textStatus, errorThrown) => {
        alert(textStatus+errorThrown);
    })
}

/**
 * エラーメッセージを表示
 */
function visibleErrorMessage(message){
    $(".alert-warning").css({
        "display":"inherit"
    });
    $(".alert-warning").text(message);
}

/**
 * エラーメッセージを非表示
 */
function invisibleErrorMessage(){
    $(".alert-warning").css({
        "display":"none"
    })
}