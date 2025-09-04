import 'https://deno.land/x/xhr@0.3.0/mod.ts';
Deno.serve(async (req)=>{
  const { query } = await req.json();
  const AZURE_OPENAI_URL = Deno.env.get('AZURE_OPENAI_URL').replace(/\/$/, '');
  const AZURE_OPENAI_KEY = Deno.env.get('AZURE_OPENAI_KEY');
  const AZURE_OPENAI_DEPLOYMENT = Deno.env.get('AZURE_OPENAI_DEPLOYMENT'); // example: 'gpt-4o'
  const AZURE_OPENAI_API_VERSION = Deno.env.get('AZURE_OPENAI_API_VERSION'); // example: '2025-01-01-preview'
  const data = {
    message: `${AZURE_OPENAI_URL}`
  };
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Connection': 'keep-alive'
    }
  });
});
