import './CardWidget.scss';

function CardWidget(props) {
  const classes = `card-widget ${props.className}`;

  return <div className={classes}>{props.children}</div>;
}

export default CardWidget;
