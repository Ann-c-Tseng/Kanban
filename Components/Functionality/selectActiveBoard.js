export function boardBtnEvent(evt) {
    window.localStorage.setItem("ActiveBoardId", evt.currentTarget.id)
}