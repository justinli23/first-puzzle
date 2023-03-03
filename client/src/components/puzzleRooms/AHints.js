function AHints(uniqueLetters) {
  const letters = Array.from(uniqueLetters.uniqueLetters);
  //LETTERS - array containing all unique letters found in original quote

  return (
    <div>
      <p>HINTS</p>
      <div>
        <p className="hintWord">NERDS</p>
        <p className="hintDescr">
          Purple and pink hard candy that is too smart for their own good
        </p>
      </div>
    </div>
  );
}

export default AHints;
