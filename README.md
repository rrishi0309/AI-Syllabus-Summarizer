# 📚 AI Syllabus Summarizer (Powered by AI & Retool)

"Streamlining syllabus reviews with AI-powered summaries to enhance advising efficiency."

## 🚀 Overview

The **AI Syllabus Summarizer** is an AI-driven tool designed to generate structured, concise course summaries from uploaded syllabi. Built for **MBA advisors**, this tool simplifies the process of extracting relevant course details, enabling advisors to quickly access key information for student advising.

This summarizer processes syllabi using **Claude 3 Haiku** for efficient text extraction and **GPT-4o** for structured summarization, ensuring clarity, consistency, and accuracy. The summarization strictly adheres to a **standardized prompt**, ensuring summaries only include explicitly stated information and maintain a structured format.

## 🌱 Why This Matters

- **Saves Time** – Eliminates the need for manually reviewing lengthy syllabi.  
- **Ensures Consistency** – Generates structured summaries following a predefined format.  
- **Enhances Advising** – Advisors can quickly access course details for student inquiries.  
- **Automates Information Retrieval** – Extracts only the most relevant details from the syllabus.  

## 🛠️ Features

✅ **AI-Powered Summarization** – Extracts and structures key syllabus details.  
✅ **PDF Support** – Upload any syllabus in PDF format for instant processing.  
✅ **Standardized Summaries** – Ensures consistency across all course summaries.  
✅ **Feedback Feature** – Allows advisors to report inaccuracies for continuous improvement.  
✅ **Interactive Dashboard** – Provides visual analytics on ratings and feedback resolution.  
✅ **No Data Storage** – The tool processes PDFs in real-time without storing any user data.  

## 📊 Interactive Dashboard

The AI Syllabus Summarizer includes a **Retool-powered dashboard** to provide insights into syllabus reviews:
- **Overall Rating Breakdown** – Displays the distribution of ratings across syllabi.
- **Resolution Status** – Tracks resolved and pending feedback for syllabus improvements.
- **Feedback Table** – Shows individual user comments, ratings, and links to syllabi.
- **Real-time Updates** – Automatically updates as advisors submit feedback.

## 📚 How It Works

1. **Upload a syllabus (PDF format).**  
2. **AI extracts and processes the text using Claude 3 Haiku.**  
3. **GPT-4o generates a structured summary**, adhering to the following format:  
   - **Course Title:** Full course name with course code in parentheses.  
   - **Semester:** (Only if provided) Specifies which semester the syllabus is for.  
   - **Instructor:** Name and brief professional background (if available).  
   - **Class Schedule & Location:** Clearly formatted schedule details (or "Online" for virtual courses).  
   - **Course Description:** Concise summary focusing on course objectives and uniqueness.  
   - **Prerequisites:** Clearly listed or "None" if not required.  
   - **Key Learning Outcomes:** List of major topics or skills covered.  
   - **Technologies and Tools Covered:** Explicitly mentioned programming languages, frameworks, or platforms.  
   - **Assessment Methods:** Summary of primary evaluation methods without excessive detail.  
   - **Special Features:** Certifications, guest lectures, industry partnerships, or unique course benefits.  
   - **Relevant Job Roles:** Five AI-generated job roles based on syllabus content, with a disclaimer.  

4. **Advisors can review the summary and provide feedback.**  

## 🌇 Tech Stack

- **Retool** – Frontend and AI workflow automation  
- **Claude 3 Haiku** – Converts long PDFs into readable text efficiently  
- **GPT-4o** – AI language model for intelligent summarization  
- **PostgreSQL** – Stores advisor feedback for improvements  
- **JavaScript (JS)** – Custom Retool logic for API integration  
- **Retrieval-Augmented Generation (RAG)** – Enhances summaries using structured syllabus data  

## 🛠️ How to Set Up & Use

1️⃣ **Import Retool App**  
- Download `ai_syllabus_summarizer.json` from the `/apps` folder.  
- Go to Retool and create a new app.  
- Click **Import JSON** and select `ai_syllabus_summarizer.json`.  

2️⃣ **Set Up AI API Key (If Needed)**  
- Configure **Claude 3 Haiku** for text extraction.  
- Configure **GPT-4o** for summarization if Retool does not have built-in AI capabilities.  

3️⃣ **Run the Application**  
- Upload a syllabus and view the AI-generated summary instantly.  

## 🔒 Privacy & Ethical Considerations

🚫 **No Data Storage** – The tool does not retain uploaded syllabi.  
🔄 **Responsible AI** – AI strictly follows syllabus content without adding assumptions.  
📢 **Transparent Feedback Mechanism** – Advisors can report inaccuracies to refine AI outputs.  

## 💽 Folder Structure
```
📂 apps/        # Exported Retool JSON files
📂 db/          # SQL schema for chat history
README.md       # Main documentation file
LICENSE         # Open-source license file
```

## 🖼️ Screenshots
![image](https://github.com/user-attachments/assets/1b8ffa8d-c8c4-4da2-b8e3-e9022a0312b7)

![image](https://github.com/user-attachments/assets/a7f440e7-95ed-447c-a9ae-be874ddb9165)

![image](https://github.com/user-attachments/assets/b4e98078-71d7-4f30-95f4-24cc5a14afda)

![image](https://github.com/user-attachments/assets/86583742-e0d2-489c-8817-3ed500c01300)

## 📝 License

This project is licensed under the **MIT License** – feel free to use and modify.

## 🤝 Contributing

Want to contribute? Fork the repo, create a new branch, and submit a **Pull Request (PR)**. Suggestions and improvements are welcome!

## 💎 Contact

Developed by **Rishi Ramesh**  
📞 **LinkedIn:** [https://www.linkedin.com/in/rishi0309/](https://www.linkedin.com/in/rishi0309/)
