-- Shared leads table for founderbreif + theprompt landing pages
create table if not exists public.landing_leads (
  id uuid primary key default gen_random_uuid(),
  source text not null check (source in ('founderbreif', 'theprompt')),
  full_name text,
  email text,
  phone text,
  profile_status text,
  lead_status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint landing_leads_contact_check check (
    (email is not null and length(trim(email)) > 0)
    or (phone is not null and length(trim(phone)) > 0)
  )
);

create index if not exists landing_leads_source_created_at_idx
  on public.landing_leads (source, created_at desc);

alter table public.landing_leads enable row level security;

drop policy if exists "landing_leads_insert_public" on public.landing_leads;

create policy "landing_leads_insert_public"
  on public.landing_leads
  for insert
  to anon, authenticated
  with check (
    source in ('founderbreif', 'theprompt')
    and (
      (source = 'founderbreif' and email is not null and length(trim(email)) > 0 and position('@' in trim(email)) > 1)
      or (source = 'theprompt' and phone is not null and length(trim(phone)) >= 10 and full_name is not null and length(trim(full_name)) > 0)
    )
  );

create or replace function public.set_landing_leads_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists landing_leads_updated_at on public.landing_leads;

create trigger landing_leads_updated_at
  before update on public.landing_leads
  for each row
  execute function public.set_landing_leads_updated_at();
