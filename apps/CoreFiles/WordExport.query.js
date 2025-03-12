async function generateWordDoc() {
  const { Document, Packer, Paragraph, TextRun } = window.docx;

  // 1. Get your text (from Summarize_AI_Model, for example)
  const rawText = Summarize_AI_Model.data || "";
  const lines = rawText.split("\n");

  // 2. Build Paragraphs from your lines
  const paragraphs = [];

  for (let line of lines) {
    // Detect bullet lines (start with "- ")
    let bullet = false;
    if (line.trim().startsWith("- ")) {
      bullet = true;
      line = line.trim().substring(2).trim();
    }

    // Parse partial Markdown for bold/italic
    const segments = parseMarkdownLine(line);

    // Convert segments to TextRuns, specifying a font
    const runs = segments.map((seg) => {
      const textRunProps = {
        text: seg.text,
        size: 22, // 22 half-points = 11 pt
        font: { name: "Aptos" }, // <--- Specify the font here
      };

      if (seg.style === "bold") {
        textRunProps.bold = true;
      } else if (seg.style === "italic") {
        textRunProps.italics = true;
      }

      return new TextRun(textRunProps);
    });

    // Create a Paragraph
    const paragraph = new Paragraph({
      children: runs,
      bullet: bullet ? { level: 0 } : undefined,
      spacing: { after: 200 }, // spacing after paragraph
    });

    paragraphs.push(paragraph);
  }

  // 3. Create the Document
  const doc = new Document({
    sections: [
      {
        children: paragraphs,
      },
    ],
  });

  // 4. Convert doc to Blob and download
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileDropzone1.value[0].name.replace(/\.pdf$/, '')+"- Summary.docx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 5. Simple parser for **bold** and *italic*
function parseMarkdownLine(line) {
  const segments = [];
  if (!line) return [{ text: "", style: "normal" }];

  // Regex to match either **bold** or *italic*
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(line)) !== null) {
    // Everything before this match is normal
    if (match.index > lastIndex) {
      segments.push({
        text: line.substring(lastIndex, match.index),
        style: "normal",
      });
    }

    const matchedText = match[0];
    if (matchedText.startsWith("**")) {
      const boldText = matchedText.slice(2, -2); // remove ** on both ends
      segments.push({ text: boldText, style: "bold" });
    } else {
      const italicText = matchedText.slice(1, -1); // remove * on both ends
      segments.push({ text: italicText, style: "italic" });
    }
    lastIndex = pattern.lastIndex;
  }

  // Anything remaining after the last match is normal
  if (lastIndex < line.length) {
    segments.push({
      text: line.substring(lastIndex),
      style: "normal",
    });
  }
  return segments;
}

// Finally, call the function
generateWordDoc();
