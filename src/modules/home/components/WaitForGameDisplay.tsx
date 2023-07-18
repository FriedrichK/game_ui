import {MutableRefObject, useEffect, useRef} from "react";
import {useRouter} from "next/navigation";
import {getGame} from "../../games/actions/getGame";

export const useInterval = (callback: Function, delay: number|null) => {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback?.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

interface WaitForGameDisplayProps {
  gameID: string
}

const WaitForGameDisplay = ({gameID}: WaitForGameDisplayProps) => {
  const router = useRouter();
  useInterval(() => {
    getGame(gameID)
      .then(() => {
        router.push("/games/" + gameID);
      })
      .catch((err) => console.error(err));
  }, 1000 * 10);
  return (
    <span>Please stand by while your game is being created. You will be redirected soon...</span>
  );
};

export default WaitForGameDisplay;
