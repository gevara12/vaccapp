import { useCallback, useEffect, useRef, useState } from 'react';

type TpTimerProps = {
  delay: number;
  startImmediately?: boolean;
  callback: (time: number) => void;
};

type TpTimer = {
  timer: number;
  isPause: boolean;
  startTimer: (value?: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
};

export const useTimer = (props: TpTimerProps): TpTimer => {
  const { delay, startImmediately = false, callback } = props;
  const [timer, setTimer] = useState(0);
  const initial = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const timeElapseRef = useRef(0);
  const cbRef = useRef(callback);
  const [isPause, setIsPause] = useState(false);

  const startTimer = useCallback(
    (timer = initial.current) => {
      timeElapseRef.current = timer;
      let expected = Date.now() + delay;

      const tick = () => {
        const dt = Date.now() - expected;
        timeElapseRef.current += delay;
        setTimer(timeElapseRef.current);
        cbRef.current(timeElapseRef.current);
        expected += delay;
        timeoutRef.current = setTimeout(tick, Math.max(0, delay - dt));
      };

      timeoutRef.current = setTimeout(tick, delay);
    },
    [delay],
  );

  const pauseTimer = useCallback(() => {
    setIsPause(true);
    clearTimeout(timeoutRef.current);
  }, []);

  const resumeTimer = useCallback(() => {
    startTimer(timeElapseRef.current);
    setIsPause(false);
  }, [startTimer]);

  useEffect(() => {
    if (startImmediately) startTimer();
  }, [startImmediately, startTimer]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return { timer, isPause, startTimer, pauseTimer, resumeTimer };
};
