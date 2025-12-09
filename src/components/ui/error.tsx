import error404 from "../../assets/Lotties/Error 404.json"
import { useLottie } from 'lottie-react';

const style = {
  height : 400,
}

export const AnimatedError = () => {

  const options = {
    animationData : error404,
    loop : true,
    autoplay : true,
  };

  const {View} = useLottie(options, style)

  return View
};