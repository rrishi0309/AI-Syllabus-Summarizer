INSERT INTO "Feedback_AI_Summarizer" (
    "Name",
    "SyllabusFileName",
    "SyllabusSummary",
    "SyllabusURL",
    "OverallRating",
    "SummaryContentAccuracy",
    "AdditionalFeedback"
)  
VALUES (
    {{ textInput1.value }}, -- Name of Advisor (Required),
    {{ fileDropzone1.value[0].name || 'Unknown File' }},  -- PDF name (Required)
    {{ Summarize_AI_Model.data || 'No summary available' }},  -- AI-generated summary (Required)
    NULLIF({{ fileButton1.value[0]?.url }}, ''),  -- Store NULL if URL is empty
    {{ rating1.value || 0 }},  -- Default to 0 if no rating is provided
    {{ select1.value === 'Yes' }},  -- Converts 'Yes' → TRUE, anything else → FALSE
    NULLIF({{ textArea1.value }}, '')  -- Store NULL if Additional Feedback is empty
);
