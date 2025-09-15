Please refer 
 - https://supabase.com/docs/guides/local-development/managing-config
 - https://github.com/supabase/supabase/blob/master/examples/slack-clone/nextjs-slack-clone-dotenvx/README.md


npx @dotenvx/dotenvx set DUMMY "dummy" -f supabase/.env.production


npx @dotenvx/dotenvx set DUMMY "dummy" -f supabase/.env.production

    Need to install the following packages:
    @dotenvx/dotenvx@1.49.0
    Ok to proceed? (y) y
    ✔ set DUMMY with encryption (supabase/.env.production)
    ✔ key added to supabase/.env.keys (DOTENV_PRIVATE_KEY_PRODUCTION)
    ⮕  next run [dotenvx ext gitignore --pattern .env.keys] to gitignore .env.keys
    ⮕  next run [DOTENV_PRIVATE_KEY_PRODUCTION='<decrypt-key>' @dotenvx/dotenvx get DUMMY] to test decryption locally



npx @dotenvx/dotenvx set AZURE_OPENAI_URL "https://nexus-black-internal-eastus2.openai.azure.com/" -f supabase/.env.production
npx @dotenvx/dotenvx set AZURE_OPENAI_KEY "<REPLACE_WITHKEY>" -f supabase/.env.production
npx @dotenvx/dotenvx set AZURE_OPENAI_DEPLOYMENT "gpt-4o" -f supabase/.env.production
npx @dotenvx/dotenvx set AZURE_OPENAI_API_VERSION "2025-01-01-preview" -f supabase/.env.production
npx @dotenvx/dotenvx set ABC "dummy" -f supabase/.env.production


npx @dotenvx/dotenvx set AZURE_OPENAI_URL "https://nexus-black-internal-eastus2.openai.azure.com/" -f supabase/.env
npx @dotenvx/dotenvx set AZURE_OPENAI_KEY "<REPLACE_WITHKEY>" -f supabase/.env
npx @dotenvx/dotenvx set AZURE_OPENAI_DEPLOYMENT "gpt-4o" -f supabase/.env
npx @dotenvx/dotenvx set AZURE_OPENAI_API_VERSION "2025-01-01-preview" -f supabase/.env
npx @dotenvx/dotenvx set ABC "dummy" -f supabase/.env



npx supabase link --project-ref "$epcgshxoajvqwgrmwduv"
npx supabase secrets set --env-file supabase/.env.keys
npx supabase link --project-ref "$dgrnuytifkjzlkpgtjzo"
npx supabase secrets set --env-file supabase/.env.keys