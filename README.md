# clean-mine
# Windows 7 扫雷网页版说明

## 🕹️ 使用说明

### 启动游戏
1. 打开网页自动加载8x8雷区
2. 顶部显示剩余雷数/重置按钮/计时器
3. 底部实时显示当前未标记雷数

### 操作方式
- **左键单击**：翻开地块  
  - 显示数字：周围8格中的雷数
  - 空白区域：自动展开相邻安全区
- **右键单击**：标记/取消标记地雷（最多6个）
- **笑脸按钮**：点击重置游戏

### 胜负条件
- ❌ **失败**：点击到地雷时触发
- 🏆 **胜利**：正确标记所有雷并翻开安全区
- ⏱️ 计时器在首次点击后启动

---

## 🎨 设计思路

### 视觉还原
- **经典灰阶配色**：`#c0c0c0`背景与伪3D边框
- **像素级控件**：24x24固定单元格+16px数字字体
- **SVG内嵌图标**：地雷（黑圆点）与旗帜（红色三角）

### 交互设计
- **动态反馈**：
  - 按钮悬停放大110%
  - 单元格按压边框反转
  - 标记旗帜即时计数更新
- **响应式布局**：
  - 媒体查询适配移动端（<600px）
  - 计数器动态字号调整
  - 游戏面板最大宽度限制

### 代码架构
```text
技术栈：
- HTML5 语义化结构
- CSS3 弹性布局+网格布局
- JavaScript 事件驱动模型

模块化设计：
1. 视图层：独立CSS文件
2. 逻辑层：分离JS文件
3. 数据层：二维数组存储雷区状态
```

---

# Windows 7 Minesweeper Web Version Instructions

## 🕹️ Usage Instructions

### Starting the Game
1. The webpage automatically loads an 8x8 minefield upon opening.
2. The top displays the remaining mine count / reset button / timer.
3. The bottom shows the current unmarked mine count in real-time.

### Operation Methods
- **Left Click**: Uncover a tile
  - Displays a number: the number of mines in the surrounding 8 tiles
  - Blank area: automatically expands adjacent safe zones
- **Right Click**: Mark / Unmark a mine (maximum of 6)
- **Smiley Button**: Click to reset the game

### Win/Loss Conditions
- ❌ **Loss**: Triggered when clicking on a mine
- 🏆 **Win**: Correctly mark all mines and uncover the safe zone
- ⏱️ The timer starts after the first click

---

## 🎨 Design Philosophy

### Visual Restoration
- **Classic Grayscale Color Scheme**: `#c0c0c0` background with pseudo-3D borders
- **Pixel-Level Controls**: 24x24 fixed cells + 16px number font
- **SVG Embedded Icons**: Mine (black dot) and flag (red triangle)

### Interaction Design
- **Dynamic Feedback**:
  - Buttons enlarge by 110% on hover
  - Cell border reversal on press
  - Immediate update of marked flag count
- **Responsive Layout**:
  - Media queries for mobile adaptation (<600px)
  - Dynamic font size adjustment for counters
  - Maximum width limit for game panel

### Code Architecture
```text
Technology Stack:
- HTML5 semantic structure
- CSS3 flexible layout + grid layout
- JavaScript event-driven model

Modular Design:
1. View Layer: Independent CSS file
2. Logic Layer: Separate JS file
3. Data Layer: Two-dimensional array storing minefield status
```

---

# Windows 7 梆掃雷網頁版說明

## 🕹️ 使用說明

### 啟動遊戲
1. 開啟網頁自動載入8x8雷區
2. 頂部顯示剩餘雷數/重置按鈕/計時器
3. 底部即時顯示當前未標記雷數

### 操作方式
- **左鍵單擊**：翻開地塊  
  - 顯示數字：周圍8格中的雷數
  - 空白區域：自動展開相鄰安全區
- **右鍵單擊**：標記/取消標記地雷（最多6個）
- **笑臉按鈕**：點擊重置遊戲

### 勝負條件
- ❌ **失敗**：點擊到地雷時觸發
- 🏆 **勝利**：正確標記所有雷並翻開安全區
- ⏱️ 計時器在首次點擊後啟動

---

## 🎨 設計思路

### 視覺還原
- **經典灰階配色**：`#c0c0c0`背景與偽3D邊框
- **像素級控件**：24x24固定單元格+16px數字字體
- **SVG內嵌圖標**：地雷（黑圓點）與旗幟（紅色三角）

### 交互設計
- **動態反饋**：
  - 按鈕懸停放大110%
  - 單元格按壓邊框反轉
  - 標記旗幟即時計數更新
- **響應式布局**：
  - 媒體查詢適配移動端（<600px）
  - 計數器動態字號調整
  - 遊戲面板最大寬度限制

### 程式碼架構
```text
技術棧：
- HTML5 语義化結構
- CSS3 彈性布局+網格布局
- JavaScript 事件驅動模型

模組化設計：
1. 視圖層：獨立CSS文件
2. 邏輯層：分離JS文件
3. 數據層：二維數組存儲雷區狀態
```

---

# Windows 7 Minesweeper バージョン ウェブ説明書

## 🕹️ 使用方法

### ゲームの開始
1. ウェブページを開くと自動的に8x8の地雷原が読み込まれます
2. 顶部には残りの地雷数 / リセットボタン / タイマーが表示されます
3. 底部には現在の未マーキング地雷数がリアルタイムで表示されます

### 操作方法
- **左クリック**: マスを開く
  - 数字が表示される: 周囲の8マスの地雷数
  - 空白領域: 自動的に隣接する安全区域を展開
- **右クリック**: 地雷のマーキング / マーキング解除（最大6個）
- **笑顔ボタン**: クリックしてゲームをリセット

### 勝敗条件
- ❌ **敗北**: 地雷をクリックしたときに発生
- 🏆 **勝利**: 全ての地雷を正しくマーキングし、安全区域を開く
- ⏱️ タイマーは最初のクリック後開始

---

## 🎨 デザインコンセプト

### 視覚的復元
- **クラシックグレースケール配色**: `#c0c0c0` 背景と疑似3Dボーダー
- **ピクセルレベルのコントロール**: 24x24固定セル + 16px数字フォント
- **SVG埋め込みアイコン**: 地雷（黒い点）と旗（赤い三角）

### インタラクションデザイン
- **ダイナミックフィードバック**:
  - ボタンのホバー時に110%拡大
  - セル押下時のボーダー反転
  - マーキング旗の即時カウント更新
- **レスポンシブレイアウト**:
  - モバイル対応のメディアクエリ（<600px）
  - カウンターの動的フォントサイズ調整
  - ゲームパネルの最大幅制限

### コードアーキテクチャ
```text
テクノロジースタック:
- HTML5セマンティック構造
- CSS3フレキシブルレイアウト + グリッドレイアウト
- JavaScriptイベントドリブンモデル

モジュラーデザイン:
1. ビューレイヤー: 独立したCSSファイル
2. ロジックレイヤー: 分離されたJSファイル
3. データレイヤー: 地雷原の状態を格納する二次元配列
```

---

# Windows 7 지뢰찾기 웹 버전 설명서

## 🕹️ 사용법

### 게임 시작
1. 웹페이지를 열면 자동으로 8x8 지뢰밭이 로드됩니다
2. 상단에는 남은 지뢰 수 / 리셋 버튼 / 타이머가 표시됩니다
3. 하단에는 현재 미표시 지뢰 수가 실시간으로 표시됩니다

### 조작 방법
- **왼쪽 클릭**: 블록 열기
  - 숫자 표시: 주변 8블록의 지뢰 수
  - 빈 영역: 자동으로 인접한 안전구역 확장
- **오른쪽 클릭**: 지뢰 표시 / 표시 취소 (최대 6개)
- **미소 버튼**: 클릭하여 게임 재설정

### 승패 조건
- ❌ **패배**: 지뢰를 클릭했을 때 발생
- 🏆 **승리**: 모든 지뢰를 올바르게 표시하고 안전 구역을 열기
- ⏱️ 타이머는 첫 번째 클릭 후 시작

---

## 🎨 디자인 철학

### 시각적 복원
- **클래식 그레이스케일 컬러**: `#c0c0c0` 배경 및 가상 3D 테두리
- **픽셀 레벨 컨트롤**: 24x24 고정 셀 + 16px 숫자 글꼴
- **SVG 내장 아이콘**: 지뢰 (검은 점) 및 깃발 (빨간 삼각형)

### 상호작용 디자인
- **다이나믹 피드백**:
  - 버튼 호버 시 110% 확대
  - 셀 클릭 시 테두리 반전
  - 표시된 깃발 수의 즉시 업데이트
- **반응형 레이아웃**:
  - 모바일 대응 미디어 쿼리 (<600px)
  - 카운터 동적 글꼴 크기 조정
  - 게임 패널 최대 너비 제한

### 코드 아키텍처
```text
기술 스택:
- HTML5 시맨틱 구조
- CSS3 유연 레이아웃 + 그리드 레이아웃
- JavaScript 이벤트 드라이브 모델

모듈형 디자인:
1. 뷰 레이어: 독립 CSS 파일
2. 로직 레이어: 분리된 JS 파일
3. 데이터 레이어: 지뢰밭 상태를 저장하는 이차원 배열
```

---

# Windows 7 Démineur Version Web Instructions

## 🕹️ Instructions d'utilisation

### Démarrage du jeu
1. La page web charge automatiquement un champ de mines de 8x8 à l'ouverture.
2. Le haut affiche le nombre de mines restantes / le bouton de réinitialisation / le chronomètre.
3. Le bas montre le nombre de mines non marquées en temps réel.

### Méthodes d'opération
- **Clic gauche**: Découvrir une case
  - Affiche un chiffre: le nombre de mines dans les 8 cases environnantes
  - Zone vide: élargit automatiquement les zones adjacentes sécurisées
- **Clic droit**: Marquer / Désmarquer une mine (maximum de 6)
- **Bouton sourire**: Cliquez pour réinitialiser le jeu

### Conditions de victoire/défaite
- ❌ **Défaite**: Déclenchée lorsque vous cliquez sur une mine
- 🏆 **Victoire**: Marquez correctement toutes les mines et découvrez la zone sécurisée
- ⏱️ Le chronomètre démarre après le premier clic

---

## 🎨 Concept de design

### Restauration visuelle
- **Palette de couleurs en échelle de gris classique**: arrière-plan `#c0c0c0` avec des bordures pseudo-3D
- **Contrôles au niveau du pixel**: cellules fixes de 24x24 + police de caractères numériques de 16px
- **Icônes intégrées SVG**: Mine (point noir) et drapeau (triangle rouge)

### Design d'interaction
- **Feedback dynamique**:
  - Les boutons s'agrandissent de 110% au survol
  - Inversion des bordures de cellule lors de la pression
  - Mise à jour immédiate du compteur de drapeaux marqués
- **Mise en page responsive**:
  - Requêtes média pour l'adaptation mobile (<600px)
  - Ajustement dynamique de la taille de police pour les compteurs
  - Limitation de la largeur maximale du panneau de jeu

### Architecture du code
```text
Stack technologique:
- Structure sémantique HTML5
- Mise en page flexible CSS3 + mise en grille
- Modèle événementiel JavaScript

Conception modulaire:
1. Couche de présentation: fichier CSS indépendant
2. Couche logique: fichier JS séparé
3. Couche de données: tableau bidimensionnel stockant l'état du champ de mines
```

---

# Windows 7 Сапёр Версия для веба Инструкции

## 🕹️ Инструкции по использованию

### Запуск игры
1. При открытии веб-страницы автоматически загружается поле 8x8 с минами.
2. В верхней части отображаются оставшееся количество мин / кнопка сброса / таймер.
3. В нижней части в реальном времени отображается текущее количество неразмеченных мин.

### Методы операции
- **Левый клик**: Открыть плитку
  - Отображает число: количество мин в окружающих 8 плитках
  - Пустая область: автоматически расширяет adjacent безопасные зоны
- **Правый клик**: Разметить / Снять разметку мины (максимум 6)
- **Кнопка смайлика**: Нажмите, чтобы сбросить игру

### Условия победы/поражения
- ❌ **Поражение**: Вызывается при нажатии на мину
- 🏆 **Победа**: Правильно разметьте все мины и откройте безопасную зону
- ⏱️ Таймер запускается после первого нажатия

---

## 🎨 Концепция дизайна

### Визуальное восстановление
- **Классическая градация серого цвета**: фон `#c0c0c0` с псевдо-3D границами
- **Пиксельные элементы управления**:固定的 24x24 ячейки + 16px шрифт цифр
- **Встроенные иконки SVG**: Мина (черная точка) и флаг (красный треугольник)

### Дизайн взаимодействия
- **Динамическая обратная связь**:
  - Кнопки увеличиваются на 110% при наведении
  - Инверсия границы ячейки при нажатии
  - Immediate обновление счетчика размеченных флагов
- **Адаптивная компоновка**:
  - Запросы多媒体 для мобильной адаптации (<600px)
  - Динамическая настройка размера шрифта для счетчиков
  - Ограничение максимальной ширины игрового панели

### Архитектура кода
```text
Технологический стек:
- Семантическая структура HTML5
- Гибкая компоновка CSS3 + сеточная компоновка
- Модель событий JavaScript

Модульный дизайн:
1. Презентационный слой: независимый CSS файл
2. Логический слой: отдельный JS файл
3. Данные слой: двумерный массив для хранения состояния минного поля
```

---

# Windows 7 Гра «Сапер» Веб-версія Інструкції

## 🕹️ Інструкції з використання

### Запуск гри
1. При відкритті веб-сторінки автоматично завантажується поле 8x8 з мінами.
2. В верхній частині відображається залишаються кількість мін / кнопка скидання / таймер.
3. В нижній частині в режимі реального часу відображається поточна кількість нерозмічених мін.

### Методи операції
- **Лівий клік**: Відкриття плитки
  - Відображає число: кількість мін у оточуючих 8 плитках
  - Пуста область: автоматично розширює сусідні безпечні зони
- **Правий клік**: Позначити / Зняти позначку міни (максимум 6)
- **Кнопка з усмішкою**: Натисніть, щоб скинути гру

### Умови перемоги/поразки
- ❌ **Поразка**: Спрацьовує при натисканні на міну
- 🏆 **Перемога**: Правильно позначте всі міни та відкрийте безпечну зону
- ⏱️ Таймер запускається після першого натиску

---

## 🎨 Концепція дизайну

### Візуальне відновлення
- **Класична градація сірого кольору**: фон `#c0c0c0` з псевдо-3D межами
- **Піксельні елементи керування**: фіксовані 24x24 комірки + 16px шрифт цифр
- **Вбудовані піктограми SVG**: Міна (чорна точка) та прапор (червоний трикутник)

### Дизайн взаємодії
- **Динамічна зворотна зв'язок**:
  - Кнопки збільшуються на 110% при наведенні
  - Інверсія межі комірки при натисканні
  - Immediate оновлення лічильника розмічених прапорців
- **Адаптивна компоновка**:
  - Запити мультимедіа для мобільної адаптації (<600px)
  - Динамічна настройка розміру шрифту для лічильників
  - Обмеження максимальної ширини гри панелі

### Архітектура коду
```text
Стек технологій:
- Семантична структура HTML5
- Гнучка компоновка CSS3 + сіткова компоновка
- Модель подій JavaScript

Модульний дизайн:
1. Презентаційний шар: незалежний CSS файл
2. Логічний шар: окремий JS файл
3. Шар даних: двовимірний масив для зберігання стану мінного поля
```

---

# Windows 7 Minesweeper Webversion Anleitung

## 🕹️ Bedienungsanleitung

### Spielstart
1. Bei der Öffnung der Webseite wird automatisch ein 8x8 Minenfeld geladen.
2. Oben werden die verbleibende Minenanzahl / die Reset-Taste / der Timer angezeigt.
3. Unten wird die aktuelle Anzahl der nicht markierten Minen in Echtzeit angezeigt.

### Bedienungsmethoden
- **Linksklick**: Fliese decken
  - Zeigt eine Zahl an: die Anzahl der Minen in den umliegenden 8 Fliesen
  - Leere Fläche: erweitert automatisch angrenzende sichere Zonen
- **Rechtsklick**: Mine markieren / Markierung aufheben (maximal 6)
- **Smiley-Taste**: Klicken Sie, um das Spiel zurückzusetzen

### Gewinn-/Verlustbedingungen
- ❌ **Verlust**: Wird ausgelöst, wenn auf eine Mine geklickt wird
- 🏆 **Gewinn**: Markieren Sie alle Minen korrekt und decken Sie die sichere Zone auf
- ⏱️ Der Timer startet nach dem ersten Klick

---

## 🎨 Designkonzept

### Visuelle Restauration
- **Klassisches Graustufen-FarbSchema**: `#c0c0c0` Hintergrund mit pseudo-3D-Rändern
- **Pixelgenaue Steuerelemente**: 24x24 feste Zellen + 16px Ziffern-Schriftart
- **SVG eingebettete Symbole**: Mine (schwarzer Punkt) und Flagge (rotes Dreieck)

### Interaktionsdesign
- **Dynamisches Feedback**:
  - Schaltflächen vergrößern sich um 110% bei der Überblendung
  - Zellenrandumkehr beim Drücken
  - Sofortige Aktualisierung der markierten Flaggenanzahl
- **Responsive Layout**:
  - Media-Abfragen für mobile Anpassung (<600px)
  - Dynamische Schriftgradanpassung für Zähler
  - Maximale Breitenbegrenzung für das Spielfeld

### Code-Architektur
```text
Technologiestapel:
- HTML5 semantische Struktur
- CSS3 flexibles Layout + Rasterlayout
- JavaScript ereignisgesteuertes Modell

Modulares Design:
1. Präsentationsschicht: Unabhängige CSS-Datei
2. Logikschicht: Getrennte JS-Datei
3. Datenschicht: Zweidimensionaler Array zum Speichern des Minenfeldstatus
```
