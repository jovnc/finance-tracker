# Finance Tracker by Jovan

This is a capstone project to consolidate my learnings for The Ultimate React Course 2024 by Jonas Schmedtmann. This Finance tracker is built using React frontend framework, and incorporates many React libraries such as React Router, Recharts, Context API, Redux, and more. It is also integrated with Supabase as the backend database built on top of PostgreSQL.

I am hosting the web application using Netlify (free to use) with built-in CI/CD features that integrates seamlessly with GitHub repositories. Click <a href="https://snazzy-chebakia-6a115c.netlify.app"> here </a> to view the web-site.

Use the following credentials for demo:
Email: demo@gmail.com
Password: demofinance123

NOTE: Demo account is restricted fromm changing email and password, but all other features is open for public use (shared account)

## Application Features

1. Authentication: login and logout feature for users
2. User settings: users can edit their name, password, email
3. Dashboard: quick summary of overall finances using charts and diagrams, with key statistics of the user's expenditure
4. Transaction: users can upload their expenditures as well as their income into the application and categorise their spendings and income sources into a table, which shows the history of transactions
5. Categories: users can add custom categories and customize the label style in the settings page, as well as delete (and bulk delete) categories in the settings page

## Creating your own Finance Tracker

### Why you should have your own FINANCE TRACKER

#### 1. Keep personal data private

Using publicly available software such as those from the App Store means that these companies HAVE ACCESS TO YOUR DATA. Financial data is very important and should be kept private, these corporations can sell your data to advertising companies for targeted advertisments and even sell it in the black market to be used by individuals with malicious intent (eg. targeted phishing, scam emails, etc.)

#### 2. ITS FREE and EASY to set up

All you need is a Supabase account (free to sign up and use, up to a certain amount of storage, which isn't necessary in this use case) and/or a Netlify account (optional). You can also host the application on your localhost instead of using Netlify.

### Setting up the FINANCE TRACKER

#### 1. Clone the repository from GitHub and install Node Dependencies
Make sure that you have git and node installed onto your computer first before proceeding, for more information on how to download git and node, refer to the official documentation.
```     
git clone [URL]
```
```
npm install
```

#### 2. Create .env file to store environment variables for Supabase API Key and URL
Right click on the main folder and create a new file named `.env`, then enter your supabase API Key and URL. You need to first create a supabase account and create a project, then use that API key and endpoint URL for the database. Replace the [] with your URL and API key.
```
VITE_SUPABASE_URL = [SUPABASE_URL]
VITE_SUPABASE_API_KEY = [SUPABASE_API_KEY]
```

#### 3. Set up Supabase with 2 tables: transactions and categories (with their respective table columns) and set up appropriate Row Level Security (set to auth users only)
You will need to create two tables in supabase, and their respective columns, as well as create a primary-foreign key relationship between the transactions table and categories table. Afterwards, you will need to implement RLS to the tables to ensure that only authenticated users can view the rows in the database (their own content). 

Note: this section requires more configurations, and is meant for users familiar with databases

#### 4. Run the application using npm run dev on development environment
You can host the application on your localhost machine, or deploy it in the cloud using Netlify or Vercel, or even on AWS or Azure.
```
npm run dev
```
