export function boardBtnEvent(evt) {
    alert(evt.currentTarget.id);
    window.localStorage.setItem("ActiveBoardId", evt.currentTarget.id)
}