export function boardBtnEvent(evt) {
    alert(evt.currentTarget.id);
    window.localStorage.setItem("currentBoardId", evt.currentTarget.id)
}