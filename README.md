# 🌊 TalaIsda
*A Web Application for Discovering and Sharing Philippine Fish Species*  

## 📖 Overview
**TalaIsda** is a web-based platform that showcases fish species found in the Philippines. Users can explore species by region, contribute new discoveries, and learn about biodiversity. The system also includes an admin dashboard to manage and approve user submissions.  

## ✨ Features
- 🔍 **Browse Fish by Region** – View species categorized under Luzon, Visayas, and Mindanao.  
- ➕ **Submit New Discoveries** – Contributors can add species with details like:  
  - Contributor Name & Info  
  - Species Name (Common & Scientific)  
  - Region & Location  
  - Description  
  - Optional Images  
- ✅ **Admin Dashboard** – Admins can review submissions, approve, or delete them.  
- 🗂 **Dynamic Display** – Approved fish entries automatically appear on the **New Discoveries** page.  
- 🔎 **Filtering & Sorting** – Users can filter by region, search by keyword, and sort by date (newest/oldest).  
- 📱 **Responsive Design** – Optimized for desktop and mobile.  

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** Microsoft SQL Server  
- **Other:** File upload handling for images  

## ⚙️ Installation & Setup
1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/talaisda.git
   cd talaisda

2. **Install Dependencies**
   ```bash
   npm install

3. **Set up database**
  - Create a database named *TalaIsdaDB* in **MS SQL Server**.

  - Run the provided SQL Scripts to create tables.

4. **Run the server**
   ```bash
   node index.js

## 👥 Contributors

**Project Lead**: Vergel Santiago

**Team Members**:

- Mackenzie Iguiron

- Leueil Shem Naranjo

- Marius Panahon

## 🌐 Future Improvements

- User login system for contributors

- Fish species verification with experts

- More interactive data visualization
