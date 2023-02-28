function BEmptyBox(box) {
  let selection = false;
  if (box == 77) {
    selection = true;
  }
  return <div>(selection ? "Yay" : "Nothing here you bozo")</div>;
}

export default BEmptyBox;
