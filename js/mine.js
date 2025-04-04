// 游戏配置
const GRID_SIZE = 8;
const MAX_MINES = 6;
let minesCount = MAX_MINES;
let grid = [];
let gameOver = false;
let startTime;
let timerInterval;

// 初始化游戏
function initGame() {
    gameOver = false;
    minesCount = MAX_MINES;
    document.getElementById('mines-counter').textContent = minesCount.toString().padStart(3, '0');
    document.getElementById('current-mines').textContent = minesCount;
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = '000';
    
    // 创建网格
    const gridElement = document.getElementById('grid');
    gridElement.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 24px)`;
    gridElement.innerHTML = '';
    
    // 初始化数据
    grid = Array(GRID_SIZE).fill().map(() => 
        Array(GRID_SIZE).fill().map(() => ({
            isMine: false,
            revealed: false,
            flagged: false,
            neighborMines: 0
        }))
    );

    // 放置地雷
    let minesPlaced = 0;
    while (minesPlaced < MAX_MINES) {
        const x = Math.floor(Math.random() * GRID_SIZE);
        const y = Math.floor(Math.random() * GRID_SIZE);
        if (!grid[x][y].isMine) {
            grid[x][y].isMine = true;
            minesPlaced++;
        }
    }

    // 计算相邻地雷
    for (let x = 0; x < GRID_SIZE; x++) {
        for (let y = 0; y < GRID_SIZE; y++) {
            if (!grid[x][y].isMine) {
                grid[x][y].neighborMines = countNeighborMines(x, y);
            }
        }
    }

    // 创建单元格
    for (let x = 0; x < GRID_SIZE; x++) {
        for (let y = 0; y < GRID_SIZE; y++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.addEventListener('click', handleLeftClick);
            cell.addEventListener('contextmenu', handleRightClick);
            gridElement.appendChild(cell);
        }
    }

    // 绑定按钮事件
    document.querySelector('button').addEventListener('click', initGame);
}

// 计算相邻地雷数
function countNeighborMines(x, y) {
    let count = 0;
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE) {
                if (grid[nx][ny].isMine) count++;
            }
        }
    }
    return count;
}

// 左键点击处理
function handleLeftClick(e) {
    if (gameOver) return;
    if (!startTime) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
    
    const x = parseInt(e.target.dataset.x);
    const y = parseInt(e.target.dataset.y);
    const cell = grid[x][y];
    
    if (cell.flagged || cell.revealed) return;
    
    if (cell.isMine) {
        gameOver = true;
        revealAll();
        alert('游戏结束！');
        return;
    }
    
    reveal(x, y);
    checkWin();
}

// 右键点击处理
function handleRightClick(e) {
    e.preventDefault();
    if (gameOver) return;
    
    const x = parseInt(e.target.dataset.x);
    const y = parseInt(e.target.dataset.y);
    const cell = grid[x][y];
    
    if (!cell.revealed) {
        if (cell.flagged) {
            cell.flagged = false;
            minesCount++;
        } else if (minesCount > 0) {
            cell.flagged = true;
            minesCount--;
        }
        e.target.classList.toggle('flag', cell.flagged);
        document.getElementById('mines-counter').textContent = minesCount.toString().padStart(3, '0');
        document.getElementById('current-mines').textContent = minesCount;
    }
}

// 展开单元格
function reveal(x, y) {
    if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return;
    const cell = grid[x][y];
    if (cell.revealed || cell.flagged) return;
    
    cell.revealed = true;
    const element = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    element.classList.add('revealed');
    
    if (cell.neighborMines > 0) {
        element.textContent = cell.neighborMines;
    } else {
        // 展开相邻区域
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                reveal(x + dx, y + dy);
            }
        }
    }
}

// 显示所有地雷
function revealAll() {
    grid.forEach((row, x) => {
        row.forEach((cell, y) => {
            const element = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            if (cell.isMine) {
                element.classList.add('mine');
            }
        });
    });
}

// 胜利判断
function checkWin() {
    let unrevealedSafe = 0;
    grid.forEach(row => {
        row.forEach(cell => {
            if (!cell.revealed && !cell.isMine) unrevealedSafe++;
        });
    });
    
    if (unrevealedSafe === 0) {
        gameOver = true;
        alert('恭喜，你赢了！');
    }
}

// 更新计时器
function updateTimer() {
    const time = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = time.toString().padStart(3, '0');
}

// 初始化游戏
document.addEventListener('DOMContentLoaded', initGame);
