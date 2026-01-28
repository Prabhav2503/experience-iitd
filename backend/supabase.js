import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cyhaajspqwmstrdbcmtt.supabase.co'; // Enter your Supabase project URL here
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5aGFhanNwcXdtc3RyZGJjbXR0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODgzNTA3NSwiZXhwIjoyMDg0NDExMDc1fQ.Z6BrYdE4-u47k5-6OOKVAlmDJ7BwQEL-McHHS-ZmSk0'; // Enter your Supabase anon/service key here

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
