// use in stack and projects page
export function usePageListener({
  lock,
  callback,
}: {
  lock: boolean;
  callback: (val: boolean) => void;
}) {
  document.addEventListener("wheel", (e: WheelEvent) => {
    if (!lock) {
      if (e.deltaY > 0) {
        callback(true);
        lock = true;
      } else if (e.deltaY < 0) {
        callback(false);
        lock = true;
      }
    }
  });
}

// use in index page
export function useIndexListener({
  currentPageId,
  setCurrentPageId,
  setInitialScrollDown,
}: {
  currentPageId: number;
  setCurrentPageId: (val: number) => void;
  setInitialScrollDown: (val: boolean) => void;
}) {
  document.addEventListener("wheel", (e: WheelEvent) => {
    if (!(e.target as HTMLElement).closest("#stack-container")) {
      if (e.deltaY > 0 && currentPageId < 4) {
        setCurrentPageId(currentPageId + 1);
        setInitialScrollDown(true);
      } else if (e.deltaY < 0 && currentPageId > 1) {
        setCurrentPageId(currentPageId - 1);
        setInitialScrollDown(false);
      }
    }
  });
}

export function useTouchListener({
  currentPageId,
  setCurrentPageId,
  setInitialScrollDown,
}: {
  currentPageId: number;
  setCurrentPageId: (val: number) => void;
  setInitialScrollDown: (val: boolean) => void;
}) {
  let startY: number = -5;
  window.addEventListener("touchstart", (e: TouchEvent) => {
    if ((e.target as HTMLElement).closest("#stack-container")) {
      e.stopPropagation();
      startY = -5;
    } else {
      startY = e.touches[0].clientY;
    }
  });

  window.addEventListener("touchmove", (e: TouchEvent) => {
    if (startY !== -5) {
      const lastY = e.changedTouches[0].clientY;
      if (lastY > startY && currentPageId > 1) {
        setCurrentPageId(currentPageId - 1);
        setInitialScrollDown(false);
      } else if (lastY < startY && currentPageId < 4) {
        setCurrentPageId(currentPageId + 1);
        setInitialScrollDown(true);
      }
      startY = -5;
    }
  });
}

export function useTouchPageListener({
  lock,
  callback,
}: {
  lock: boolean;
  callback: (val: boolean) => void;
}) {
  let initialY: number = -5;
  window.addEventListener("touchstart", (e: TouchEvent) => {
    if ((e.target as HTMLElement).closest("#stack-container")) {
      e.stopPropagation();
      initialY = -5;
    } else {
      initialY = e.touches[0].clientY;
    }
  });

  window.addEventListener("touchmove", (e: TouchEvent) => {
    if (initialY !== -5) {
      const lastY = e.changedTouches[0].clientY;
      if (lastY > initialY) {
        callback(false);
      } else if (lastY < initialY) {
        callback(true);
      }
    }
    initialY = -5;
  });
}
