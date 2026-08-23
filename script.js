document.addEventListener("DOMContentLoaded", () => {
    const enterBtn = document.getElementById("enter-btn");
    const elevatorScreen = document.getElementById("elevator-screen");
    const mainContent = document.getElementById("main-content");
    const floorNumber = document.getElementById("floor-number");

    // 點擊按鈕後觸發電梯上樓與晃動動畫
    enterBtn.addEventListener("click", () => {
        enterBtn.style.display = "none"; // 隱藏按鈕
        
        // 啟動電梯晃動特效
        elevatorScreen.classList.add("vibrating");

        // 模擬樓層數字跳動 (從 1 樓快速上升到 12 樓)
        let currentFloor = 1;
        const floorInterval = setInterval(() => {
            if (currentFloor < 12) {
                currentFloor++;
                floorNumber.textContent = currentFloor;
            } else {
                clearInterval(floorInterval);
            }
        }, 150); // 總共大約 1.8 秒爬升完畢

        // 1. 顯示主網頁內容
        mainContent.classList.remove("hidden");

        // 2. 爬升結束後停止晃動並打開電梯門
        setTimeout(() => {
            elevatorScreen.classList.remove("vibrating");
            elevatorScreen.classList.add("open");
        }, 2000);

        // 3. 完全隱藏電梯畫面，釋放點擊
        setTimeout(() => {
            elevatorScreen.classList.add("fade-out");
        }, 3200);
    });

    // 樓長頁籤切換功能
    const tabBtns = document.querySelectorAll(".tab-btn");
    const wardenCards = document.querySelectorAll(".warden-card");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            wardenCards.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            const targetId = btn.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
});