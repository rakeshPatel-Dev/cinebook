import orderCompleted from "../../assets/Lotties/Order completed.json"
import { useLottie } from 'lottie-react';

const style = {
  height : 200,
}

export const LottieAmination = () => {

  const options = {
    animationData : orderCompleted,
    loop : false,
    autoplay : true,
  };

  const {View} = useLottie(options, style)

  return View
};