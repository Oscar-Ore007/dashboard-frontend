export const getListByBoardId = (boards, boardID) => {
    const board = boards[boardID];
    const lists = board.lists;
    return lists;
};