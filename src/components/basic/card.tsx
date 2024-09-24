import * as React from "react";
import Icon from "./icon";
import "@/styles/card.css";
interface childProps {
  title?: string;
  text?: string | number;
  cardStylesModule?: React.CSSProperties; // 样式
  iconType?: string | undefined;
}

const Card: React.FC<childProps> = ({
  title,
  text,
  iconType,
  cardStylesModule,
}) => {
  // 合并样式，确保 cardStylesModule 存在
  const mergeStyle: React.CSSProperties = {
    ...cardStylesModule,
  };
  let head: React.ReactNode;
  let content: React.ReactNode;

  head = (
    <div className="CardStyleModule__icon">
      <Icon icon={iconType} />
    </div>
  );

  content = (
    <div className="CardStyleModule__content">
      {title && <span className="CardStyleModule__title">{title}</span>}
      {text && <span className="CardStyleModule__text">{text}</span>}
    </div>
  );

  return (
    <div style={mergeStyle} className="CardStyleModule">
      {head}
      {content}
    </div>
  );
};

export default Card;
