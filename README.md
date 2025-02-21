# 📚 AI Syllabus Summarizer (Powered by AI & Retool)

"Streamlining syllabus reviews with AI-powered summaries to enhance advising efficiency."

## 🚀 Overview

The **AI Syllabus Summarizer** is an AI-powered tool designed to generate structured, concise course summaries based on uploaded syllabi. Built for **MBA advisors**, this tool simplifies the process of extracting relevant course details, helping advisors quickly access key information for student advising.

This summarizer processes syllabi using **AI-driven text extraction and summarization models**, ensuring that summaries are clear, structured, and directly sourced from the syllabus content. The tool follows a standardized format, ensuring consistency and accuracy.

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
✅ **No Data Storage** – The tool processes PDFs in real-time without storing any user data.  

## 📖 How It Works

1. **Upload a syllabus (PDF format).**  
2. **AI extracts and processes the text.**  
3. **A structured summary is generated**, including:  
   - Course Title, Instructor, Schedule & Location  
   - Course Description & Key Learning Outcomes  
   - Prerequisites, Technologies Covered & Assessment Methods (if applicable)  
   - Special Features (e.g., Certifications, Guest Lectures)  
   - Career Relevance (AI-generated based on syllabus content)  
4. **Advisors can review the summary and provide feedback.**  

## 🌇 Tech Stack

- **Retool** – Frontend and AI workflow automation  
- **Claude 3 / GPT-4o** – AI language model for intelligent summarization  
- **PostgreSQL** – Stores advisor feedback for improvements  
- **JavaScript (JS)** – Custom Retool logic for API integration  
- **Retrieval-Augmented Generation (RAG)** – Enhances summaries using structured syllabus data  

## 🔧 How to Set Up & Use

1️⃣ **Import Retool App**  
- Download `ai_syllabus_summarizer.json` from the `/apps` folder.  
- Go to Retool and create a new app.  
- Click **Import JSON** and select `ai_syllabus_summarizer.json`.  

2️⃣ **Set Up AI API Key (If Needed)**  
- Configure **Claude 3** or **GPT-4o** API if Retool does not have built-in AI capabilities.  

3️⃣ **Run the Application**  
- Upload a syllabus and view the AI-generated summary instantly.  

## 🔒 Privacy & Ethical Considerations

🚫 **No Data Storage** – The tool does not retain uploaded syllabi.  
🔄 **Responsible AI** – AI strictly follows syllabus content without adding assumptions.  
📢 **Transparent Feedback Mechanism** – Advisors can report inaccuracies to refine AI outputs.  

## 📂 Folder Structure
```
📂 apps/        # Exported Retool JSON files
📂 db/          # SQL schema for chat history
README.md       # Main documentation file
LICENSE         # Open-source license file
```


## 📸 Screenshots
![image](https://github.com/user-attachments/assets/1b8ffa8d-c8c4-4da2-b8e3-e9022a0312b7)

![image](https://github.com/user-attachments/assets/a7f440e7-95ed-447c-a9ae-be874ddb9165)

![image](https://github.com/user-attachments/assets/b4e98078-71d7-4f30-95f4-24cc5a14afda)

## 📝 License

This project is licensed under the **MIT License** – feel free to use and modify.

## 🤝 Contributing

Want to contribute? Fork the repo, create a new branch, and submit a **Pull Request (PR)**. Suggestions and improvements are welcome!

## 💎 Contact

Developed by **Rishi Ramesh**  
🔗 **LinkedIn:** [https://www.linkedin.com/in/rishi0309/](https://www.linkedin.com/in/rishi0309/)
