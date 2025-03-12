SELECT 
    CASE 
        WHEN "ResolutionStatus?" IS NULL AND "AdditionalFeedback" IS NOT NULL THEN 'Not Resolved'
        WHEN "ResolutionStatus?" IS NOT NULL THEN "ResolutionStatus?"
    END AS status, 
    COUNT(*) AS count
FROM "Feedback_AI_Summarizer"
WHERE "ResolutionStatus?" IS NOT NULL OR "AdditionalFeedback" IS NOT NULL
GROUP BY status;
