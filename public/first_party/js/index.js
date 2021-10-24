
const addUrl = "/add";
const deleteUrl = "/delete";

/**
 * 追加ボタン押下時
 */
$(".add-btn").on("click", () => {
    //追加タスク取得
    let addTask = $(".form-control").val();
    const checkBoxStr = '<input class="form-check-input me-1" type="checkbox" value="" aria-label="..."></input>';

    //要素追加
    $("ul").append('<li class="list-group-item"> ' + checkBoxStr + "<label>" + addTask + "</label>" + "</li>");

    //リクエスト送信
    reqAjax(createRequest() , addUrl);
});

$(".delete-btn").on("click",() =>{
    //要素削除
    $(":checkbox:checked").each((index, element) => {
        $(element).parent("li").remove();
    });
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