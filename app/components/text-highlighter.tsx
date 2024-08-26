export function TextHighlighter({
  text,
  highlightRanges,
}: {
  text: string;
  highlightRanges: [number, number][];
}) {
  const elements = [];
  let lastIndex = 0;

  highlightRanges.forEach(([start, end]) => {
    // Push the text before the highlight range
    if (start > lastIndex) {
      elements.push(
        <span key={`text-${lastIndex}`}>
          {text.substring(lastIndex, start)}
        </span>
      );
    }

    // Push the highlighted text
    elements.push(
      <mark
        className="underline text-blue-800"
        key={`highlight-${start}-${end}`}
      >
        {text.substring(start, end)}
      </mark>
    );

    // Update the last index
    lastIndex = end;
  });

  // Push any remaining text after the last highlight
  if (lastIndex < text.length) {
    elements.push(
      <span key={`text-${lastIndex}`}>{text.substring(lastIndex)}</span>
    );
  }

  return <>{elements}</>;
}
