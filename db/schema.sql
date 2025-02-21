-- Drop table if it already exists (use with caution in development)
DROP TABLE IF EXISTS Feedback_AI_Summarizer;

-- Create the Feedback_AI_Summarizer table
CREATE TABLE Feedback_AI_Summarizer (
    id SERIAL PRIMARY KEY,  -- Auto-incrementing unique identifier
    Name TEXT NOT NULL,  -- Advisor's name (Required)
    SyllabusFileName TEXT NOT NULL,  -- Name of uploaded syllabus file (Required)
    SyllabusSummary TEXT NOT NULL,  -- AI-generated summary (Required)
    SyllabusURL TEXT,  -- URL (Optional, can be NULL)
    OverallRating INT DEFAULT 0 CHECK (OverallRating BETWEEN 0 AND 5),  -- Star rating (1-5, default 0)
    SummaryContentAccuracy BOOLEAN NOT NULL,  -- True if accurate, False otherwise
    AdditionalFeedback TEXT,  -- Optional additional feedback
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Auto-generates timestamp for record creation
);

-- Insert Sample Data (for testing purposes)
INSERT INTO Feedback_AI_Summarizer (
    Name,
    SyllabusFileName,
    SyllabusSummary,
    SyllabusURL,
    OverallRating,
    SummaryContentAccuracy,
    AdditionalFeedback
)  
VALUES (
    'John Doe',  -- Advisor Name
    'Sample_Syllabus.pdf',  -- PDF name
    'This course covers advanced data engineering concepts...',  -- AI-generated summary
    NULL,  -- URL (set NULL if empty)
    4,  -- Rating (1-5)
    TRUE,  -- Summary Content Accuracy (Yes = TRUE, No = FALSE)
    'Summary was mostly accurate but missed key points on prerequisites.'  -- Additional feedback
);