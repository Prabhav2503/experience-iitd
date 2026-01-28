-- SQL Commands to create tables in Supabase (PostgreSQL)
-- Run these commands in Supabase SQL Editor

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Questions table
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question TEXT NOT NULL,
    category TEXT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    number TEXT NOT NULL,
    answer TEXT DEFAULT '',
    answered_by TEXT DEFAULT '',
    likes INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Replies table
CREATE TABLE replies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question_id UUID NOT NULL,
    reply TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    number TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT fk_question FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

-- Create Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_questions_likes ON questions(likes DESC);
CREATE INDEX idx_replies_question_id ON replies(question_id);
CREATE INDEX idx_users_username ON users(username);

-- Optional: Enable Row Level Security (RLS) for tables
-- Uncomment and modify as needed for your security requirements

-- ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE replies ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Example RLS policies (customize as needed):
-- Allow public read access to questions
-- CREATE POLICY "Allow public read access" ON questions FOR SELECT USING (true);

-- Allow authenticated users to insert questions
-- CREATE POLICY "Allow authenticated insert" ON questions FOR INSERT WITH CHECK (true);
