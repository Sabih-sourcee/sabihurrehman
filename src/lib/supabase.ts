import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export type LandingSource = 'founderbreif' | 'theprompt'

export type LandingLeadInsert = {
  source: LandingSource
  full_name?: string | null
  email?: string | null
  phone?: string | null
  profile_status?: string | null
}

let supabase: SupabaseClient | null = null

function getSupabase() {
  if (!supabaseUrl || !supabasePublishableKey) {
    return null
  }

  if (!supabase) {
    supabase = createClient(supabaseUrl, supabasePublishableKey)
  }

  return supabase
}

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabasePublishableKey)
}

export async function submitLandingLead(lead: LandingLeadInsert) {
  const client = getSupabase()

  if (!client) {
    return {
      data: null,
      error: {
        message:
          'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in Vercel.',
      },
    }
  }

  return client.from('landing_leads').insert(lead)
}
