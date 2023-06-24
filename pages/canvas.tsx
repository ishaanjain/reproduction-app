import { useRef, useEffect,} from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  return <div>
    <canvas ref={canvasRef} width={400} height={400} />
    <div>Hello</div>
  </div>
}