const gameBoard = (() => {
    const createPlayer = (player, action, ai, turn) => {
        return {player, action, ai, turn};
    };

    const player1 = createPlayer('player 1', 'X', false, true);
    const player2 = createPlayer('player 2', 'O', false, false);

    // Who's turn is it?
    let turns = 0;

    // Board layout
    let board = [];

    // Who won?
    let checkWinner = [];
    
})