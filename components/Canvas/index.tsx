import { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react';
import styles from './Canvas.module.css';

interface DrawingOption {
  nativeEvent: {
    offsetX: number;
    offsetY: number;
  };
}

interface Props {
  brushColor: string;
  isColorSelected: boolean;
  setIsColorSelected: Dispatch<SetStateAction<boolean>>;
}

const Canvas = ({ brushColor, isColorSelected, setIsColorSelected }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false)

  useEffect(() => {
    prepareCanvas();
  }, []);

  useEffect(() => {
    (contextRef.current as CanvasRenderingContext2D).strokeStyle = brushColor;
  }, [brushColor]);

  const prepareCanvas = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = brushColor;
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }: DrawingOption) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current as CanvasRenderingContext2D;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    (contextRef.current as CanvasRenderingContext2D).closePath();
    setIsDrawing(false);
    setIsColorSelected(false);
  };

  const draw = ({ nativeEvent }: DrawingOption) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current as CanvasRenderingContext2D;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  return (
    <canvas
      id="canvas"
      className={isColorSelected ? styles.canvas : styles.canvasBackground}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
};

export default Canvas;
