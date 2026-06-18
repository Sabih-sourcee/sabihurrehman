import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    'Missing Supabase env vars. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.',
  )
}

export type LandingSource = 'founderbreif' | 'theprompt'

export type LandingLeadInsert = {
  source: LandingSource
  full_name?: string | null
  email?: string | null
  phone?: string | null
  profile_status?: string | null
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey)

export async function submitLandingLead(lead: LandingLeadInsert) {
  return supabase.from('landing_leads').insert(lead)
}
