async function generatePDF() {
  const { PDFDocument, rgb, StandardFonts } = window.PDFLib;

  // 1. Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();

  // 2. Add the first page
  let page = pdfDoc.addPage([600, 800]);
  let { width, height } = page.getSize();

  // 3. Embed standard fonts
  const fontNormal = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // 4. Layout settings
  let currentY = height - 50;    // Top margin
  const leftMargin = 50;
  const rightMargin = 50;
  const maxWidth = width - (leftMargin + rightMargin);
  const fontSize = 11;          // Use font size 11
  const lineSpacing = 16;       // Vertical spacing between lines

  // 5. Get text from your Retool model (adjust as needed)
  const text = Summarize_AI_Model.data || "";
  const rawLines = text.split("\n");

  // 6. Process each line
  for (let rawLine of rawLines) {
    // Detect bullet points at the start of the line: "- "
    let isBullet = false;
    if (rawLine.trim().startsWith("- ")) {
      isBullet = true;
      // Replace "- " with "• "
      rawLine = rawLine.trim().replace("- ", "• ");
    }

    // Parse the line into styled segments (bold, italic, normal)
    const segments = parseMarkdownLine(rawLine);

    // Draw the parsed segments with word-wrapping
    const { newPage, newY } = drawLineSegments(
      page,
      segments,
      pdfDoc,
      {
        x: leftMargin,
        y: currentY,
        maxWidth,
        fontSize,
        lineSpacing,
        fontNormal,
        fontBold,
        fontItalic,
        color: rgb(0, 0, 0),
      }
    );

    page = newPage;       // If a new page was created, update reference
    currentY = newY;      // Update current Y position for next line

    // Check if we still have space; if not, add a fresh page
    if (currentY < 50) {
      page = pdfDoc.addPage([600, 800]);
      currentY = height - 50;
    }
  }

  // 7. Finalize and download the PDF
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileDropzone1.value[0].name.replace(/\.pdf$/, '')+"- Summary.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Splits a single line into multiple segments of { text, style }
 * Supports multiple bold and italic segments in one line (no nesting).
 * 
 * Bold: **bold text** 
 * Italic: *italic text*
 */
function parseMarkdownLine(line) {
  const segments = [];
  // If the line is empty, just return one normal segment
  if (!line) {
    return [{ text: "", style: "normal" }];
  }

  // Regex to match either **bold** or *italic*
  // We use a "global" search so we can find multiple segments in the same line
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(line)) !== null) {
    // Text before this match is normal
    if (match.index > lastIndex) {
      segments.push({
        text: line.substring(lastIndex, match.index),
        style: "normal",
      });
    }

    const matchedText = match[0];
    if (matchedText.startsWith("**")) {
      // Bold segment
      const boldText = matchedText.slice(2, -2); // remove leading/trailing **
      segments.push({ text: boldText, style: "bold" });
    } else {
      // Italic segment
      const italicText = matchedText.slice(1, -1); // remove leading/trailing *
      segments.push({ text: italicText, style: "italic" });
    }

    lastIndex = pattern.lastIndex;
  }

  // Any remaining text after the last match is normal
  if (lastIndex < line.length) {
    segments.push({
      text: line.substring(lastIndex),
      style: "normal",
    });
  }

  return segments;
}

/**
 * Draws an array of segments (each with text + style) onto the page
 * with proper word-wrapping and partial bold/italic. 
 * Returns { newPage, newY } so we can continue on the correct page/position.
 */
function drawLineSegments(
  page,
  segments,
  pdfDoc,
  {
    x,
    y,
    maxWidth,
    fontSize,
    lineSpacing,
    fontNormal,
    fontBold,
    fontItalic,
    color,
  }
) {
  let currentX = x;
  let currentY = y;
  let { width, height } = page.getSize();

  // Helper to add a new page if we overflow
  function addNewPage() {
    const newPage = pdfDoc.addPage([600, 800]);
    currentX = x;
    currentY = height - 50;
    return newPage;
  }

  // Iterate through each segment
  for (let segment of segments) {
    let selectedFont = fontNormal;
    if (segment.style === "bold") {
      selectedFont = fontBold;
    } else if (segment.style === "italic") {
      selectedFont = fontItalic;
    }

    // Break the segment text into words for wrapping
    const words = segment.text.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      // If it's the last word, no trailing space needed
      // Otherwise add a space after it
      const isLastWord = i === words.length - 1;
      let textToMeasure = isLastWord ? word : word + " ";

      // Measure the text width
      let textWidth = selectedFont.widthOfTextAtSize(textToMeasure, fontSize);

      // If this is the very first text on a line and the word alone is bigger than maxWidth,
      // we have to break it forcibly (or we can just draw it and overflow).
      // For simplicity, we'll just place it. A real approach might hyphenate.
      if (currentX === x && textWidth > maxWidth) {
        // Word alone exceeds the line width
        page.drawText(textToMeasure, {
          x: currentX,
          y: currentY,
          size: fontSize,
          font: selectedFont,
          color,
        });
        currentY -= lineSpacing;
        currentX = x;
        // If we are below the page margin, add a new page
        if (currentY < 50) {
          page = addNewPage();
        }
        continue;
      }

      // If it doesn't fit in the remaining space, move to the next line
      if (currentX + textWidth > x + maxWidth) {
        // Move down a line
        currentY -= lineSpacing;
        currentX = x;

        // If we are below the margin, add a new page
        if (currentY < 50) {
          page = addNewPage();
        }
      }

      // Draw the text
      page.drawText(textToMeasure, {
        x: currentX,
        y: currentY,
        size: fontSize,
        font: selectedFont,
        color,
      });
      // Advance the X position
      currentX += textWidth;
    }
  }

  // After drawing all segments, move down one full line
  currentY -= lineSpacing;
  currentX = x;

  // If we are below the margin, add a new page
  if (currentY < 50) {
    page = addNewPage();
  }

  return { newPage: page, newY: currentY };
}

// Finally, call the main function
generatePDF();
